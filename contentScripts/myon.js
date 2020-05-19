browser.runtime.onMessage.addListener(request => {
    console.log("Received Message:");
    console.log(request);
    return Promise.resolve({response: 200});
})