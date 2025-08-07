import { Page } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export class BasePage {
  protected readonly page: Page;
  protected readonly baseUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = process.env.BASE_URL!;
  }
}
