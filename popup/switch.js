/*
This script file determines to change to a different
popup page based on the users active tab
*/
function getTabs() { 
    return browser.tabs.query({active:true, currentWindow: true});
}

getTabs().then((tabs) => {
    let url = tabs[0].url;
    console.log(url);
});
