// This exists because APIs such as Device are entirely synchronous
// in Scriptable, but the libraries to get the same data in Node.JS
// tend to use asynchronous functions or are ESM-only.
//
// Scriptable mimics the CommonJS module format, so that is what I have used.
// Therefore, ESM modules cannot be used directly in this project.
//
// This is a wrapper for those modules that are otherwise incompatible,
// intended to be used with child_process.execFileSync.

// Command line usage:
//   node <this file's name> <module type - cjs or esm> <module name to call> <name of method to run>
// CLI Example:
//   node async-syncifier.js cjs systeminformation osInfo
//
// JS usage:
//   child_process.execFileSync("node", [
//      <this file's name>,
//      <module type - cjs or esm>,
//      <name of module to require>,
//      <name of method to run>
//   ])
// JS example:
//   child_process.execFileSync("node", [
//     "async-syncifier.js",
//     "cjs",
//     "systeminformation",
//     "osInfo"
//   ])

"use strict";

const createLogMessage = require("./create-log-message.js");
const moduleName = process.argv[3];

let functionToRun;

(async () => {
    switch(process.argv[2]) {
        case "esm":
            functionToRun = await import(moduleName);
            break;
        case "cjs":
        default:
            functionToRun = require(moduleName);
    }
    for (const key of process.argv.slice(4)) functionToRun = functionToRun[key];
    process.stdout.write(createLogMessage(await functionToRun()));
})();