// This looks kinda messy
const readTimeSpan = document.getElementById("readTimeSpan");
const readTimeSlider = document.getElementById("readTimeSlider");

const delayTimeSpan = document.getElementById("delayTimeSpan");
const delayTimeSlider = document.getElementById("delayTimeSlider");

dynamicSliderValue(readTimeSlider, readTimeSpan, "Minutes");
dynamicSliderValue(delayTimeSlider, delayTimeSpan, "Seconds");

function dynamicSliderValue(slider, span, type) {
    span.innerHTML = `${slider.value} ${type}`;
    slider.oninput = () => {
        span.innerHTML = `${slider.value} ${type}`; 
    };
}