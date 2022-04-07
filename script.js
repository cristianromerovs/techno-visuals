window.addEventListener("keyup", (e) => {
    e.key === "1" && changeColor();
    e.key === "2" && fontFx();
    e.key === "3" && transitionLeft();
    e.key === "4" && transitionCenter();
    e.key === "5" && transitionRight();
});
let myBpm = 160;
const minuteINms = 60000;

let calculateBpm = (minuteINms / myBpm);
calculateBpm = String(calculateBpm).slice(0, 3);;
calculateBpm = Number(calculateBpm);

let alternate = false;
let colorChanger = 0;

function generatePassword() {
    var length = 990,
        charset = "abcdefghijklmnopqrstuvwxyzABCEFGHIJKLMNPTUVWXYZ123456789¼½¾⅓⅔⅛⅜⅝≈>≥≧≩≫≳⋝÷∕≂⊟⊞⨁∟∠∡⊾⟀⦜⦛⦠√∛∜⍍≡≢⧥⩧⅀◊⟠⨌⨍⨏⨜⨛◜◝◞◟⤸⤹◆◇❖○◍●◐◑◒◓◔◕◖◗⬡⬢‰ⁿ¹²³§∞⌖◧◨◩◪▢▣▤▥▦▧▨▩▪▫▬▭▮▯▰▱◆◇◈◉◊○◌◎◘◙◚◛◜◝◞◟◠◡◦◫◬◭◮◯▲△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    visualsPanel.innerHTML = retVal
    // alternate ? visualsPanel.innerHTML = retVal : visualsPanel.innerHTML = "";
}

let visualsPanel = document.querySelector('.visuals');

let intervalId;
intervalId && clearInterval(intervalId);
intervalId = setInterval(generatePassword, calculateBpm);

let btnColors = document.getElementById("btn-colors");
let btnFontFx = document.getElementById("btn-font-fx");
let btnTransitionLeft = document.getElementById("btn-transition-left");
let btnTransitionCenter = document.getElementById("btn-transition-center");
let btnTransitionRight = document.getElementById("btn-transition-right");

const changeColor = () => {
    colorChanger += 1;
    if (colorChanger === 1) {
        visualsPanel.style.color = "rgb(255, 255, 255)";
    } else if (colorChanger === 2) {
        visualsPanel.style.color = "rgb(0, 255, 0)";
    } else if (colorChanger === 3) {
        visualsPanel.style.color = "rgb(255, 255, 0)";
    } else if (colorChanger === 4) {
        visualsPanel.style.color = "rgb(255, 0, 0)";
        colorChanger = 0;
    }
}

const fontFx = () => {
    alternate = !alternate;
    alternate ? (
        visualsPanel.style.textShadow = "50px 50px",
        visualsPanel.style.marginLeft = "50px"
    ) : (
        visualsPanel.style.textShadow = "",
        visualsPanel.style.marginLeft = "0px"

    );
}

const transitionLeft = () => {
    visualsPanel.style.transition = "all 3s ease-in-out 0s";
    visualsPanel.style.transform = "matrix3d(1,0,0.00,0.002,0.00,1,0.00,0,0,0,1,0,0,0,0,1";
    visualsPanel.style.transformOrigin = "center center 0px"; 
}

const transitionCenter = () => {
    visualsPanel.style.transition = "all 3s ease-in-out 0s";
    visualsPanel.style.transform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
    visualsPanel.style.transformOrigin = "0px"; 
}

const transitionRight = () => {
    visualsPanel.style.transition = "all 3s ease-in-out 0s";
    visualsPanel.style.transform = "matrix3d(1,0,0.00,-0.002,0.00,1,0.00,0,0,0,1,0,0,0,0,1)";
    visualsPanel.style.transformOrigin = "center center 0px"; 
}

btnColors.addEventListener("click", changeColor);
btnFontFx.addEventListener("click", fontFx);
btnTransitionLeft.addEventListener("click", transitionLeft);
btnTransitionCenter.addEventListener("click", transitionCenter);
btnTransitionRight.addEventListener("click", transitionRight);
