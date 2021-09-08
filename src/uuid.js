"use strict";

const { v4 } = require("uuid");

exports.string = function() {
    return v4().toUpperCase();
};