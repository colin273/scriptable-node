"use strict";

const { execFileSync } = require("child_process");
const computerName = require("computer-name");
const brightness = require("brightness");
const { join } = require("path");

const Size = require("./size.js");

const infoStore = {};

function getDirect() {
    return execFileSync("node", [
        join(__dirname, "..", "util/device-syncifier.js"),
        ...Array.from(arguments)
    ], {
        encoding: "utf-8"
    });
}

function runJXA(script, standardAdditions) {
    if (standardAdditions) {
        script = `app = Application.currentApplication();
        app.includeStandardAdditions = true;
        ` + script;
    }
    return execFileSync("osascript", [
        "-l",
        "JavaScript",
        "-e",
        script
    ], {
        encoding: "utf-8"
    });
}

function systemInStore(key) {
    if (!(key in infoStore)) {
        infoStore.osInfo = getDirect("cjs", "systeminformation", key);
    }
}

module.exports = {
    name: computerName,

    systemName: function () {
        systemInStore("osInfo");
        return infoStore.osInfo.distro;
    },

    systemVersion: function () {
        systemInStore("osInfo");
        return infoStore.osInfo.release;
    },

    model: function () {
    },

    isPhone: function () {
        systemInStore("osInfo");
        return infoStore.osInfo.distro === "iOS";
    },

    isPad: function () {
        return !this.isPhone();
    },

    screenSize: function () {
        // Pick a random set of dimensions
        return new Size(400, 600)
    },

    screenResolution: function () {
        systemInStore("displays");
        const displayData = infoStore.displays[0];
        return new Size(displayData.resolutionX, displayData.resolutionY);
    },

    screenScale: function () {
    },

    screenBrightness: function () {
        return getDirect("cjs", "brightness", "get");
    },

    isInPortrait: function () {
        const screenSize = this.screenSize();
        return screenSize.width > screenSize.height;
    },

    isInPortraitUpsideDown: function () {
        // No way to check for this so far
        return false;
    },

    isInLandscapeLeft: function () {
        // If in landscape, assume landscape left for now
        return !this.isInPortrait();
    },

    isInLandscapeRight: function () {
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
        // For now, assume English
        return "en";
    },

    isUsingDarkAppearance: function () {
        // For now, assume false
        return false;
    },

    volume: function () {
        if (process.platform === "darwin") {
            return JSON.parse(runJXA("JSON.stringify(app.getVolumeSettings);", true)).outputVolume / 100
        }
        return Number(getDirect("cjs", "loudness", "getVolume")) / 100;
    },

    setScreenBrightness: function (percentage) {
        try {
            brightness.set(percentage);
        } catch {}
    }
};