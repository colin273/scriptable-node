// Still unfinished:
// - screenSize
// - screenScale
// - preferredLanguages

"use strict";

const brightness = require("brightness");
const computerName = require("computer-name");
const { execFileSync } = require("child_process");
const { execString, getDirect } = require("../util/async-syncifier.js");
const runJXA = require("../util/run-jxa.js");
const Size = require("./size.js");
const scriptableTypeError = require("../util/type-error.js");

const IPHONE_MODEL = /iPhone\d+,\d+/;
const IPAD_MODEL = /iPad\d+,\d+/;

const infoStore = {};

const systemInStore = key => {
    if (!(key in infoStore)) {
        infoStore[key] = JSON.parse(getDirect("cjs", "systeminformation", key));
    }
    return infoStore[key];
};

module.exports = {
    name: computerName,

    systemName: function () {
        return systemInStore("osInfo").distro;
    },

    systemVersion: function () {
        return systemInStore("osInfo").release;
    },

    model: function () {
        // Not a perfect replacement (normally returns  "iPhone" or "iPad"),
        // but it'll do for now
        return systemInStore("chassis").model;
    },

    isPhone: function () {
        return this.model().match(IPHONE_MODEL) !== null;
    },

    isPad: function () {
        return this.model().match(IPAD_MODEL) !== null;
    },

    screenSize: function () {
        // Pick a random set of dimensions
        return new Size(400, 600)
    },

    screenResolution: function () {
        const displayData = systemInStore("graphics").displays[0];
        return new Size(displayData.resolutionX, displayData.resolutionY);
    },

    screenScale: function () {
    },

    screenBrightness: function () {
        try {
            return Number(execString(`require("brightness").get().then(level => {
                process.stdout.write(level.toString())
            })`));
        } catch {
            return 1;
        }
    },

    isInPortrait: function () {
        const screenSize = this.screenSize();
        return screenSize.width > screenSize.height;
    },

    isInPortraitUpsideDown: function () {
        // No way to detect upside down for portrait
        return false;
    },

    isInLandscapeLeft: function () {
        // No way to detect right or left for landscape
        return false;
    },

    isInLandscapeRight: function () {
        // No way to detect right or left for landscape
        return false;
    },

    isFaceUp: function () {
        // No position sensors in most devices that can run Node.JS
        return false;
    },

    isFaceDown: function () {
        // No position sensors in most devices that can run Node.JS
        return false;
    },

    batteryLevel: function () {
        const batteryData = JSON.parse(getDirect("cjs", "systeminformation", "battery"));
        if (batteryData.percent !== undefined) {
            return batteryData.percent / 100;
        }
        return 1;
    },

    isDischarging: function () {
        return !this.isCharging();
    },

    isCharging: function () {
        const batteryData = JSON.parse(getDirect("cjs", "systeminformation", "battery"));
        if (batteryData.isCharging !== undefined) return batteryData.isCharging;
        return false;
    },

    isFullyCharged: function () {
        return this.batteryLevel() === 1;
    },

    preferredLanguages: function () {
        // For now, assume en-US
        return ["en-US"];
    },

    locale: function () {
        if (!("locale" in infoStore)) {
            infoStore.locale = getDirect("esm", "os-locale", "osLocale")
                .replace("-", "_");
        }
        return infoStore.locale;
    },

    language: function () {
        return this.locale().slice(0, 2);
    },

    isUsingDarkAppearance: function () {
        if (process.platform === "darwin") {
            return execFileSync("osascript", [
                "-e",
                "tell app \"System Events\" to tell appearance preferences to get dark mode"
            ], { encoding: "utf-8" }).trim() === "true";
        }
        // For now, assume false on non-macOS platforms
        return false;
    },

    volume: function () {
        if (process.platform === "darwin") {
            const volumeSettings = JSON.parse(runJXA("JSON.stringify(app.getVolumeSettings())", true))
            if (volumeSettings.outputMuted) return 0;
            return volumeSettings.outputVolume / 100;
        }
        return Number(getDirect("cjs", "loudness", "getVolume")) / 100;
    },

    setScreenBrightness: function (percentage) {
        if (typeof percentage !== "number") {
            throw scriptableTypeError("number", typeof percentage)
        }
        try {
            brightness.set(percentage);
        } catch {}
    }
};