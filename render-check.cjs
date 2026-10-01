const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  const errors = []

  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push('CONSOLE: ' + msg.text())
  })
  page.on('pageerror', (err) => errors.push('PAGEERROR: ' + err.message))

  // Serve the built dist with a tiny static server
  const http = require('http')
  const fs = require('fs')
  const path = require('path')
  const dist = path.join(__dirname, 'dist')
  const server = http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0])
    if (p === '/') p = '/index.html'
    const fp = path.join(dist, p)
    if (!fs.existsSync(fp)) { res.writeHead(404); res.end('not found'); return }
    const ext = path.extname(fp).slice(1)
    const types = { html: 'text/html', js: 'application/javascript', css: 'text/css', png: 'image/png', jpg: 'image/jpeg', ico: 'image/x-icon', svg: 'image/svg+xml' }
    res.setHeader('Content-Type', types[ext] || 'application/octet-stream')
    res.setHeader('Cache-Control', 'no-cache')
    fs.createReadStream(fp).pipe(res)
  })
  await new Promise((r) => server.listen(4173, r))

  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle', timeout: 20000 })
  await page.waitForTimeout(1500)

  const checks = {
    heroName: await page.locator('h1:has-text("Taha Aliasgar Badami")').count(),
    heroTitle: await page.locator('h2:has-text("Cybersecurity Analyst")').count(),
    skillsSection: await page.locator('#skills').count(),
    experienceSection: await page.locator('#experience').count(),
    projectsSection: await page.locator('#projects').count(),
    aboutSection: await page.locator('#about').count(),
    contactSection: await page.locator('#contact').count(),
    olympusRole: await page.locator('text=IT Support Engineer / Security Analyst L1').count(),
    olympusCompany: await page.locator('text=Olympus Computers').count(),
    ceh: await page.locator('text=Certified Ethical Hacker (CEH)').count(),
    terminalToggle: await page.locator('button[aria-label="Open terminal"]').count(),
    particleCanvas: await page.locator('canvas').count(),
    footer: await page.locator('text=Designed & built by Taha Badami').count(),
    ceh: await page.locator('text=Certified Ethical Hacker (CEH)').count(),
    chfi: await page.locator('text=Computer Hacking Forensic Investigator (CHFI)').count(),
    ccna: await page.locator('text=Cisco Certified Network Associate (CCNA)').count(),
  }

  await page.screenshot({ path: path.join(__dirname, 'render-v2.png'), fullPage: true })
  await browser.close()
  server.close()

  console.log('CHECKS:', JSON.stringify(checks, null, 2))
  console.log('ERRORS:', errors.length ? errors.join('\n') : 'none')
  const failed = Object.entries(checks).filter(([, v]) => v === 0).map(([k]) => k)
  if (failed.length) { console.log('FAILED:', failed.join(', ')); process.exit(1) }
  if (errors.length) { console.log('HAS_ERRORS'); process.exit(1) }
  console.log('ALL_CHECKS_PASS')
})()