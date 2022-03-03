// No support for the following deprecated methods because they depend on being run
// in the Scriptable app environment via a URL scheme--their functionality was moved
// to args:
// - allParameters()
// - parameter()

"use strict";

const Script = require("./script.js");
const URL_PREFIX = "scriptable:///";
const encodedName = encodeURIComponent(require("path").basename(Script.name()));

const forOpeningScript = () => `${URL_PREFIX}open/${encodedName}`;
const forOpeningScriptSettings = () => forOpeningScript() + "?openSettings=true";
const forRunningScript = () => `${URL_PREFIX}run/${encodedName}`;

module.exports = {
  forOpeningScript,
  forOpeningScriptSettings,
  forRunningScript
};