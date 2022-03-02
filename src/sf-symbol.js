const Font = require("./font.js");

const weights = {
  ULTRA_LIGHT: "ultralight",
  THIN: "thin",
  LIGHT: "light",
  REGULAR: "regular",
  MEDIUM: "medium",
  SEMI_BOLD: "semibold",
  BOLD: "bold",
  HEAVY: "heavy",
  BLACK: "black"
};

Object.freeze(weights);

class SFSymbol {
  #name;
  #weight;
  #font;
  /**
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
    this.#weight = weights.REGULAR;
    this.#font = Font.body();
  }

  get image() {
    // Convert SFSymbol (a character in a font) to PNG
  }
  /**
   * @param {Font} font
   */
  applyFont(font) {
    this.#font = font;
  }

  applyUltraLightWeight() {
    this.#weight = weights.ULTRA_LIGHT;
  }

  applyThinWeight() {
    this.#weight = weights.THIN;
  }

  applyLightWeight() {
    this.#weight = weights.LIGHT;
  }

  applyRegularWeight() {
    this.#weight = weights.REGULAR;
  }

  applyMediumWeight() {
    this.#weight = weights.MEDIUM;
  }

  applySemiboldWeight() {
    this.#weight = weights.SEMI_BOLD;
  }

  applyBoldWeight() {
    this.#weight = weights.BOLD;
  }

  applyHeavyWeight() {
    this.#weight = weights.HEAVY;
  }

  applyBlackWeight() {
    this.#weight = weights.BLACK;
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
