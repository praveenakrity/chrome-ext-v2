const env = require("../../../utils/env");

console.log(`checking background scripts`)

chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({
        url: `${env.STATIC_PAGE}?b=c`,
        active: true
    });
});