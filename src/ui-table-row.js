const UITableCell = require('./ui-table-cell.js');

class UITableRow {
  constructor() {
    this.backgroundColor = null;
    this.cellSpacing = 2;
    this.dismissOnSelect = true;
    this.height = 44;
    this.isHeader = false;
    this.onSelect = null;
    this._cells = [];
  }

  addButton(title) {
    const b = UITableCell.button(title);
    this._cells.push(b);
    return b;
  }

  addCell(cell) {
    this._cells.push(cell);
  }

  addImage(image) {
    const i = UITableCell.image(image);
    this._cells.push(i);
    return i;
  }

  addImageAtURL(url) {
    const i = UITableCell.imageAtURL(url);
    this._cells.push(i);
    return i;
  }

  addText(title, subtitle) {
    const t = UITableCell.text(title, subtitle);
    this._cells.push(t);
    return t;
  }
}

module.exports = UITableRow;