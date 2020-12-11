const Size = require('./size');

class DrawContext {
  constructor() {
    this.size = new Size(200, 200);
    this.respectScreenScale = false;
    this.opaque = true;
  }

  getImage() {
  }

  drawImageInRect(image, rect) {
  }

  drawImageAtPoint(image, point) {
  }

  setFillColor(color) {
  }

  setStrokeColor(color) {
  }

  setLineWidth(width) {
  }

  fill(rect) {
  }

  fillRect(rect) {
  }

  fillElipse(rect) {
  }

  stroke(rect) {
  }

  strokeRect(rect) {
  }

  strokeEllipse(rect) {
  }

  addPath(path) {
  }

  strokePath() {
  }

  fillPath() {
  }

  drawText(text, pos) {
  }

  drawTextInRect(text, rect) {
  }

  setFont(font) {
  }

  setTextColor(color) {
  }

  setTextAlignedLeft() {
  }

  setTextAlignedCenter() {
  }

  setTextAlignedRight() {
  }
}

module.exports = DrawContext;