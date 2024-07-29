"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const GoogleCalculatorPage_1 = require("../src/pages/GoogleCalculatorPage");
const test_config_1 = require("../config/test-config");
let page;
let browser;
let calculatorPage;
jest.setTimeout(test_config_1.TestConfig.TIMEOUT);
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    browser = yield puppeteer_1.default.launch({ headless: test_config_1.TestConfig.HEADLESS });
    page = yield browser.newPage();
    calculatorPage = new GoogleCalculatorPage_1.GoogleCalculatorPage(page);
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield browser.close();
}));
describe('Google Calculator Tests', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield calculatorPage.navigate();
    }));
    test('Addition: 5 + 10 should equal 15', () => __awaiter(void 0, void 0, void 0, function* () {
        yield calculatorPage.clickButton('5');
        yield calculatorPage.clickButton('+');
        yield calculatorPage.clickButton('1');
        yield calculatorPage.clickButton('0');
        yield calculatorPage.clickButton('=');
        const result = yield calculatorPage.getResult();
        expect(result).toBe('15');
    }));
    test('Count number buttons', () => __awaiter(void 0, void 0, void 0, function* () {
        const numberButtons = yield calculatorPage.getNumberButtons();
        expect(numberButtons.sort()).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
        expect(numberButtons.length).toBe(10);
    }));
    test('Total buttons count should be 34', () => __awaiter(void 0, void 0, void 0, function* () {
        const allButtonTexts = yield calculatorPage.getAllButtonTexts();
        expect(allButtonTexts.length).toBe(34);
    }));
});
