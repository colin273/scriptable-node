const fs = require('fs);
const Size = require('./size');

class Image {
  constructor(data) {
    Object.defineProperty(this, '_data', {value: data});
    // this.size = size of image, in pixels--read only
  }
}

module.exports = {
  fromFile: function(filePath) {
    return new Image(fs.readFileSync(filePath));
  },

  fromData: function(data) {
    return new Image(data._data);
  }
}