const { chromium } = require('playwright')
const http = require('http')
const fs = require('fs')
const path = require('path')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  const msgs = []
  page.on('console', (m) => msgs.push(m.type() + ': ' + m.text()))
  page.on('pageerror', (e) => msgs.push('PAGEERROR: ' + e.message))

  const dist = path.join(__dirname, 'dist')
  const mime = { '.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.json':'application/json','.woff2':'font/woff2' }
  const server = http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0])
    if (p === '/') p = '/index.html'
    const fp = path.join(dist, p)
    if (!fs.existsSync(fp)) { res.writeHead(404); res.end('nf'); return }
    res.setHeader('Content-Type', mime[path.extname(fp)] || 'application/octet-stream')
    fs.createReadStream(fp).pipe(res)
  })
  await new Promise((r) => server.listen(4180, r))

  await page.goto('http://localhost:4180/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)

  const asideCount = await page.locator('aside').count()
  console.log('initial asides:', asideCount)

  const terminalButton = page.locator('button[aria-label="Open terminal"]')
  const btnCount = await terminalButton.count()
  console.log('terminal buttons:', btnCount)
  await terminalButton.click()
  await page.waitForTimeout(800)

  const asideAfter = await page.locator('aside').count()
  console.log('asides after open:', asideAfter)

  const input = page.locator('input[type="text"]')
  const inputCount = await input.count()
  console.log('inputs:', inputCount)
  const focused = await input.first().evaluate((el) => document.activeElement === el)
  console.log('input focused:', focused)

  await page.keyboard.type('view skills')
  await page.waitForTimeout(300)
  const val = await input.first().inputValue()
  console.log('input value:', JSON.stringify(val))

  await page.keyboard.press('Enter')
  await page.waitForTimeout(1500)
  const scrollY = await page.evaluate(() => window.scrollY)
  console.log('scrollY after enter:', scrollY)

  const lines = await page.locator('aside .text-sm').count()
  console.log('output text nodes:', lines)

  await page.evaluate(() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }))
  await page.waitForTimeout(500)
  console.log('scrollY after direct:', await page.evaluate(() => window.scrollY))

  console.log('console msgs:', msgs)
  await browser.close()
  server.close()
})()