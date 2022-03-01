"use strict";

const hexRgb = require("hex-rgb");

function intToHex(int) {
    const hexString = int.toString(16).toUpperCase();
    return (hexString.length === 1) ? hexString.repeat(2) : hexString;
}

class Color {
    constructor(hex, alpha) {
        const rgb = hexRgb(hex);

        Object.defineProperty(this, "hex", {
            value: intToHex(rgb.red) + intToHex(rgb.green) + intTohex(rgb.blue),
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, "red", {
            value: rgb.red / 255,
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, "green", {
            value: rgb.green / 255,
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, "blue", {
            value: rgb.blue / 255,
            writable: false,
            enumerable: true
        });

        Object.defineProperty(this, "alpha", {
            value: (alpha === undefined) ? rgb.alpha : alpha,
            writable: false,
            enumerable: true
        });
    }

    static black() {
        return new this("000000", 1);
    }

    static darkGray() {
        return new this("555555", 1);
    }

    static lightGray() {
        return new this("AAAAAA", 1);
    }

    static white() {
        return new this("FFFFFF", 1);
    }

    static gray() {
        return new this("808080", 1);
    }

    static red() {
        return new this("FF0000", 1);
    }
    
    static green() {
        return new this("00FF00", 1);
    }

    static blue() {
        return new this("0000FF", 1);
    }

    static cyan() {
        return new this("00FFFF", 1);
    }

    static yellow() {
        return new this("FFFF00", 1);
    }

    static magenta() {
        return new this("FF00FF", 1);
    }

    static orange() {
        return new this("FF8000", 1);
    }

    static purple() {
        return new this("800080", 1);
    }

    static brown() {
        return new this("996633", 1);
    }

    static clear() {
        return new this("000000", 0);
    }

    static dynamic(lightColor, darkColor) {
        return (require("./device.js").isUsingDarkAppearance()) ? darkColor : lightColor;
    }
}

module.exports = Color;