const scriptableTypeError = require("../util/type-error.js");

module.exports = class Point {
  constructor(x, y) {
    let hasBadType;
    if (typeof x !== "number") {
        hasBadType = x;
    } else if (typeof y !== "number") {
        hasBadType = y;
    }
    if (hasBadType !== undefined) {
      scriptableTypeError("number", typeof hasBadType);
    }
    this.x = x;
    this.y = y;
  }
};