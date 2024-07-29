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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleCalculatorPage = void 0;
const BasePage_1 = require("./BasePage");
const GoogleCalculatorLocators_1 = require("../locators/GoogleCalculatorLocators");
const constans_1 = require("../constans");
class GoogleCalculatorPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.buttonMap = constans_1.BUTTON_MAP;
    }
    navigate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.navigateTo(GoogleCalculatorLocators_1.GoogleCalculatorLocators.URL);
            yield this.waitForSelector(GoogleCalculatorLocators_1.GoogleCalculatorLocators.CALCULATOR);
        });
    }
    clickButton(button) {
        return __awaiter(this, void 0, void 0, function* () {
            const buttonSelector = `${GoogleCalculatorLocators_1.GoogleCalculatorLocators.CALCULATOR} ${GoogleCalculatorLocators_1.GoogleCalculatorLocators.BUTTON(this.getJsName(button))}`;
            yield this.click(buttonSelector);
        });
    }
    getResult() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getText(GoogleCalculatorLocators_1.GoogleCalculatorLocators.RESULT);
        });
    }
    getNumberButtons() {
        return __awaiter(this, void 0, void 0, function* () {
            const selector = `${GoogleCalculatorLocators_1.GoogleCalculatorLocators.CALCULATOR} ${GoogleCalculatorLocators_1.GoogleCalculatorLocators.NUMBER_BUTTONS}`;
            return this.page.$$eval(selector, (tds) => tds.map(td => { var _a; return ((_a = td.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ''; })
                .filter((b) => !isNaN(Number(b)) && b.trim() !== ''));
        });
    }
    getAllButtonTexts() {
        return __awaiter(this, void 0, void 0, function* () {
            const selector = `${GoogleCalculatorLocators_1.GoogleCalculatorLocators.CALCULATOR} ${GoogleCalculatorLocators_1.GoogleCalculatorLocators.NUMBER_BUTTONS}`;
            return this.page.$$eval(selector, (tds) => tds.map(td => { var _a; return ((_a = td.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ''; }));
        });
    }
    getJsName(button) {
        return this.buttonMap[button] || button;
    }
}
exports.GoogleCalculatorPage = GoogleCalculatorPage;
