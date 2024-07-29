import puppeteer, { Browser, Page } from 'puppeteer';
import { GoogleCalculatorPage } from '../src/pages/GoogleCalculatorPage';
import { TestConfig } from '../config/test-config';

let page: Page;
let browser: Browser;
let calculatorPage: GoogleCalculatorPage;

jest.setTimeout(TestConfig.TIMEOUT);

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: TestConfig.HEADLESS });
  page = await browser.newPage();
  calculatorPage = new GoogleCalculatorPage(page);
});

afterAll(async () => {
  await browser.close();
});

describe('Google Calculator Tests', () => {
  beforeEach(async () => {
    await calculatorPage.navigate();
  });

  test('Addition: 5 + 10 should equal 15', async () => {
    await calculatorPage.clickButton('5');
    await calculatorPage.clickButton('+');
    await calculatorPage.clickButton('1');
    await calculatorPage.clickButton('0');
    await calculatorPage.clickButton('=');
    
    const result = await calculatorPage.getResult();
    expect(result).toBe('15');
  });

  test('Count number buttons', async () => {
    const numberButtons = await calculatorPage.getNumberButtons();
    expect(numberButtons.sort()).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    expect(numberButtons.length).toBe(10);
  });

  test('Total buttons count should be 34', async () => {
    const allButtonTexts = await calculatorPage.getAllButtonTexts();
    expect(allButtonTexts.length).toBe(34);
  });
});