function switchPopup(tabId, url) {
    switch (true) {
        case url.includes("https://www.myon.com/reader/index.html?a="):
            browser.browserAction.setPopup({tabId: tabId, popup: "popups/myon/myon.html"});
            break;
        default:
            browser.browserAction.setPopup({tabId: tabId, popup: "popups/index.html"});
            break;
    }
}

browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
    switchPopup(tabId, tabInfo.url);
});