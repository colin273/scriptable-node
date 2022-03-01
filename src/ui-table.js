class UITable {
  #rows;
  constructor() {
    this.showSeparators = false;
    this.#rows = [];
  }
  
  addRow(row) {
    this.#rows.push(row);
  }
  
  // Need to figure out how to present rows
  async present(fullscreen) {
  }
  
  // This will come with the present() method
  reload() {
  }
  
  removeAllRows() {
    this.#rows = [];
  }
  
  removeRow(row) {
    this.#rows.splice(this.#rows.indexOf(row), 1);
  }
}

module.exports = UITable;