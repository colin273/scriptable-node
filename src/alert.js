const readline = require('readline');

async function shellPresent(alertType) {
  // Need to create a command line interface to simulate the fields and options of an Alert
  // Support for actual UI alerts may come later.
}

class Alert {
  constructor() {
    this.title = null;
    this.message = null;
    Object.defineProperty(this, "_actions", {
      value: [],
      writable: true,
      enumerable: false
    });
    Object.defineProperty(this, "_fields", {
      value: [],
      writable: true,
      enumerable: false
    });
  }

  addAction(title) {
    this._actions.push({
      title: title,
      type: "action"
    });
  }

  addDestructiveAction(title) {
    this._actions.push({
      title: title,
      type: "destructive"
    });
  }

  addCancelAction(title) {
    this._actions.push({
      title: title,
      type: "cancel"
    });
  }

  addTextField(placeholder, text) {
    this._fields.push({
      placeholder: placeholder,
      default: text,
      type: "action"
    });
  }

  addSecureTextField(placeholder, text) {
    this._fields.push({
      placeholder: placeholder,
      default: text,
      type: "secure"
    });
  }

  textFieldValue(index) {
    return this._fields[index].value;
  }

  async present() {
    return (await this.presentAlert());
  }

  async presentAlert() {
    return (await shellPresent("alert"));
  }

  async presentSheet() {
    return (await shellPresent("sheet"));
  }
}

module.exports = Alert;