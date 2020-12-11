class Mail {
  constructor() {
    this.bccRecipients = [];
    this.body = "";
    this.ccRecipients = [];
    this.isBodyHTML = false;
    this.preferredSendingEmailAddress = null;
    this.subject = "";
    this.toRecipients = [];
    this._attachments = [];
  }

  addDataAttachment(data, mimeType, filename) {
  }

  addFileAttachment(filePath) {
  }

  addImageAttachment(image) {
  }

  async send() {
  }
}

module.exports = Mail;