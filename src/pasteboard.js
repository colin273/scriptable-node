"use strict";

const { writeSync, readSync } = require("clipboardy");

const copyString = (string) => writeSync(string);
const pasteString = () => readSync();
const copyImage = (image) => {}; // To-do
const pasteImage = () => {}; // To-do

module.exports = {
  copy: copyString,
  copyImage,
  copyString,
  paste: pasteString,
  pasteImage,
  pasteString
};