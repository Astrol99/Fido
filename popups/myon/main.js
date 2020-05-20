//DOING: Save state of popup, maybe use cookies
//TODO: Add countdown timer 
//TODO: Add some way to stop reading by finish time 

const readTimeSpan = document.getElementById("readTimeSpan");
const readTimeSlider = document.getElementById("readTimeSlider");

const delayTimeSpan = document.getElementById("delayTimeSpan");
const delayTimeSlider = document.getElementById("delayTimeSlider");

const button = document.getElementById("mainBtn");
let start;

dynamicSliderValue(readTimeSlider, readTimeSpan, "Minutes");
dynamicSliderValue(delayTimeSlider, delayTimeSpan, "Seconds");

function dynamicSliderValue(slider, span, type) {
    span.innerHTML = `${slider.value} ${type}`;
    slider.oninput = () => {
        span.innerHTML = `${slider.value} ${type}`; 
        populateStorage();
    };
}

// Check if web storage exists then use the storage for parameters if it does
if (localStorage.getItem("signal") !== null) {
    start = JSON.parse(localStorage.getItem("signal"));
    readTimeSlider.value = localStorage.getItem("readTime");
    delayTimeSlider.value = localStorage.getItem("delayTime");
    // Update Span
    readTimeSpan.innerHTML = `${readTimeSlider.value} Minutes`;
    delayTimeSpan.innerHTML = `${delayTimeSlider.value} Seconds`;
    // Update button
    updateButton(start);
} else {
    signal = false;
    populateStorage();
}

function populateStorage() {
    localStorage.setItem("signal", start);
    localStorage.setItem("readTime", readTimeSlider.value);
    localStorage.setItem("delayTime", delayTimeSlider.value);
}

function updateButton(signal) {
    // If auto read has started
    console.log(signal) 
    if (signal) {
        // Change button style to bootstrap danger btn and text to "stop"
        button.innerHTML = "Stop Auto Read";
        button.className = "btn btn-danger btn-lg";
        
    } else {
        // Original/Default Style
        button.innerHTML = "Start Auto Read";
        button.className = "btn btn-outline-primary btn-lg";
    }
}

button.addEventListener("click", () => {
    let msg;

    start = !start;

    // Disable/Enable sliders according to start variable
    readTimeSlider.disabled = start;
    delayTimeSlider.disabled = start;

    if (start) {
        msg = {
            signal: start,
            readTime: parseInt(readTimeSlider.value),
            delayTime: parseInt(delayTimeSlider.value)
        };

    } else if (!start) {
        msg = {
            signal: start
        };
    }

    updateButton(start);

    // Save parameters of popup
    populateStorage();

    // Safe to assume that the current tab is myon
    browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
        const myonTabID = tabs[0].id;
        console.log(`myon/main.js -> contentScripts/myon.js:\nTarget Tab ID: ${myonTabID}\nMessage Sent:\n`);
        console.log(msg);
        browser.tabs.sendMessage(myonTabID, msg).then(response => {
            console.log(`Response from Tab ID ${myonTabID}:`);
            console.log(response);
        });
    }, console.error);
});
