import { test, expect } from './baseTest';

import * as dotenv from 'dotenv';
dotenv.config();

const validUser = {
  email: process.env.VALID_USER_EMAIL!,
  password: process.env.VALID_USER_PASSWORD!
};

test('User can login and reach dashboard', async ({ loginPage, dashboardPage }) => {
  await loginPage.goto();
  await loginPage.login(validUser.email, validUser.password);
  await dashboardPage.assertOnDashboard();
});