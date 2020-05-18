function switchPopup(url) {
    switch (true) {
        case url.includes("https://www.myon.com/reader/index.html?a="):
            console.log("Changed default popup to myon");
            break;
        default:
            console.log("Changed default popup to default popup");
            break;
    }
}

browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
    switchPopup(tabInfo.url);
});

/*
1. Get array of open tabs
2. Iterate through array and if url contains myon book url
3. Set default popup for that tabId with the myon popup
*/