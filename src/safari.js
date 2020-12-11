const openModule = require('open');

module.exports = {
  openInApp: async function(url, fullscreen) {
    await openModule(url, {wait: true});
  },

  open: function(url) {
    openModule(url)
  }
}