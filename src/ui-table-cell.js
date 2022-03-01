//const { UITable } = require('../index.js');
//const Request = require('./request.js');

const CELL_TYPES = {
  BUTTON: "button",
  IMAGE: "image",
  TEXT: "text"
};

const ALIGNMENTS = {
  CENTER: "center",
  LEFT: "left",
  RIGHT: "right"
};

class UITableCell {
  #type;
  #align;
  #title;
  #subtitle;
  #image;
  constructor(type, props) {
    this.dismissOnTap = false;
    this.onTap = null;
    this.subtitleColor = null;
    this.subtitleFont = null;
    this.titleColor = null;
    this.titleFont = null;
    this.widthWeight = 0;
    this.#align = ALIGNMENTS.LEFT;
    this.#type = type;
    switch (type) {
      case CELL_TYPES.BUTTON:
        this.#title = props.title;
        break;
      case CELL_TYPES.IMAGE:
        this.#image = props.image;
        break;
      case CELL_TYPES.TEXT:
        this.#title = props.title;
        this.#subtitle = props.subtitle;
        break;
      default:
        throw new Error(`Unknown UITableCell type '${type}'`);
    }
  }

  centerAligned() {
    this.#align = ALIGNMENTS.CENTER;
  }

  leftAligned() {
    this.#align = ALIGNMENTS.LEFT;
  }

  rightAligned() {
    this.#align = ALIGNMENTS.RIGHT;
  }
}

module.exports = {
  button: (title) => new UITableCell(CELL_TYPES.BUTTON, { title }),
  image: (image) => new UITableCell(CELL_TYPES.IMAGE, { image }),
  imageAtURL: function(url) {
    //return this.image(await new Request(url).loadImage());
  },
  text: (title, subtitle) => new UITableCell(CELL_TYPES.TEXT, { title, subtitle })
};