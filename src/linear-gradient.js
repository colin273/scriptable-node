const Point = require('./point.js');

class LinearGradient {
  constructor() {
    this.colors = [];
    this.locations = [];
    this.startPoint = new Point(0, 0);
    this.endPoint = new Point(0, 1)
  }
}

module.exports = LinearGradient;