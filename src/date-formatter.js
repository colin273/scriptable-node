const Device = require('./device.js');
const format = require('date-fns/format');
const parse = require('date-fns/parse');

const dateStyleKey = Symbol("dateStyle")
const timeStyleKey = Symbol("timeStyle")

function updateWithPredefined(formatter) {
  if (formatter[dateStyleKey] != "" && formatter[timeStyleKey] != "") {
    const separator = (formatter[dateStyleKey] == "M/d/yy") ? ", " : " 'at' ";
    formatter.dateFormat = formatter[dateStyleKey] + separator + formatter[timeStyleKey];
  } else {
    formatter.dateFormat = formatter[dateStyleKey] + formatter[timeStyleKey];
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
    Object.defineProperty(this, dateStyleKey, {
      value: "",
      writable: true,
      enumerable: false
    });
    updateWithPredefined(this);
  }

  useShortDateStyle() {
    Object.defineProperty(this, dateStyleKey, {
      value: "M/d/yy",
      writable: true,
      enumerable: false
    });
    updateWithPredefined(this);
  }

  useMediumDateStyle() {
    Object.defineProperty(this, dateStyleKey, {
      value: "MMM d, y",
      writable: true,
      enumerable: false
    });
    updateWithPredefined(this);
  }

  useLongDateStyle() {
    Object.defineProperty(this, dateStyleKey, {
      value: "MMMM d, y",
      writable: true,
      enumerable: false
    });
    updateWithPredefined(this);
  }

  useFullDateStyle() {
    Object.defineProperty(this, dateStyleKey, {
      value: "EEEE, MMMM d, y",
      writable: true,
      enumerable: false
    });
    updateWithPredefined(this);
  }

  useNoTimeStyle() {
    Object.defineProperty(this, timeStyleKey, {
      value: "",
      writable: true,
      enumerable: false
    });
    updateWithPredefined(this);
  }

  useShortTimeStyle() {
    Object.defineProperty(this, timeStyleKey, {
      value: "h:mm a",
      writable: true,
      enumerable: false
    });
    updateWithPredefined(this);
  }

  useMediumTimeStyle() {
    Object.defineProperty(this, timeStyleKey, {
      value: "h:mm:ss a",
      writable: true,
      enumerable: false
    });
    updateWithPredefined(this);
  }

  useLongTimeStyle() {
    Object.defineProperty(this, timeStyleKey, {
      value: "h:mm:ss a z",
      writable: true,
      enumerable: false
    });
    updateWithPredefined(this);
  }

  useFullTimeStyle() {
    Object.defineProperty(this, timeStyleKey, {
      value: "h:mm:ss a zzzz",
      writable: true,
      enumerable: false
    });
    updateWithPredefined(this);
  }
}

module.exports = DateFormatter;