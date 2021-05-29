const encodedName = encodeURIComponent(require('path').basename(require.main.filename));

module.exports = {
  forOpeningScript: function() {
    return `scriptable:///open/${encodedName}`;
  },

  forOpeningScriptSettings: function() {
    return `scriptable:///open/${encodedName}?openSettings=true`;
  },

  forRunningScript: function() {
    return `scriptable:///run/${encodedName}`;
  }
}