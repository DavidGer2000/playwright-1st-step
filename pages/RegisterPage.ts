import { Page, Locator } from '@playwright/test';

import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    super(page);
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.registerButton = page.getByRole('button', { name: 'Register' });
  }

  async goto() {
  await this.page.goto(this.baseUrl);
    await this.page.getByRole('button', { name: 'הרשמה' }).click();
  }

  async register(name: string, email: string, password: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.registerButton.click();
  }
}
