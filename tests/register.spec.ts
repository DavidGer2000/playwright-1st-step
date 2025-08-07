import { test, expect } from './baseTest';
import { generateRandomUser } from '../fixtures/testData';

test('User can register and reach dashboard', async ({ registerPage, dashboardPage }) => {
  const user = generateRandomUser();
  await registerPage.goto();
  await registerPage.register(user.name, user.email, user.password);
  await dashboardPage.assertOnDashboard();
});