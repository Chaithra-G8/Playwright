const { test, expect } = require('@playwright/test');

test.describe('Practice Test Automation - Login Tests', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://practicetestautomation.com/practice-test-login/');
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('Test Case 1: Positive LogIn test with valid credentials', async () => {
    // Step 1: Type username into Username field
    await page.fill('input[name="username"]', 'student');

    // Step 2: Type password into Password field
    await page.fill('input[name="password"]', 'Password123');

    // Step 3: Click Submit button
    await page.click('button#submit');

    // Step 4: Verify new page URL contains logged-in-successfully
    await expect(page).toHaveURL(/logged-in-successfully/);

    // Step 5: Verify new page contains expected success text
    const successMessage = await page.locator('strong').first();
    await expect(successMessage).toContainText('Congratulations');

    // Step 6: Verify Log out button is displayed on the new page
    const logoutButton = await page.locator('a:has-text("Log out")');
    await expect(logoutButton).toBeVisible();
  });

  test('Test Case 2: Negative username test with invalid username', async () => {
    // Step 1: Type invalid username
    await page.fill('input[name="username"]', 'incorrectUser');

    // Step 2: Type password
    await page.fill('input[name="password"]', 'Password123');

    // Step 3: Click Submit button
    await page.click('button#submit');

    // Step 4: Verify error message is displayed
    const errorMessage = await page.locator('div#error').first();
    await expect(errorMessage).toBeVisible();

    // Step 5: Verify error message text is "Your username is invalid!"
    await expect(errorMessage).toContainText('Your username is invalid!');
  });

  test('Test Case 3: Negative password test with invalid password', async () => {
    // Step 1: Type username
    await page.fill('input[name="username"]', 'student');

    // Step 2: Type invalid password
    await page.fill('input[name="password"]', 'incorrectPassword');

    // Step 3: Click Submit button
    await page.click('button#submit');

    // Step 4: Verify error message is displayed
    const errorMessage = await page.locator('div#error').first();
    await expect(errorMessage).toBeVisible();

    // Step 5: Verify error message text is "Your password is invalid!"
    await expect(errorMessage).toContainText('Your password is invalid!');
  });
});
