/*
To do: proper image format conversions for fromJPEG() and fromPNG().
Still haven't found a good synchronous method, so for now no conversion takes place.
Those two methods do the same thing: return the data from the image.
*/

"use strict";

const fs = require("fs");

const dataKey = Symbol.for("data");

class Data {
    constructor(data) {
        Object.defineProperty(this, dataKey, {
            value: data,
            enumerable: false,
            writable: false
        });
    }

    toRawString() {
        try {
            return this[dataKey].toString("utf-8");
        } catch {
            return null;
        }
    }

    toBase64String() {
        return this[dataKey].toString('base64');
    }

    getBytes() {
        return Array.from(this[dataKey]);
    }
}

module.exports = {
    fromBase64String: function (base64String) {
        try {
            return new Data(Buffer.from(base64String, "base64"));
        } catch {
            return null;
        }
    },

    fromFile: function (filePath) {
        return new Data(fs.readFileSync(filePath));
    },

    // Figure out how to differentiate/convert JPEG vs PNG later
    fromJPEG: function (image) {
        return new Data(image[dataKey]);
    },

    fromPNG: function (image) {
        return new Data(image[dataKey]);
    },

    fromString: function (string) {
        try {
            return new Data(Buffer.from(string, "utf-8"));
        } catch {
            return null;
        }
    }
};
// Uncomment once finished
// module.exports = Data;