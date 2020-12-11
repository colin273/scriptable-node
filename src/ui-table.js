class UITable {
  constructor() {
    this.showSeparators = false;
    this._rows = [];
  }
  
  addRow(row) {
    this._rows.push(row);
  }
  
  // Need to figure out how to present rows
  async present(fullscreen) {
  }
  
  // This will come with the present() method
  reload() {
  }
  
  removeAllRows() {
    this._rows = [];
  }
  
  removeRow(row) {
    this._rows.splice(this._rows.indexOf(row), 1);
  }
}

module.exports = UITable;