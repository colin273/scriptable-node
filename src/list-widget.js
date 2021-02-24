const Color = require('./color.js');
const Font = require('./font.js');
const Point = require('./point.js');
const Size = require('./size.js');


// Create an element to add to a WidgetStack or ListWidget
function makeElement(type, object) {
  return {
    type: type,
    object: object
  }
}


// Present a widget - TO DO
function present(widget, width, height) {
}


class WidgetSpacer {
  constructor(length) {
    this.length = length;
  }
}


// Parent class for WidgetDate and WidgetText
class WidgetWrite {
  constructor() {
    this.textColor = null;
    this.font = Font.body();
    this.textOpacity = 1;
    this.lineLimit = 0;
    this.minimumScaleFactor = 1;
    this.shadowColor = Color.black();
    this.shadowRadius = 0;
    this.shadowOffset = new Point(0, 0);
    this.url = null;
    Object.defineProperty(this, "_align", {
      value: "left",
      writable: true
    })
  }

  leftAlignText() {
    this._align = "left";
  }

  centerAlignText() {
    this._align = "center";
  }

  rightAlignText() {
    this._align = "right";
  }
}


class WidgetText extends WidgetWrite {
  constructor(text) {
    this.text = text;
  }
}


class WidgetDate extends WidgetWrite {
  constructor(date) {
    this.date = date;
    this._style = "date";
  }

  applyTimeStyle() {
    this._style = "time";
  }

  applyDateStyle() {
    this._style = "date";
  }

  applyRelativeStyle() {
    this._style = "relative";
  }

  applyOffsetStyle() {
    this._style = "offset";
  }

  applyTimerStyle() {
    this._style = "timer";
  }
}


class WidgetImage {
  constructor(image) {
    this.image = image;
    this.resizable = true;
    this.imageSize = null;
    this.imageOpacity = 1;
    this.cornerRadius = 0;
    this.borderWidth = 0;
    this.borderColor = Color.black();
    this.containerRelativeShape = false;
    this.tintColor = null;
    this.url = null;
    this._align = "left";
    this._contentMode = "fitting";
  }

  leftAlignImage() {
    this._align = "left";
  }

  centerAlignImage() {
    this._align = "center";
  }

  rightAlignImage() {
    this._align = "right";
  }

  applyFittingContentMode() {
    _contentMode = "fitting";
  }

  applyFillingContentMode() {
    _contentMode = "filling";
  }
}


// Parent class for WidgetStack and ListWidget
class WidgetBase {
  constructor() {
    this.backgroundColor = null;
    this.backgroundImage = null;
    this.backgroundGradient = null;
    this.spacing = 0;
    this.url = null;
    this._elements = [];
    this._padding = null;
  }

  addText(text) {
    let t = new WidgetText(text);
    this._elements.push(makeElement("text", t));
    return t;
  }

  addDate(date) {
    let d = new WidgetDate(date);
    this._elements.push(makeElement("date", d));
    return d;
  }

  addImage(image) {
    let i = new WidgetImage(image);
    this._elements.push(makeElement("image", i));
    return i;
  }

  addSpacer(length) {
    let sp = new WidgetSpacer(length);
    this._elements.push(makeElement("spacer", sp));
    return sp;
  }

  addStack() {
    let st = new WidgetStack();
    this._elements.push(makeElement("stack", st));
    return st;
  }

  setPadding(top, leading, bottom, trailing) {
    this._padding = {
      top: top,
      leading: leading,
      bottom: bottom,
      trailing: trailing
    }
  }

  useDefaultPadding() {
    this._padding = null;
  }
}


class WidgetStack extends WidgetBase {
  constructor() {
    this.size = new Size(0, 0);
    this.cornerRadius = 0;
    this.borderWidth = 0;
    this.borderColor = Color.black();
    this._align = "top";
    this._layout = "horizontal";
  }

  topAlignContent() {
    this._align = "top";
  }

  centerAlignContent() {
    this._align = "center";
  }

  bottomAlignContent() {
    this._align = "bottom";
  }

  layoutHorizontally() {
    this._layout = "horizontal";
  }

  layoutVertically() {
    this._layout = "vertical";
  }
}


// ListWidget class - TO DO: choose dimensions for small, medium, and large
class ListWidget extends WidgetBase {
  constructor() {
    this.refreshAfterDate = null;
  }

  async presentSmall() {
    await present(this, SMALLWIDTH, SMALLHEIGHT);
  }

  async presentMedium() {
    await present(this, MEDWIDTH, MEDHEIGHT);
  }

  async presentLarge() {
    await present(this, LGWIDTH, LGHEIGHT);
  }
}

module.exports = ListWidget;
