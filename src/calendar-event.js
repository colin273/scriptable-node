class CalendarEvent {
  constructor() {
    this.title = "Created with Scriptable";
    this.location = null;
    this.notes = null;
    this.startDate = ; // Figure out what is going on here
    this.endDate = ; // Figure out what is going on here
    this.isAllDay = false;
    this.attendees = null;
    this.availability = "notSupported";
    this.timeZone = ""; // What do I do here?
    this.calendar = null;
    this._recurrence = [];
  }

  addRecurrenceRule(recurrenceRule) {
    this._recurrence.push(recurrenceRule);
  }

  removeAllRecurrenceRules() {
    this._recurrence = [];
  }

  save() {
  }

  remove() {
  }

  async presentEdit() {
  }

  static async presentCreate() {
  }

  static async tomorrow(calendars) {
  }

  static async yesterday(calendars) {
  }

  static async thisWeek(calendars) {
  }

  static async nextWeek(calendars) {
  }

  static async lastWeek(calendars) {
  }

  static async between(startDate, endDate, calendars) {
  }
}

module.exports = CalendarEvent;