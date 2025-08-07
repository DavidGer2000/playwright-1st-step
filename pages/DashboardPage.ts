import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly heading: Locator;
  readonly welcomeText: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Dashboard' });
    this.welcomeText = page.getByText('ברוך הבא לדשבורד!');
  }

  async assertOnDashboard() {
    await this.heading.waitFor();
    await this.welcomeText.waitFor();
  }
}
