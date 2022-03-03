"use strict";

const TIMER_TYPES = {
  INTERVAL: 0,
  TIMEOUT: 1
};

/**
 * @summary A timer that fires after a time interval has elapsed.
 * @description The timer fires after a specified time interval has elapsed. The timer can be repeating, in which case it will fire multiple times.
 * @see https://docs.scriptable.app/timer/
 */
class Timer {
  #type;
  #timer;
  
  /**
   * @summary Constructs a timer.
   * @description Constructs a timer that fires after a specified time interval.
   * @see https://docs.scriptable.app/timer/#-new-timer
   */
  constructor() {
    /**
     * @type {number}
     * @summary The frequency at which the timer fires, in milliseconds.
     * @description Be aware that the time interval is specified in setting. Defaults to 0, causing the timer to fire instantly.
     * @see https://docs.scriptable.app/timer/#timeinterval
     */
    this.timeInterval = 0;

    /**
     * @type {boolean}
     * @summary Whether the timer should repeat.
     * @description A repeating timer will keep firing until it is invalidated. In contrast to non-repeating timers, repeating timers are not automatically invalidated. Defaults to false.
     * @see https://docs.scriptable.app/timer/#repeats
     */
    this.repeats = false;
  }

  /**
   * @summary Schedules the timer.
   * @description Schedules the timer using its configuration. The supplied function is called when the timer fires. To stop the timer from firing, call the invalidate() function.
   * @param {function} callback The callback to be called when the timer fires.
   * @see https://docs.scriptable.app/timer/#-schedule
   */
  schedule(callback) {
    if (this.#timer) {
      this.invalidate();
    }
    
    if (this.repeats) {
      this.#type = TIMER_TYPES.INTERVAL;
      this.#timer = setInterval(callback, this.timeInterval);
    } else {
      this.#type = TIMER_TYPES.TIMEOUT;
      this.#timer = setTimeout(callback, this.timeInterval);
    }
  }

  /**
   * @summary Stops the timer from firing.
   * @description Stops the timer from firing ever again. Non-repeating timers are automatically invalidated after they have fired once. Repeating timers must be manually invalidated.
   * @see https://docs.scriptable.app/timer/#-invalidate
   */
  invalidate() {
    switch (this.#type) {
      case TIMER_TYPES.INTERVAL:
        clearInterval(this.#timer);
        break;
      case TIMER_TYPES.TIMEOUT:
        clearTimeout(this.#timer);
    }
  }

  /**
   * @summary Schedules a timer.
   * @description This is a convenience function for creating a new timer. The created timer is instantly scheduled and will fire after the specified time interval.
   * @param {number} timeInterval The time interval to fire the timer at.
   * @param {boolean} repeats Whether the timer should repeat or not.
   * @param {function} callback The callback to be called when the timer fires.
   * @returns {Timer} The constructed timer.
   * @see https://docs.scriptable.app/timer/#schedule
   */
  static schedule(timeInterval, repeats, callback) {
    const t = new Timer();
    t.timeInterval = timeInterval;
    t.repeats = repeats;
    t.schedule(callback);
    return t;
  }
}

module.exports = Timer;