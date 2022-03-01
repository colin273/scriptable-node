class Path {
  constructor() {
    // Set private properties
  }

  move(point) {
  }

  addLine(point) {
  }

  addRect(rect) {
  }

  addEllipse(rect) {
  }

  addRoundedRect(rect, cornerWidth, cornerHeight) {
  }

  addCurve(point, control1, control2) {
  }

  addQuadCurve(point, control) {
  }

  addLines(points) {
  }

  addRects(rects) {
    for (const rect of rects) {
      this.addRect(rect);
    }
  }

  closeSubpath() {
  }
}

module.exports = Path;