"use strict";

const readline = require("readline");

const TextField = require("./text-field.js");

async function shellPresent(alertType) {
    // Need to create a command line interface to simulate the fields and options of an Alert
    // Support for actual UI alerts may come later.
}

class Action {
    constructor(title, type) {
        this.title = title;
        this.type = type;
    }
}

class Alert {
    #actions;
    #fields;
    #values;

    constructor() {
        this.title = null;
        this.message = null;
        this.#actions = [];
        this.#fields = [];
        this.#values = [];
    }

    addAction(title) {
        this.#actions.push(new Action(title, "action"));
    }

    addDestructiveAction(title) {
        this.#actions.push(new Action(title, "destructive"));
    }

    addCancelAction(title) {
        this.#actions.push(new Action(title, "cancel"));;
    }

    addTextField(placeholder, text) {
        const field = new TextField(placeholder, text, false);
        this.#fields.push(field);
        return field;
    }

    addSecureTextField(placeholder, text) {
        const field = new TextField(placeholder, text, true);
        this.#fields.push(field);
        return field;
    }

    textFieldValue(index) {
        return this.#values[index];
    }

    async present() {
        return (await this.presentAlert());
    }

    async presentAlert() {
        return (await shellPresent("alert"));
    }

    async presentSheet() {
        return (await shellPresent("sheet"));
    }
}

module.exports = Alert;