import { Page } from 'puppeteer';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async waitForSelector(selector: string, timeout = 5000): Promise<void> {
    await this.page.waitForSelector(selector, { timeout });
  }

  async click(selector: string): Promise<void> {
    await this.waitForSelector(selector);
    await this.page.click(selector);
  }

  async getText(selector: string): Promise<string> {
    await this.waitForSelector(selector);
    return this.page.$eval(selector, (el: Element) => el.textContent || '');
  }
}