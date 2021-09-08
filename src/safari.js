"use strict";

const openModule = require('open');

module.exports = {
    openInApp: async function (url, fullscreen = true) {
        await openModule(url, { wait: true });
    },

    open: function (url) {
        openModule(url);
    }
};