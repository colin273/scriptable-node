const querystring = require('querystring');

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
    if (process.platform == "darwin") {
      // Open x-callback URL and return response
      const appPath = require('path').normalize(`${__dirname}/../lib/xcall.app/Contents/MacOS/xcall`);
      require('child_process').execFile(appPath, ["-url", this.getURL()], (error, stdout, stderr) => {
        if (error == null) {
          return stdout;
        } else {
          throw error;
        }
      });
    } else {
      throw new Error(`x-callback-url not supported on platform '${process.platform}.`);
    }
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