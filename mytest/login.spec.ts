import { test, expect, Browser, Page } from '@playwright/test';
import { firefox } from 'playwright'; // importing only firefox as that's what you're using

test('login test', async () => {
  const browser: Browser = await firefox.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

  await page.locator('#input-email').fill('Rajesh@gmail.com');
  await page.locator('#input-password').fill('Rajesh');

  // Fixing the selector: [value()="Login"] is incorrect
  await page.locator('input[value="Login"]').click();

  const title = await page.title();
  expect(title).toBe('Account Login'); // .toBe instead of .toEqual

  await browser.close(); // added 'await'
});