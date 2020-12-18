const fs = require('fs);
const Size = require('./size');

class Image {
  constructor(data) {
    Object.defineProperty(this, '_data', {value: data, enumerable: true});
    const imgSize = require('image-size')(data);
    Object.defineProperty(this, 'size', {
      value: new Size(imgSize.width, imgSize.height),
      enumerable: true
    });
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