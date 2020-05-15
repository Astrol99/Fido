/*
This script file determines to change to a different
popup page based on the users active tab
*/

function getTabs() { 
    return browser.tabs.query({active:true, currentWindow: true});
}
//finds your first tab
getTabs().then((tabs) => {
    let url = tabs[0].url;
    console.log(url);
    switchDefaultTab(url);
});
//checks for myon url and acts
function switchDefaultTab(url) {
    switch (url) {
        case url.contains("https://www.myon.com/reader/index.html?a="):
            browser.browserAction.setPopup({popup: "/popups/myon/myon.html"});
    }
}
