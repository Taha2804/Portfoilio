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
  const mime = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.woff2': 'font/woff2',
  }

  const server = http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0])
    if (p === '/') p = '/index.html'
    const fp = path.join(dist, p)
    if (!fs.existsSync(fp)) {
      res.writeHead(404)
      res.end('nf')
      return
    }
    const ext = path.extname(fp)
    res.setHeader('Content-Type', mime[ext] || 'application/octet-stream')
    res.setHeader('Cache-Control', 'no-cache')
    fs.createReadStream(fp).pipe(res)
  })
  await new Promise((r) => server.listen(4178, r))

  await page.goto('http://localhost:4178/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)

  // 1. Initial state checks
  const initialAsideCount = await page.locator('aside').count()
  const buttonCount = await page.locator('button').count()
  const canvasCount = await page.locator('canvas').count()

  // 2. Open terminal
  const terminalButton = page.locator('button[aria-label="Open terminal"]')
  await terminalButton.click()
  await page.waitForTimeout(500)
  const openedAsideCount = await page.locator('aside').count()

  // 3. Type 'view skills' and submit
  await page.keyboard.type('view skills')
  await page.keyboard.press('Enter')
  await page.waitForTimeout(800)

  const finalScrollY = await page.evaluate(() => window.scrollY)
  const skillsH2 = await page.locator('h2:has-text("Skills & Expertise")').count()

  // 4. Mobile responsiveness
  await page.setViewportSize({ width: 390, height: 844 })
  await page.waitForTimeout(300)
  const hasHorizontalScroll = await page.evaluate(() => document.body.scrollWidth > window.innerWidth + 2)

  // 5. Cleanup and summary
  await page.screenshot({ path: path.join(__dirname, 'term-interaction-verified.png'), fullPage: true })
  await browser.close()
  server.close()

  console.log(
    JSON.stringify(
      {
        buttonsRendered: buttonCount,
        particleCanvas: canvasCount,
        initialTerminalClosed: initialAsideCount === 0,
        terminalOpensOnClick: openedAsideCount === 1,
        pageScrolledAfterCommand: finalScrollY > 400,
        finalScrollY,
        skillsSectionFound: skillsH2 === 1,
        noMobileHorizontalScroll: !hasHorizontalScroll,
        browserErrors: msgs.length === 0 ? 'none' : msgs,
      },
      null,
      2,
    ),
  )
})()