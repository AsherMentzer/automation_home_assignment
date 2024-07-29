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
exports.BasePage = void 0;
class BasePage {
    constructor(page) {
        this.page = page;
    }
    navigateTo(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(url);
        });
    }
    waitForSelector(selector_1) {
        return __awaiter(this, arguments, void 0, function* (selector, timeout = 5000) {
            yield this.page.waitForSelector(selector, { timeout });
        });
    }
    click(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForSelector(selector);
            yield this.page.click(selector);
        });
    }
    getText(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForSelector(selector);
            return this.page.$eval(selector, (el) => el.textContent || '');
        });
    }
}
exports.BasePage = BasePage;
