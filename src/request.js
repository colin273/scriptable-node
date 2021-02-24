const Data = require('./data.js');
const fetch = require('node-fetch');
const Image = require('./image.js');

async function getBody(request) {}

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
    const body = await getBody(this);
    const requestData = await body.buffer();
    return new Data(requestData);
  }

  async loadString() {
    const body = await getBody(this);
    const string = await body.text();
    return string;
  }

  async loadJSON() {
    const body = await getBody(this);
    const json = await body.json();
    return json;
  }

  async loadImage() {
    const body = await getBody(this);
    const requestData = await body.buffer();
    return new Image(requestData);
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