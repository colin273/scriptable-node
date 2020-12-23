const fs = require('fs);
const imageSize = require('image-size');
const Size = require('./size');

class Image {
  constructor(data) {
    Object.defineProperty(this, '_data', {value: data, enumerable: true});
    const dimensions = imageSize(data);
    Object.defineProperty(this, 'size', {
      value: new Size(dimensions.width, dimensions.height),
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