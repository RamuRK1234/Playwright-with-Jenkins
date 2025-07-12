import { test, expect, Browser, Page, BrowserContext } from '@playwright/test';
import { firefox } from 'playwright';

test('loginmul test', async () => {
  const browser: Browser = await firefox.launch({ headless: false });

  const browser1: BrowserContext = await browser.newContext();
  const page1: Page = await browser1.newPage();

  const browser2: BrowserContext = await browser.newContext();
  const page2: Page = await browser2.newPage();

  // First user
  await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page1.locator('#input-email').fill('Rajesh@gmail.com');
  await page1.locator('#input-password').fill('Rajesh');
  await page1.locator('input[value="Login"]').click();

  const title1 = await page1.title();
  expect(title1).toBe('Account Login'); // Adjust this based on actual result

  // Second user
  await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  await page2.locator('#input-email').fill('Suresh@gmail.com');
  await page2.locator('#input-password').fill('Suresh');
  await page2.locator('input[value="Login"]').click();

  const title2 = await page2.title(); // ❗ This was incorrectly using page1 in your original code
  expect(title2).toBe('Account Login'); // Adjust if login succeeds

  await browser.close();
});