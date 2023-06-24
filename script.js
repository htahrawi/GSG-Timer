var minutesSelector = document.querySelector('.minutes');
var secondsSelector = document.querySelector('.seconds');
var minutes = minutesSelector.innerHTML;
var seconds = secondsSelector.innerHTML;
var totalSeconds = parseInt(minutes * 60) + parseInt(seconds);

// Get All Buttons By Query Selector
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

// Add Actions For start, stop, and reset Buttons
startButton.addEventListener('click', () => {
    countDown = setInterval(() => {
        secondLeft();
    }, 1000);
});
stopButton.addEventListener('click', () => {
    clearInterval(countDown);
}
)
resetButton.addEventListener('click', () => {
    clearInterval(countDown);
    minutesSelector.innerHTML = "05";
    secondsSelector.innerHTML = "00";
    minutes = minutesSelector.innerHTML;
    seconds = secondsSelector.innerHTML
    totalSeconds = parseInt(minutes * 60) + parseInt(seconds);
}
)
function secondLeft() {
    minutes = Math.floor(totalSeconds / 60)
    seconds = totalSeconds % 60;
    secondsSelector.innerHTML = seconds > 0 ? (seconds > 9 ? seconds : "0" + seconds) : "0" + 0;
    minutesSelector.innerHTML = minutes > 0 ? (minutes > 9 ? minutes : "0" + minutes) : "0" + 0;
    if (seconds == 0) {
        --minutes;
        seconds = 59;
        console.log("HERE");
    }
    if (totalSeconds == -1) {
        alert("DONE");
        clearInterval(countDown);
    }
    seconds--;
    totalSeconds--;
}