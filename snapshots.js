const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('/contrastmodetest.html');
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor('.c-page-section');
  await percySnapshot('ContrastModeTestPage');
});