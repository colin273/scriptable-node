class Notification {
  #actions;

  constructor() {
    this.identifier = require('uuid').v4();
    this.title = "";
    this.subtitle = "";
    this.body = "";
    this.preferredContentHeight = null;
    this.badge = null;
    this.threadIdentifier = "";
    this.userInfo = {};
    this.sound = null;
    this.openURL = null;
    this.#actions = [];
  }

  get actions() {
    return this.#actions;
  }

  async schedule() {
  }

  async remove() {
  }

  setTriggerDate(date) {
  }

  setDailyTrigger(hour, minute, repeats) {
  }

  setWeeklyTrigger(weekday, hour, minute, repeats) {
  }

  addAction(title, url, destructive) {
  }

  static async allPending() {
  }

  static async allDelivered() {
  }

  static async removeAllPending() {
  }

  static async removeAllDelivered() {
  }

  static async removePending(identifiers) {
  }

  static async removeDelivered(identifiers) {
  }

  static resetCurrent() {
  }
}

module.exports = Notification;