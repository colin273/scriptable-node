const computerName = require('computer-name');
const brightness = require('brightness');
const systemInfo = require('systeminformation');

const Device = {
  name: function() {
    return computerName();
  },

  systemName: function() {
  },

  systemVersion: function() {
  },

  model: function() {
  },

  isPhone: function() {
  },

  isPad: function() {
  },

  screenSize: function() {
  },

  screenResolution: function() {
  },

  screenScale: function() {
  },

  screenBrightness: function() {
  },

  isInPortrait: function() {
  },

  isInPortraitUpsideDown: function() {
  },

  isInLandscapeLeft: function() {
  },

  isInLandscapeRight: function() {
  },

  isFaceUp: function() {
    // No position sensors in most devices that can run Node.JS
    return false;
  },

  isFaceDown: function() {
    // No position sensors in most devices that can run Node.JS
    return false;
  },

  batteryLevel: function() {
  },

  isDischarging: function() {
  },

  isCharging: function() {
  },

  isFullyCharged: function() {
  },

  preferredLanguages: function() {
  },

  locale: function() {
  },

  language: function() {
  },

  isUsingDarkAppearance: function() {
  },

  volume: function() {
    
  },

  setScreenBrightness: function(percentage) {
    brightness.set(percentage);
  }
}