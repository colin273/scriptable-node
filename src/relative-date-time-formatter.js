"use strict";

const scriptableTypeError = require("../util/type-error.js");

const MS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAYS_PER_WEEK = 7;
const MONTHS_PER_YEAR = 12;

const MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
const MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;
const MS_PER_DAY = MS_PER_HOUR * HOURS_PER_DAY;
const MS_PER_WEEK = MS_PER_DAY * DAYS_PER_WEEK;

const roundDown = num => (num < 0) ? Math.ceil(num) : Math.floor(num);

function monthsDiff(then, now) {
    const thenIsPast = then < now;
    const [firstDate, secondDate] = (thenIsPast) ? [then, now] : [now, then];
    let diff = secondDate.getMonth() - firstDate.getMonth();
    for (const unit of ["Date", "Hours", "Minutes", "Seconds", "Milliseconds"]) {
        const methodName = "get" + unit;
        const unitDiff = secondDate[methodName]() - firstDate[methodName]();
        if (unitDiff !== 0) {
            if (unitDiff < 0) diff -= 1;
            break;
        }
    }
    diff += MONTHS_PER_YEAR * (secondDate.getFullYear() - firstDate.getFullYear());
    if (thenIsPast) diff *= -1;
    return diff;
}

class RelativeDateTimeFormatter {
    #intlLocale;
    #locale;
    #numericOutput;

    constructor() {
        this.#numericOutput = "auto";
        this.#locale = undefined;
        this.#intlLocale = undefined;
    }

    get locale() {
        return this.#locale;
    }

    set locale(localeString) {
        if (!(typeof localeString === "string" || localeString instanceof String)) {
            throw scriptableTypeError("string", typeof localeString);
        }
        if (localeString.match(/[^a-zA-z\-_]/) === null) {
            const cleanedLocaleString = localeString.replace("_", "-");
            try {
                this.#locale = cleanedLocaleString;
                this.#intlLocale = Intl.getCanonicalLocales(localeString)[0];
                this.#locale = cleanedLocaleString;
            } catch {
                this.#locale = localeString;
            }
        } else {
            this.#locale = localeString;
            this.#intlLocale = undefined;
        }
    }

    string(date, referenceDate) {
        if (!(date instanceof Date)) throw scriptableTypeError("Date", typeof date);
        if (!(referenceDate instanceof Date)) throw scriptableTypeError("Date", typeof referenceDate);
        const formatter = new Intl.RelativeTimeFormat(this.#intlLocale, {
            numeric: this.#numericOutput
        });
        const diff = date - referenceDate;
        const diffAbs = Math.abs(diff);
        const formatValues = {};
        if (diffAbs < MS_PER_MINUTE) {
            formatValues.unit = "second";
            formatValues.value = roundDown(diff / MS_PER_SECOND);
        } else if (diffAbs < MS_PER_HOUR) {
            formatValues.unit = "minute";
            formatValues.value = roundDown(diff / MS_PER_MINUTE);
        } else if (diffAbs < MS_PER_DAY) {
            formatValues.unit = "hour";
            formatValues.value = roundDown(diff / MS_PER_HOUR);
        } else if (diffAbs < MS_PER_WEEK) {
            formatValues.unit = "day";
            formatValues.value = roundDown(diff / MS_PER_DAY);
        } else {
            const monthDiff = monthsDiff(date, referenceDate);
            const monthDiffAbs = Math.abs(monthDiff);
            if (monthDiffAbs < 1) {
                formatValues.unit = "week";
                formatValues.value = roundDown(diff / MS_PER_WEEK);
            } else if (monthDiffAbs < MONTHS_PER_YEAR) {
                formatValues.unit = "month";
                formatValues.value = monthDiff;
            } else {
                formatValues.unit = "year";
                formatValues.value = roundDown(monthDiff / MONTHS_PER_YEAR);
            }
        }
        return formatter.format(formatValues.value, formatValues.unit);
    }

    useNamedDateTimeStyle() {
        this.#numericOutput = "auto";
    }

    useNumericDateTimeStyle() {
        this.#numericOutput = "always";
    }
}

module.exports = RelativeDateTimeFormatter;