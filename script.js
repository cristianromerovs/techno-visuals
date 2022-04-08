window.addEventListener("keyup", (e) => {
    e.key === "1" && hideContent();
    e.key === "2" && changeColor();
    e.key === "3" && fontFx();
    e.key === "4" && transitionCarrouselOn();
    e.key === "5" && transitionCarrouselOff();
    e.key === "6" && rotateCenter();
    e.key === "7" && pingFast();
});
let myBpm = 140;
const minuteINms = 60000;

let calculateBpm = (minuteINms / myBpm);
calculateBpm = String(calculateBpm).slice(0, 3);;
calculateBpm = Number(calculateBpm);

let visualsPanel = document.querySelector('.visuals');
let alternate, rotateToggle, pingToggle, hideToggle;
alternate = rotateToggle = pingToggle = carrouselToggle = hideToggle = true;
let colorChanger = 0;
let carrouselChanger = 0;
let intervalBpm, intervalColors, intervalCarrousel;

const hideContent = () => {
    hideToggle ? visualsPanel.style.opacity = "0" : visualsPanel.style.opacity = "1";
    hideToggle = !hideToggle;
}

const rotateCenter = () => {
    visualsPanel.classList.contains("ping") && visualsPanel.classList.remove("ping");
    rotateToggle ? visualsPanel.classList.add("rotate-center") : (visualsPanel.classList.remove("rotate-center"));
    rotateToggle = !rotateToggle;
}

const pingFast = () => {
    visualsPanel.classList.contains("rotate-center") && visualsPanel.classList.remove("rotate-center");
    pingToggle ? visualsPanel.classList.add("ping") : visualsPanel.classList.remove("ping");
    pingToggle = !pingToggle;
}

const generateSymbols = () => {
    var length = 990,
        charset = "abcdefghijklmnopqrstuvwxyzABCEFGHIJKLMNPTUVWXYZ123456789¼½¾⅓⅔⅛⅜⅝≈>≥≧≩≫≳⋝÷∕≂⊟⊞⨁∟∠∡⊾⟀⦜⦛⦠√∛∜⍍≡≢⧥⩧⅀◊⟠⨌⨍⨏⨜⨛◜◝◞◟⤸⤹◆◇❖○◍●◐◑◒◓◔◕◖◗⬡⬢‰ⁿ¹²³§∞⌖◧◨◩◪▢▣▤▥▦▧▨▩▪▫▬▭▮▯▰▱◆◇◈◉◊○◌◎◘◙◚◛◜◝◞◟◠◡◦◫◬◭◮◯▲△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += (charset.charAt(Math.floor(Math.random() * n)));
    }
    visualsPanel.innerHTML = retVal;
}

const changeColor = () => {
    intervalColors && clearInterval(intervalColors);
    intervalColors = setInterval(changeColor, 10000);
    colorChanger += 1;
    colorChanger === 1 && (visualsPanel.style.color = "rgb(255, 255, 255)");
    colorChanger === 2 && (visualsPanel.style.color = "rgb(0, 255, 0)");
    colorChanger === 3 && (visualsPanel.style.color = "rgb(255, 255, 0)");
    colorChanger === 4 && (visualsPanel.style.color = "rgb(255, 0, 0)", colorChanger = 0);
}

const transitionCarrouselOff = () => {
    transitionCenter();
    intervalCarrousel = clearInterval(intervalCarrousel);
}

const transitionCarrouselOn = () => {
        intervalCarrousel && clearInterval(intervalCarrousel);
        intervalCarrousel = setInterval(transitionCarrouselOn, 3000);
        carrouselChanger += 1;
        carrouselChanger === 1 && (transitionLeft());
        carrouselChanger === 2 && (transitionCenter());
        carrouselChanger === 3 && (transitionRight());
        carrouselChanger === 4 && (transitionCenter(), carrouselChanger = 0);
}

// Interval BPM
intervalBpm && clearInterval(intervalBpm);
intervalBpm = setInterval(generateSymbols, calculateBpm);

const fontFx = () => {
    alternate ? (
        visualsPanel.style.textShadow = "50px 50px",
        visualsPanel.style.marginLeft = "50px"
    ) : (
        visualsPanel.style.textShadow = "",
        visualsPanel.style.marginLeft = "0px"
    );
    alternate = !alternate;
}

const transitionLeft = () => {
    visualsPanel.style.transform = "matrix3d(1,0,0.00,0.002,0.00,1,0.00,0,0,0,1,0,0,0,0,1";
    visualsPanel.style.transformOrigin = "center center 0px";
}

const transitionCenter = () => {
    visualsPanel.style.transform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
    visualsPanel.style.transformOrigin = "0px";
}

const transitionRight = () => {
    visualsPanel.style.transform = "matrix3d(1,0,0.00,-0.002,0.00,1,0.00,0,0,0,1,0,0,0,0,1)";
    visualsPanel.style.transformOrigin = "center center 0px";
}
