const path = require('path');

module.exports = {
  name: function() {
    const fileName = require.main.filename;
    return path.basename(fileName, path.extname(fileName));
  },

  complete: function() {
    // Inform the system that script has completed
  },

  setShortcutOutput: function(value) {
    // Set output of script
  },

  setWidget: function(widget) {
    // Update the widget to display with the widget passed as input
  }
}