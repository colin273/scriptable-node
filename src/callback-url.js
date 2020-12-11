const open = require('open');

class CallbackURL {
  constructor(baseURL) {
    this._url = new URL(baseURL);
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
    for (i of ["success", "error", "cancel"]) {
      this._url.searchParams.set(`x-${i}`, `scriptable://x-callback-url/${i}`);
    }
    return this._url.toString();
  }
}

module.exports = CallbackURL;