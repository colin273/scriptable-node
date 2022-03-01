"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  string: () => uuidv4().toUpperCase()
};