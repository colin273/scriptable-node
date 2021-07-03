const path = require('path');

const outputKey = Symbol("shortcutOutput")

module.exports = {
  name: function() {
    if (require.main) {
      const fileName = require.main.filename;
      return path.basename(fileName, path.extname(fileName));
    }
    return module.id
  },

  complete: function() {
    // Inform the system that script has completed
    // Does nothing for now
  },

  setShortcutOutput: function(value) {
    Object.defineProperty(this, outputKey, {
      value: value,
      writable: true
    })
  },

  setWidget: function(widget) {
    // Update the widget to display with the widget passed as input
    // Does nothing for now
  },

  shortcutOutput: function() {
    return this[outputKey]
  }
}

module.exports.setShortcutOutput(null)