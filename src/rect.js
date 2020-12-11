const Size = require('./size.js');
const Point = require('./point.js');

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  get minX() {
    return this.x;
  }
  get minY() {
    return this.y
  }
  get maxX() {
    return this.x + this.width;
  }
  get maxY() {
    return this.y + this.height;
  }
  get origin() {
    return new Point(this.x, this.y);
  }
  set origin(p) {
    this.x = p.x;
    this.y = p.y;
  }
  get size() {
    return new Size(this.width, this.height)l
  }
  set size(s) {
    this.width = s.width;
    this.height = s.height;
  }
}

module.exports = Rect;