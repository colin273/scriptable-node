"use strict";

const { execFileSync } = require("child_process");

const execString = script => {
    return execFileSync("node", ["-e", script], { encoding: "utf-8" });
};

class WrapperScript {
    constructor(starter = "") {
        if (typeof starter === "string") {
            this.script = starter;
        } else if (starter instanceof String) {
            this.script = starter.toString();
        } else {
            this.script = "";
        }
    }

    addLine(str) {
        this.script += str + "\n";
    }

    asyncWrap() {
        const asyncFunc = (async ()=>{}).constructor(this.script).toString();
        this.script = "(" + asyncFunc + ")();"
    }
}

const getDirect = (type, moduleName, fnName) => {
    const wrapperScript = new WrapperScript("\"use strict\"\n;");
    wrapperScript.addLine(`const scriptData = ${JSON.stringify({ moduleName, fnName })};`);
    wrapperScript.addLine(`const createLogMessage = ${require("./create-log-message.js").toString()};`);
    let importStatement;
    switch (type) {
        case "esm":
            importStatement = "await import";
            break;
        case "cjs":
        default:
            importStatement = "require";
    }
    wrapperScript.addLine(`const moduleToRun = ${importStatement}(scriptData.moduleName);`);
    wrapperScript.addLine("const functionToRun = moduleToRun[scriptData.fnName];");
    wrapperScript.addLine("const executedFunction = await functionToRun();");
    wrapperScript.addLine("process.stdout.write(createLogMessage(executedFunction));");
    wrapperScript.asyncWrap();
    return execString(wrapperScript.script);
}

module.exports = { execString, WrapperScript, getDirect };