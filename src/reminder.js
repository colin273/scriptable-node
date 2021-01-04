class Reminder {
    constructor() {}

    addRecurrenceRule(recurrenceRule) {}

    removeAllRecurrenceRules() {}

    save() {}

    remove() {}

    static async scheduled(calendars) {}

    static async all(calendars) {}

    static async allCompleted(calendars) {}

    static async allIncomplete(calendars) {}

    static async allDueToday(calendars) {}

    static async completedDueToday(calendars) {}

    static async incompleteDueToday(calendars) {}

    static async allDueTomorrow(calendars) {}

    static async completedDueTomorrow(calendars) {}

    static async incompleteDueTomorrow(calendars) {}

    static async allDueYesterday(calendars) {}

    static async completedDueYesterday(calendars) {}

    static async incompleteDueYesterday(calendars) {}

    static async allDueThisWeek(calendars) {}

    static async completedDueThisWeek(calendars) {}

    static async incompleteDueThisWeek(calendars) {}

    static async allDueNextWeek(calendars) {}

    static async completedDueNextWeek(calendars) {}

    static async incompleteDueNextWeek(calendars) {}

    static async allDueLastWeek(calendars) {}

    static async completedDueLastWeek(calendars) {}

    static async incompleteDueLastWeek(calendars) {}

    static async completedToday(calendars) {}

    static async completedThisWeek(calendars) {}

    static async completedLastWeek(calendars) {}

    static async allDueBetween(startDate, endDate, calendars) {}

    static async completedDueBetween(startDate, endDate, calendars) {}

    static async incompleteDueBetween(startDate, endDate, calendars) {}

    static async completedBetween(startDate, endDate, calendars) {}
}

module.exports = Reminder;