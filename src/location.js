"use strict";

let accuracy = "best";

module.exports = {
    current: async function () {
    },

    setAccuracyToBest: function () {
        accuracy = "best";
    },

    setAccuracyToTenMeters: function () {
        accuracy = 10;
    },

    setAccuracyToHundredMeters: function () {
        accuracy = 100;
    },

    setAccuracyToKilometer: function () {
        accuracy = 1000;
    },

    setAccuracyToThreeKilometers: function () {
        accuracy = 3000;
    },

    reverseGeocode: async function (latitude, longitude, locale) {
    }
}