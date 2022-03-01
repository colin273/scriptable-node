"use strict";

const readline = require("readline");

const TextField = require("./text-field.js");

async function shellPresent(alertType) {
    // Need to create a command line interface to simulate the fields and options of an Alert
    // Support for actual UI alerts may come later.
}

class Action {
    /**
     * 
     * @param {string} title 
     * @param {*} type 
     */
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

    /**
     * @param {string} title
     */
    addAction(title) {
        this.#actions.push(new Action(title, "action"));
    }

    /**
     * @param {string} title
     */
    addDestructiveAction(title) {
        this.#actions.push(new Action(title, "destructive"));
    }

    /**
     * @param {string} title
     */
    addCancelAction(title) {
        this.#actions.push(new Action(title, "cancel"));;
    }

    /**
     * @param {string} text
     * @param {string} placeholder
     */
    addTextField(placeholder, text) {
        const field = new TextField(placeholder, text, false);
        this.#fields.push(field);
        return field;
    }

    /**
     * @param {string} text
     * @param {string} placeholder
     */
    addSecureTextField(placeholder, text) {
        const field = new TextField(placeholder, text, true);
        this.#fields.push(field);
        return field;
    }

    /**
     * @param {number} index
     */
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