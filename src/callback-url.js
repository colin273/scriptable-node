const open = require('open');

class CallbackURL {
  constructor(baseURL) {
    Object.defineProperty(this, "_url", {
      value: new URL(baseURL),
      writable: true
    });
    this._url.search = '';
  }

  addParameter(name, value) {
    this._url.searchParams.append(name, value);
  }

  async open() {
    // Need to add support for getting returned values from target app
    await open(this.getURL(), {wait: true});
  }

  getURL() {
    this._url.searchParams.set('x-source', 'Scriptable');
    const paramArray = ["success", "error", "cancel"];
    for (var i = 0; i < 3; i++) {
      this._url.searchParams.set(`x-${paramArray[i]}`, `scriptable://x-callback-url/${paramArray[i]}`);
    }
    return this._url.toString();
  }
}

module.exports = CallbackURL;