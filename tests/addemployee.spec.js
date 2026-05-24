import { test, expect } from '@playwright/test';
import addempdata from "../testdata/addemployee.json"
import Exceljs from 'Exceljs'

test('Verify add employee with mandatory details', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.locator('input[name="username"]').fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.locator('input[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(addempdata.firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(addempdata.lastname);
  await page.getByRole('button', { name: 'Save' }).click();
});


test('verify validation for first name', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('sdddfgjkk;lpkmhhggffddssfghhjjjj');
  await expect(page.getByText('Should not exceed 30')).toBeVisible();
});

//test("verify flipkart login using a base url", async({page})=>{
//await page.goto('/')
//})
