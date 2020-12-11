class Timer {
  constructor() {
    this.timeInterval = 0;
    this.repeats = false;
  }

  schedule(callback) {
    if (this.repeats) {
      this._type = "interval";
      this._timer = setInterval(callback, this.timeInterval);
    } else {
      if (this.timeInterval == 0) {
        this._type = "immediate";
        this._timer = setImmediate(callback);
      } else {
        this._type = "timeout";
        this._timer = setTimeout(callback, this.timeInterval);
      }
    }
  }

  invalidate() {
    switch (this._type) {
      case "interval":
        clearInterval(this._timer);
        break;
      case "immediate":
        clearImmediate(this._timer);
        break;
      case "timeout":
        clearTimeout(this._timer);
    }
  }

  static schedule(timeInterval, repeats, callback) {
    let t = new this();
    t.timeInterval = timeInterval;
    t.repeats = repeats;
    t.schedule(callback);
    return t;
  }
}

module.exports = Timer;