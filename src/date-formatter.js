const Device = require('./device.js');
const format = require('date-fns/format');
const parse = require('date-fns/parse');

function updateWithPredefined(formatter) {
  if (formatter._dateStyle != "" && formatter._timeStyle != "") {
    const separator = (formatter._dateStyle == "M/d/yy") ? ", " : " 'at' ";
    formatter.dateFormat = formatter._dateStyle + separator + formatter._timeStyle;
  } else {
    formatter.dateFormat = formatter._dateStyle + formatter._timeStyle;
  }
}

class DateFormatter {
  constructor() {
    this.dateFormat = "";
    this.locale = Device.locale();
  }

  string(date) {
    return format(date, this.dateFormat, {
      locale: this.locale,
      useAdditionalDayOfYearTokens: true,
      useAdditionalWeekYearTokens: true
    });
  }

  date(str) {
    try {
      return parse(date, this.dateFormat, {
        locale: this.locale,
        useAdditionalDayOfYearTokens: true,
        useAdditionalWeekYearTokens: true
      });
    } catch {
      return null;
    }
  }

  useNoDateStyle() {
    Object.defineProperty(this, "_dateStyle", {value: "", writable: true});
    updateWithPredefined(this);
  }

  useShortDateStyle() {
    Object.defineProperty(this, "_dateStyle", {value: "M/d/yy", writable: true});
    updateWithPredefined(this);
  }

  useMediumDateStyle() {
    Object.defineProperty(this, "_dateStyle", {value: "MMM d, y", writable: true});
    updateWithPredefined(this);
  }

  useLongDateStyle() {
    Object.defineProperty(this, "_dateStyle", {value: "MMMM d, y", writable: true});
    updateWithPredefined(this);
  }

  useFullDateStyle() {
    Object.defineProperty(this, "_dateStyle", {value: "EEEE, MMMM d, y", writable: true});
    updateWithPredefined(this);
  }

  useNoTimeStyle() {
    Object.defineProperty(this, "_timeStyle", {value: "", writable: true});
    updateWithPredefined(this);
  }

  useShortTimeStyle() {
    Object.defineProperty(this, "_timeStyle", {value: "h:mm a", writable: true});
    updateWithPredefined(this);
  }

  useMediumTimeStyle() {
    Object.defineProperty(this, "_timeStyle", {value: "h:mm:ss a", writable: true});
    updateWithPredefined(this);
  }

  useLongTimeStyle() {
    Object.defineProperty(this, "_timeStyle", {value: "h:mm:ss a z", writable: true});
    updateWithPredefined(this);
  }

  useFullTimeStyle() {
    Object.defineProperty(this, "_timeStyle", {value: "h:mm:ss a zzzz", writable: true});
    updateWithPredefined(this);
  }
}

module.exports = DateFormatter;