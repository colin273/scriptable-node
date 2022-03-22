const Color = require('./color')

class Calendar {
  constructor() {
  }

  /**
   * @readonly
   * @type {string} 
   */
  identifier

  /**
   * @type {string}
   */
  title

  /**
   * @readonly
   * @type {boolean}
   */
  isSubscribed

  /**
   * @readonly
   * @type {boolean}
   */
  allowsContentModifications

  /**
   * @type {Color} 
   */
  color

  /**
   * 
   * @param {string} availability - Availability to check against.
   * @returns {boolean} - True if the calendar supports the availability, otherwise false.
   */
  supportsAvailability(availability) {
    return this.supportsAvailability(availability)
  }

  save() {
    return this.save()
  }

  remove() {
    return this.remove()
  }

  /**
   * @returns {Promise<[Calendar]>} - Promise that provides the calendars when fulfilled.
   */
  static forReminders() {
    return this.forReminders()
  }

  /**
   * @returns {Promise<[Calendar]>} - Promise that provides the calendars when fulfilled.
   */
  static forEvents() {
    return this.forEvents()
  }

  /**
   * @param {string} title
   * @returns {Promise<Calendar>}
   */
  static forRemindersByTitle() {
    return this.forRemindersByTitle()
   }

   /**
    * @param {string} title
    * @returns {Promise<Calendar>}
    */
   static forEventsByTitle() {
     return this.forEventsByTitle()
   }

   /**
    * 
    * @param {string} title
    * @returns {Promise<Calendar>}
    */
  static createForReminders(ttile) {
    return this.createForReminders(ttile)
  }
}

module.exports = Calendar;