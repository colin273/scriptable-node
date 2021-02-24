const Request = require('./request.js');

class UITableCell {
  constructor(type) {
    this.dismissOnTap = false;
    this.onTap = null;
    this.subtitleColor = null;
    this.subtitleFont = null;
    this.titleColor = null;
    this.titleFont = null;
    this.widthWeight = 0;
    this._align = "left";
    Object.defineProperty(this, "_type", {
      value: type,
      writable: true
    });
  }

  centerAligned() {
    this._align = "center";
  }

  leftAligned() {
    this._align = "left";
  }

  rightAligned() {
    this._align = "right";
  }
}

module.exports = {
  button: function(title) {
    let b = new UITableCell("button");
    b._title = title;
    return b;
  },

  image: function(image) {
    let i = new UITableCell("image");
    i._image = image;
    return i;
  },

  imageAtURL: function(url) {
    return this.image(await new Request(url).loadImage());
  },

  text: function(title, subtitle) {
    let t = new UITableCell("text");
    t._title = title;
    t._subtitle = subtitle;
  }
}