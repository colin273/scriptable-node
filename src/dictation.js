"use strict";

const defaultLocale = require("./device.js").locale();

exports.start = async function (locale = defaultLocale) {
    // Dictate text, return transcription
    // Here's some placeholder text for the time being
    return "Dictation is still under construction. Come back later!";
};