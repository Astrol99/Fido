const readTimeSpan = document.getElementById("readTimeSpan");
const readTimeSlider = document.getElementById("readTimeSlider");

const delayTimeSpan = document.getElementById("delayTimeSpan");
const delayTimeSlider = document.getElementById("delayTimeSlider");

const button = document.getElementById("mainBtn");
let start = false;

dynamicSliderValue(readTimeSlider, readTimeSpan, "Minutes");
dynamicSliderValue(delayTimeSlider, delayTimeSpan, "Seconds");

function dynamicSliderValue(slider, span, type) {
    span.innerHTML = `${slider.value} ${type}`;
    slider.oninput = () => {
        span.innerHTML = `${slider.value} ${type}`; 
    };
}

button.addEventListener("click", () => {
    let msg;

    start = !start;

    // Disable/Enable sliders according to start variable
    readTimeSlider.disabled = start;
    delayTimeSlider.disabled = start;

    if (start) {
        // Change button style to bootstrap danger btn and text to "stop"
        button.innerHTML = "Stop Auto Read";
        button.className = "btn btn-danger btn-lg";

        msg = {
            signal: start,
            readTime: parseInt(readTimeSlider.value),
            delayTime: parseInt(delayTimeSlider.value)
        };

    } else if (!start) {
        // Original Style
        button.innerHTML = "Start Auto Read";
        button.className = "btn btn-outline-primary btn-lg";

        msg = {
            signal: start
        };
    }

    // Safe to assume that the current tab is myon
    browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
        const myonTabID = tabs[0].id;
        console.log(`myon/main.js -> contentScripts/myon.js: Target Tab ID: ${myonTabID}\nMessage Sent:\n`);
        console.log(msg);
        browser.tabs.sendMessage(myonTabID, msg);
    }, console.error);
});
