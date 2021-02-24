class CalendarEvent {
  constructor() {
    this.title = "Created with Scriptable";
    this.location = null;
    this.notes = null;
    this.startDate = (new Date()).setMinutes(new Date().getMinutes + 30);
    this.endDate = this.endDate;
    this.isAllDay = false;
    this.attendees = null;
    this.availability = "notSupported";
    this.timeZone = null;
    this.calendar = null;
    Object.defineProperty(this, "_recurrence", {
      value: [],
      writable: true,
    });
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