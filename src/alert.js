class Alert {
  constructor() {
    this.title = null;
    this.message = null;
    this._actions = [];
    this._fields = [];
  }

  addAction(title) {
  }

  addDestructiveAction(title) {
  }

  addCancelAction(title) {
  }

  addTextField(placeholder, text) {
  }

  addSecureTextField(placeholder, text) {
  }

  textFieldValue(index) {
  }

  async present() {
    return (await this.presentAlert());
  }

  async presentAlert() {
  }

  async presentSheet() {
  }
}

module.exports = Alert;