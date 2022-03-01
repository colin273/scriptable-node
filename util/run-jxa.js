module.exports = (script, standardAdditions) => {
    if (standardAdditions) {
        script = `app = Application.currentApplication();
        app.includeStandardAdditions = true;
        ${script}`;
    }
    return require("child_process").execFileSync("osascript", [
        "-l",
        "JavaScript",
        "-e",
        script
    ], {
        encoding: "utf-8"
    });
};