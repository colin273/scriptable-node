const Font = require('./font.js');

class SFSymbol {
  /**
   * @param {string} name
   */
  constructor(name) {
    Object.defineProperties(this, {
      _name: {
        value: name,
        writable: true
      },
      _weight: {
        value: "regular",
        writable: true
      },
      _font: {
        value: Font.body(),
        writable: true
      }
    })
  }

  get image() {
    // Convert SFSymbol (a character in a font) to PNG
  }
  /**
   * @param {Font} font
   */
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
/**
 * @param {string} symbolName
 */
exports.named = function(symbolName) {
  return new SFSymbol(symbolName);
}

// Uncomment this once class is complete
// module.exports = SFSymbol;