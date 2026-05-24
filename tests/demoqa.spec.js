import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Chaithra G');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('chaithra842001@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('bangalore');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('Bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:Chaithra G')).toBeVisible();
  await expect(page.getByText('Email:chaithra842001@gmail.com')).toBeVisible();
  await expect(page.getByText('Current Address :bangalore')).toBeVisible();
  await expect(page.getByText('Permananet Address :Bangalore')).toBeVisible();
});