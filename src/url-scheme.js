// No support for the following deprecated methods because they depend on being run
// in the Scriptable app environment via a URL scheme--their functionality was moved
// to args:
// - allParameters()
// - parameter()

"use strict";

const Script = require("./script.js");
const encodedName = encodeURIComponent(require("path").basename(Script.name()));

module.exports = {
    forOpeningScript: function () {
        return `scriptable:///open/${encodedName}`;
    },

    forOpeningScriptSettings: function () {
        return `scriptable:///open/${encodedName}?openSettings=true`;
    },

    forRunningScript: function () {
        return `scriptable:///run/${encodedName}`;
    }
};