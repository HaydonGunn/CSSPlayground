const PercyScript = require('@percy/script');
const httpServer = require('http-server');

const PORT = process.env.PORT_NUMBER || 8000;
const TEST_URL = `http://localhost:${PORT}/build/ContrastModeTest.html`;

PercyScript.run(async (page, percySnapshot) => {
  let server = httpServer.createServer();
  server.listen(PORT);  

  console.log(`Server started at ${TEST_URL}`);

  // Wait for network idle for at least 500ms, means the image will load
  await page.goto(TEST_URL, {"waitUntil" : "networkidle0"});

  // await page.waitFor('.c-page-section');

  await percySnapshot('my first test', { widths: [1200] });

  await page.click('button[data-reveal-trigger]');

  await percySnapshot('reveal button clicked', { widths: [1200] });

  // ensure the page has loaded before capturing a snapshot
  // await page.waitFor('.c-page-section');

  server.close(); 
});

