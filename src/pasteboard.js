"use strict";

const { writeSync, readSync } = require("clipboardy");

module.exports = {
    copy: function () {
        this.copyString(string);
    },

    paste: function () {
        return this.pasteString();
    },

    copyString: function () {
        writeSync(string);
    },

    pasteString: function () {
        return readSync();
    },

    copyImage: function () {},

    pasteImage: function () {}
};