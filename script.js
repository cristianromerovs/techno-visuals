// var audio = new Audio('audio_file.mp3');
let myBpm = 200;
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
    // visualsPanel.style.border = "1px solid black";
}

let visualsPanel = document.querySelector('.visuals');

var intervalId;
intervalId && clearInterval(intervalId);
intervalId = setInterval(generatePassword, calculateBpm);

var myButton = document.getElementById("btnColorRojo");

//funtion console log test
let colorChanger = 0;

function changeColor() {
    colorChanger += 1;
    if (colorChanger === 1) {
        visualsPanel.style.color = "rgb(255, 0, 0)";
        visualsPanel.style.border = "2px solid rgb(255, 0, 0)";
    } else if (colorChanger === 2) {
        visualsPanel.style.color = "rgb(0, 255, 0)";
        visualsPanel.style.border = "2px solid rgb(0, 255, 0)";
    } else if (colorChanger === 3) {
        visualsPanel.style.color = "rgb(0, 0, 255)";
        visualsPanel.style.border = "2px solid rgb(0, 0, 255)";
        colorChanger = 0;
    }
}

myButton.addEventListener("click", changeColor);


