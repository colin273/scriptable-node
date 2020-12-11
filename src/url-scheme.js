const encodedName = encodeURIComponent(require('path').basename(process.argv[1], '.js'));

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