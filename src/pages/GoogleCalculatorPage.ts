import { BasePage } from './BasePage';
import { GoogleCalculatorLocators } from '../locators/GoogleCalculatorLocators';
import { ButtonMap } from '../types';
import { BUTTON_MAP } from '../constans';
import { Page } from 'puppeteer';

export class GoogleCalculatorPage extends BasePage {
  private buttonMap: ButtonMap;

  constructor(page: Page) {
    super(page);
    this.buttonMap = BUTTON_MAP;
  }

  async navigate(): Promise<void> {
    await this.navigateTo(GoogleCalculatorLocators.URL);
    await this.waitForSelector(GoogleCalculatorLocators.CALCULATOR);
  }

  async clickButton(button: string): Promise<void> {
    const buttonSelector = `${GoogleCalculatorLocators.CALCULATOR} ${GoogleCalculatorLocators.BUTTON(this.getJsName(button))}`;
    await this.click(buttonSelector);
  }

  async getResult(): Promise<string> {
    return this.getText(GoogleCalculatorLocators.RESULT);
  }

  async getNumberButtons(): Promise<string[]> {
    const selector = `${GoogleCalculatorLocators.CALCULATOR} ${GoogleCalculatorLocators.NUMBER_BUTTONS}`;
    return this.page.$$eval(selector, (tds: Element[]) => 
      tds.map(td => td.textContent?.trim() || '')
        .filter((b) => !isNaN(Number(b)) && b.trim() !== '')
    );
  }

  async getAllButtonTexts(): Promise<string[]> {
    const selector = `${GoogleCalculatorLocators.CALCULATOR} ${GoogleCalculatorLocators.NUMBER_BUTTONS}`;
    return this.page.$$eval(selector, (tds: Element[]) => 
      tds.map(td => td.textContent?.trim() || '')
    );
  }

  private getJsName(button: string): string {
    return this.buttonMap[button] || button;
  }
}