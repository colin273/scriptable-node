"use strict";

class TextField {
    #align;
    #keyboard;

    constructor(placeholder = null, text = null, secure = false) {
        this.font = null;
        this.isSecure = secure;
        this.placeholder = placeholder;
        this.text = text;
        this.textColor = null;
        
        this.#align = "left";
        this.#keyboard = "default";
    }

    centerAlignText() {
        this.#align = "center";
    }

    leftAlignText() {
        this.#align = "left";
    }

    rightAlignText() {
        this.#align = "right";
    }

    setDecimalPadKeyboard() {
        this.#keyboard = "decimalPad";
    }

    setDefaultKeyboard() {
        this.#keyboard = "default";
    }

    setEmailAddressKeyboard() {
        this.#keyboard = "emailAddress";
    }

    setNumberPadKeyboard() {
        this.#keyboard = "numberPad";
    }

    setNumbersAndPunctuationKeyboard() {
        this.#keyboard = "numbersAndPunctuation";
    }

    setPhonePadKeyboard() {
        this.#keyboard = "phonePad";
    }

    setTwitterKeyboard() {
        this.#keyboard = "twitter";
    }

    setURLKeyboard() {
        this.#keyboard = "url";
    }

    setWebSearchKeyboard() {
        this.#keyboard = "webSearch";
    }
}

module.exports = TextField;