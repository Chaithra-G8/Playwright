import { test, expect } from '@playwright/test';

test(' Verify Login with valid credential', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page,waitForTimeout(1000)
  await expect(page.getByText('Time at Work')).toBeVisible();
});

test("verify login with valid user name and invalid password",async({page}) =>{
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 await page.getByRole('textbox', { name: 'Username' }).fill("Admin")
 await page.getByRole('textbox', { name: 'Password' }).fill("qwe")
 await page.getByRole('button', { name: 'Login' }).click()
await expect(await page.getByText('Invalid credentials', { exact: true })).toBeVisible()
})

test("verify login with invalid user name and valid password",async({page}) =>{
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 await page.getByRole('textbox', { name: 'Username' }).fill("ABC")
 await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
 await page.getByRole('button', { name: 'Login' }).click()
await expect(await page.getByText('Invalid credentials', { exact: true })).toBeVisible()
})

test("verify login with invalid user name and invalid password",async({page}) =>{
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 await page.getByRole('textbox', { name: 'Username' }).fill("Abc")
 await page.getByRole('textbox', { name: 'Password' }).fill("qwe")
 await page.getByRole('button', { name: 'Login' }).click()
await expect(await page.getByText('Invalid credentials', { exact: true })).toBeVisible()
})