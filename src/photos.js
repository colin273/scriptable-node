module.exports = {
  fromLibrary: async function() {
    // Present photo picker, return selected image
  },

  fromCamera: async function() {
    // Present camera, return captured image
  },

  latestPhoto: async function() {
    // Get latest photo
  },

  latestPhotos: async function(count) {
    // Get the most recent [count] photos
  },

  latestScreenshot: async function() {
    // Get the latest photo with type "screenshot"
  },

  latestScreenshots: async function(count) {
    // Get the most recent [count] screenshots
  },

  removeLatestPhoto: function() {
    // Delete the latest photo, show a prompt before deleting
  },

  removeLatestPhotos: function(count) {
    // Delete the latest [count] photos, show a prompt before deleting
  },

  removeLatestScreenshot: function() {
    // Delete the latest screenshot, show a prompt before deleting
  },

  removeLatestScreenshots: function(count) {
    // Delete the latest [count] screenshots, show a prompt before deleting
  },

  save: function(image) {
    // Save image to photo library
  }
}