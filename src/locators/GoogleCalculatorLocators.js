"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleCalculatorLocators = void 0;
exports.GoogleCalculatorLocators = {
    URL: 'https://www.google.co.il/search?q=google+calculator',
    RESULT: '#cwos',
    CALCULATOR: '.tyYmIf',
    BUTTON: (jsname) => `[jsname="${jsname}"]`,
    NUMBER_BUTTONS: 'td',
};
