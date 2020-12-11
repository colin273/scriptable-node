const Font = require('./font.js');

class SFSymbol {
  constructor(name) {
    this._name = name;
    this._weight = "regular";
    this._font = Font.body();
  }

  get image() {
    // Convert SFSymbol (a character in a font) to PNG
  }

  applyFont(font) {
    this._font = font;
  }

  applyUltraLightWeight() {
    this._weight = "ultraLight";
  }

  applyThinWeight() {
    this._weight = "thin";
  }

  applyLightWeight() {
    this._weight = "light";
  }

  applyRegularWeight() {
    this._weight = "regular";
  }

  applyMediumWeight() {
    this._weight = "medium";
  }

  applySemiboldWeight() {
    this._weight = "semibold";
  }

  applyBoldWeight() {
    this._weight = "bold";
  }

  applyHeavyWeight() {
    this._weight = "heavy";
  }

  applyBlackWeight() {
    this._weight = "black";
  }
}

exports.named = function(symbolName) {
  return new SFSymbol(symbolName);
}