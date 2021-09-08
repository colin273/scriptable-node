"use strict";

class Timer {
    #type;
    #timer;

    constructor() {
        this.timeInterval = 0;
        this.repeats = false;
    }

    schedule(callback) {
        if (this.repeats) {
            this.#type = "interval";
            this.#timer = setInterval(callback, this.timeInterval);
        } else if (this.timeInterval == 0) {
            this.#type = "immediate";
            this.#timer = setImmediate(callback);
        } else {
            this.#type = "timeout";
            this.#timer = setTimeout(callback, this.timeInterval);
        }
    }

    invalidate() {
        switch (this.#type) {
            case "interval":
                clearInterval(this.#timer);
                break;
            case "immediate":
                clearImmediate(this.#timer);
                break;
            case "timeout":
                clearTimeout(this.#timer);
        }
    }

    static schedule(timeInterval, repeats, callback) {
        const t = new this();
        t.timeInterval = timeInterval;
        t.repeats = repeats;
        t.schedule(callback);
        return t;
    }
}

module.exports = Timer;