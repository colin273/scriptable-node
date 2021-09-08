const fs = require("fs");
// Set up args and config here
const scriptPath; // This will be defined by the CLI arguments

Object.assign(globalThis, require("./index.js"));

console.logError = (msg) => {
    _scriptable_deprecation("console.logError", "1.3", "Use console.error(message) instead.")
    console.error(msg)
};

Script.name = function () {
    return path.basename(scriptPath, path.extname(scriptPath));
};

function _scriptable_didRun(result, error) {
    if (error !== undefined) console.error(error)
}

let _postFunctions = [];

function dispatch(fn) {
    _postFunctions.push(fn);
}

let _scriptable_run = (async ()=>{}).constructor(fs.readFileSync(scriptPath));

// This is pretty raw, straight from how the actual app does it.
// I have not tested this code yet, so it will probably change.
_scriptable_run().then(output => {
    if (output !== undefined && Script.shortcutOutput() === null) {
        Script.setShortcutOutput(output);
    }
    _scriptable_didRun(output, undefined);
}).catch(err => {
    dispatch(function() {
        _scriptable_didRun(undefined, err);
    });
}).finally(() => _postFunctions.forEach(fn=>fn()));