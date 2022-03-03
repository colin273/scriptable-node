const Device = require("./device.js");
const format = require("date-fns/format");
const parse = require("date-fns/parse");

class DateFormatter {
    #dateStyle;
    #timeStyle;
    #customFormat;
    #useCustomFormat;
    #locale;

    constructor() {
        this.dateFormat = "";
        this.locale = Device.locale();
        this.#dateStyle = null;
        this.#timeStyle = null;
        this.#useCustomFormat = true;
        this.#locale = undefined;
    }

    get dateFormat() {
        if (this.#useCustomFormat) {
            return this.#customFormat;
        } else {
            if (this.#dateStyle !== "" && this.#timeStyle !== "") {
                const separator = (this.#dateStyle === "M/d/yy") ? ", " : " 'at' ";
                return this.#dateStyle + separator + this.#timeStyle;
            } else {
                return this.#dateStyle + this.#timeStyle;
            }
        }
    }

    set dateFormat(str) {
        this.#useCustomFormat = true;
        this.#customFormat = str;
    }

    set locale(localeString) {
        this.#locale = localeString;
    }

    #customFormatOff() {
        this.#useCustomFormat = false;
    }

    string(date) {
        if (this.#useCustomFormat) {
            // return the custom formatted date
        } else {
            if (this.#dateStyle === null && this.#timeStyle === null) {
                return "";
            }
            const formatOptions = {};
            if (this.#dateStyle) formatOptions.dateStyle = this.#dateStyle;
            if (this.#timeStyle) formatOptions.timeStyle = this.#timeStyle;
            return (new Intl.DateTimeFormat(this.#locale, formatOptions)).format(date);
        }
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
        this.#dateStyle = null;
        this.#customFormatOff();
    }

    useShortDateStyle() {
        this.#dateStyle = "short";
        this.#customFormatOff();
    }

    useMediumDateStyle() {
        this.#dateStyle = "medium";
        this.#customFormatOff();
    }

    useLongDateStyle() {
        this.#dateStyle = "long";
        this.#customFormatOff();
    }

    useFullDateStyle() {
        this.#dateStyle = "full";
        this.#customFormatOff();
    }

    useNoTimeStyle() {
        this.#timeStyle = null;
        this.#customFormatOff();
    }

    useShortTimeStyle() {
        this.#timeStyle = "short";
        this.#customFormatOff();
    }

    useMediumTimeStyle() {
        this.#timeStyle = "medium";
        this.#customFormatOff();
    }

    useLongTimeStyle() {
        this.#timeStyle = "long";
        this.#customFormatOff();
    }

    useFullTimeStyle() {
        this.#timeStyle = "full";
        this.#customFormatOff();
    }
}

module.exports = DateFormatter;