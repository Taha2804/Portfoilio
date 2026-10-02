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
  await new Promise((r) => server.listen(4181, r))

  await page.goto('http://localhost:4181/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)

  // Open terminal
  const terminalButton = page.locator('button[aria-label="Open terminal"]')
  await terminalButton.click()
  await page.waitForTimeout(800)

  const asideOpen = await page.locator('aside').count()
  console.log('aside count after open:', asideOpen)

  // Find the close button (X) - it's inside the aside
  const aside = page.locator('aside').first()
  const closeBtn = aside.locator('button[aria-label="Close terminal"]')
  const closeBtnCount = await closeBtn.count()
  console.log('close buttons inside aside:', closeBtnCount)

  // Also check the trigger button's aria-label now
  const triggerLabel = await page.locator('button[aria-label="Close terminal"]').count()
  console.log('buttons with aria-label Close terminal:', triggerLabel)

  // Click the close button
  await closeBtn.first().click()
  await page.waitForTimeout(800)

  const asideAfterClose = await page.locator('aside').count()
  console.log('aside count after close click:', asideAfterClose)

  // Check trigger label after close
  const openLabelCount = await page.locator('button[aria-label="Open terminal"]').count()
  console.log('buttons with aria-label Open terminal:', openLabelCount)

  console.log('console msgs:', msgs)
  await browser.close()
  server.close()
})()