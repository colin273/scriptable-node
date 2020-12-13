const fetch = require('node-fetch');
const Image = require('./image.js');

class Request {
  constructor(url) {
    this.url = url;
    this.method = 'GET';
    this.headers = {};
    this.timeoutInterval = 60;
    this.response = null;
    this.allowInsecureRequest = false;
  }

  async load() {
  }

  async loadString() {
    return (await this.load()).toString('utf8');
  }

  async loadJSON() {
    return JSON.parse(await this.loadString());
  }

  async loadImage() {
    return Image.fromData(await this.load());
  }

  addParameterToMultipart(name, value) {
  }

  addFileDataToMultipart(data, mimeType, name, filename) {
  }

  addFileToMultipart(filePath, name, filename) {
  }

  addImageToMultipart(image, name, filename) {
  }
}

module.exports = Request;