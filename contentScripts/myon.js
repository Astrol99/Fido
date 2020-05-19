//TODO: Add some way to stop reading by finish time 
let intervalID;

browser.runtime.onMessage.addListener(request => {
    console.log("Received Message:");
    console.log(request);
    let response;

    if (request.signal) {
        intervalID = setInterval(turnPage, secToMs(request.delayTime));
        response = {response: "Started AutoRead", signal: true};
    } else if (!request.signal) {
        clearInterval(intervalID);
        response = {response: "Stopped AutoRead", signal: false};
    }

    console.log("Response Message:");
    console.log(response);

    return Promise.resolve(response)
});

function turnPage() {
    const nxtPageBtn = document.getElementsByClassName("stage_button -rightArrow")[0];
    nxtPageBtn.click();
}

function secToMs(sec) {
    return sec * 1000;
}