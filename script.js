// var audio = new Audio('audio_file.mp3');
let myBpm = 100;
const minuteINms = 60000;

let calculateBpm = (minuteINms / myBpm);
calculateBpm = String(calculateBpm).slice(0, 3);;
calculateBpm = Number(calculateBpm);

// const playAudio = () => {
//     audio.currentTime = 0;
//     audio.play()
// };


// stopButton.onclick = function() {
//     clearInterval(intervalId);
// }; 

function generatePassword() {
    var length = 1000,
        charset = "abcdefghijklmnopqrstuvwxyzABCEFGHIJKLMNPTUVWXYZ123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    visualsPanel.innerHTML = retVal;
    visualsPanel.style.border = "1px solid black";
}

let visualsPanel = document.querySelector('.visuals');

var intervalId;
intervalId && clearInterval(intervalId);
intervalId = setInterval(generatePassword, calculateBpm);
