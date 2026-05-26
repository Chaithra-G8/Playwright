import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from '../pages/SauceDemoLoginPage';

test('Verify login as standard user', async ({ page }) => {
  // Initialize Page Object
  const loginPage = new SauceDemoLoginPage(page);

  // Perform login
  await loginPage.performLogin('standard_user', 'secret_sauce');

  // Verify successful login
  await expect(loginPage.pageTitle).toBeVisible();
});