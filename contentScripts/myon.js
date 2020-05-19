browser.runtime.onMessage.addListener(request => {
    console.log("Received Message:");
    console.log(request);
    let response;

    if (request.signal) {
        startAutoRead(request);
        response = {response: "Started AutoRead", signal: true};
    } else if (!request) {
        stopAutoRead();
        response = {response: "Stopped AutoRead", signal: false};
    }

    console.log("Response Message:");
    console.log(response);
    return Promise.resolve(response)
});

function startAutoRead(request) {

}

function stopAutoRead() {

}