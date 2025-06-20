const { test, expect } = require('@playwright/test');

test('site loads and shows the homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/conduit/i); // RealWorld app uses this title
});
