import { test, expect } from '@playwright/test';
import logindata from "../../testdata/login..json"
import addempdata from "../../testdata/addemployee.json"
import { faker } from '@faker-js/faker';

test('Verify add job', async ({ page }) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator('input[name="username"]').fill(process.env.APP_USERNAME)
await page.locator('input[type="password"]').fill(process.env.APP_PASSWORD)
await page.keyboard.press('Enter')
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
await page.getByRole('link', { name: 'Admin' }).click()
await page.getByText('Job', { exact: true }).click()
await page.getByRole('menuitem', { name: 'Job Titles' }).click()
await page.getByRole('button', { name: 'Add' }).click()

let r =(Math.random() + 1).toString(36).substring(7);
await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill(testjob+r)
await page.getByRole('textbox', { name: 'Type description here' }).fill("Analyzing the data")
await page.getByRole('button', { name: 'Save' }).click()
await page.locator(".orangehrm-horizontal-padding.orangehrm-vertical-padding")
})
