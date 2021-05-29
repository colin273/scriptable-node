/*

To do:

- fromJPEG
- fromPNG

It appears that both of these involve converting the image to the format that the method specifies before extracting the data.
Need to find a good method for that.
*/

const fs = require('fs');
const Jimp = require('jimp');

class Data {
  constructor(data) {
    Object.defineProperty(this, '_data', {value: data});
  }

  toRawString() {
    return this._data.toString('utf8');
  }

  toBase64String() {
    return this._data.toString('base64');
  }

  getBytes() {
    return Array.from(this._data);
  }
}

module.exports = {
  fromString: function(string) {
    return new Data(Buffer.from(string, 'utf8'));
  },

  fromFile: function(filePath) {
    return new Data(fs.readFileSync(filePath));
  },

  fromBase64String: function(base64String) {
    return new Data(Buffer.from(base64String, 'base64'))
  },

  fromJPEG: function(image) {
  },

  fromPNG: function(image) {
  },

  _fromBuffer: function(buffer) {
    return new Data(buffer)
  }
}