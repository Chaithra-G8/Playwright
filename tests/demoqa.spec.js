import { test, expect } from '@playwright/test';
import testData from '../testdata/demoqa.json';

const data = testData.testCases[0];

test('DemoQA Text Box Form Submission', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  
  // Fill Full Name
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill(data.fullName);
  
  // Fill Email
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(data.email);
  
  // Fill Current Address
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill(data.currentAddress);
  
  // Fill Permanent Address
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill(data.permanentAddress);
  
  // Submit Form
  await page.getByRole('button', { name: 'Submit' }).click();
  
  // Verify Results
  await expect(page.getByText(data.expectedResults.nameText)).toBeVisible();
  await expect(page.getByText(data.expectedResults.emailText)).toBeVisible();
  await expect(page.getByText(data.expectedResults.currentAddressText)).toBeVisible();
  await expect(page.getByText(data.expectedResults.permanentAddressText)).toBeVisible();
});