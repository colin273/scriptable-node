/*
To do: proper image format conversions for fromJPEG() and fromPNG().
Still haven't found a good synchronous method, so for now no conversion takes place.
Those two methods do the same thing: return the data from the image.
*/

const fs = require('fs');

const dataKey = Symbol.for("data");

class Data {
  constructor(data) {
    Object.defineProperty(this, dataKey, {
      value: data
    });
  }

  toRawString() {
    return this[dataKey].toString('utf8');
  }

  toBase64String() {
    return this[dataKey].toString('base64');
  }

  getBytes() {
    return Array.from(this[dataKey]);
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
    return new Data(Buffer.from(base64String, 'base64'));
  },

  // Figure out how to handle JPEG vs PNG later
  fromJPEG: function(image) {
    return new Data(image[dataKey]);
  },

  fromPNG: function(image) {
    return new Data(image[dataKey]);
  }
}