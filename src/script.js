"use strict";

const path = require("path");
let output = null;

module.exports = {
    name: function () {
        if (require.main) {
            const fileName = require.main.filename;
            return path.basename(fileName, path.extname(fileName));
        }
        return module.id;
    },

    complete: function () {
        // Inform the system that script has completed
        // Does nothing for now
    },

    setShortcutOutput: function (value) {
        output = value;
    },

    setWidget: function (widget) {
        // Update the widget to display with the widget passed as input
        // Does nothing for now since widgets are not implemented
        // (Who knows, will they ever be implemented? macOS maybe?)
    },

    shortcutOutput: function () {
        return output;
    }
};