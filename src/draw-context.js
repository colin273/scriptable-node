const { createCanvas } = require('canvas');
const Size = require('./size');

class DrawContext {
    #canvas;
    #ctx;

    constructor() {
        this.size = new Size(200, 200);
        this.respectScreenScale = false;
        this.opaque = true;
        this.#canvas = createCanvas();
        this.#ctx = this.#canvas.getContext('2d');
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
        this.#ctx.strokeStyle = color.hex;
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