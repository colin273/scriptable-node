class Request {
  constructor(url) {
    this.url = url;
    this.method = "GET";
    this.headers = {};
    this.timeoutInterval = 60;
    this.response = null;
    this.allowInsecureRequest = false;
  }

  async load() {
  }

  async loadString() {
  }

  async loadJSON() {
  }

  async loadImage() {
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