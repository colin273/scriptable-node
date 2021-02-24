class Mail {
  constructor() {
    this.bccRecipients = [];
    this.body = "";
    this.ccRecipients = [];
    this.isBodyHTML = false;
    this.preferredSendingEmailAddress = null;
    this.subject = "";
    this.toRecipients = [];
    Object.defineProperty(this, "_attachments", {
      value: [],
      writable: true
    });
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