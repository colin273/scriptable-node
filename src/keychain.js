"use strict";

// For now, use a dummy keychain system that just stores everything in a JSON
// Later, try to at least get the actual keychain integrated on macOS

const KEYCHAIN_PATH = "../config/keychain.json";

const { readFileSync, writeFileSync } = require('fs');

function readKeychain() {
    try {
        return JSON.parse(readFileSync(KEYCHAIN_PATH, { encoding: "utf-8" }));
    } catch {
        return {};
    }
}

function writeKeychain(obj) {
    writeFileSync(KEYCHAIN_PATH, JSON.stringify(obj, null, 2));
}

module.exports = {
    contains: function (key) {
        return key in readKeychain();
    },

    set: function (key, value) {
        const currentKeychain = readKeychain();
        currentKeychain[key] = value;
        writeKeychain(currentKeychain);
    },

    get: function (key) {
        const currentKeychain = readKeychain();
        if (!(key in currentKeychain)) {
            throw new Error(`The key '${key}' does not exist in the keychain.`);
        }
        return currentKeychain[key];
    },

    remove: function (key) {
        const currentKeychain = readKeychain();
        delete currentKeychain[key];
        writeKeychain(currentKeychain);
    }
}