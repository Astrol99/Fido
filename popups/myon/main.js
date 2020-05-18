// This looks kinda messy
const readTimeSpan = document.getElementById("readTimeSpan");
const readTimeSlider = document.getElementById("readTimeSlider");

const delayTimeSpan = document.getElementById("delayTimeSpan");
const delayTimeSlider = document.getElementById("delayTimeSlider");

readTimeSpan.innerHTML = `${readTimeSlider.value} Minutes`;
delayTimeSpan.innerHTML = `${delayTimeSlider.value} Seconds`;

readTimeSlider.oninput = () => {
    readTimeSpan.innerHTML = `${readTimeSlider.value} Minutes`;
}

delayTimeSlider.oninput = () => {
    delayTimeSpan.innerHTML = `${delayTimeSlider.value} Seconds`;
}
