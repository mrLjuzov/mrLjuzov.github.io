const uiBtnDarkMode = document.getElementById("darkModeToggle");
const uiBtnLightMode = document.getElementById("lightModeToggle");
const topSideElement = document.querySelector(".topSide");
const portraitShadowElement = document.querySelector("img.portrait-picture");
const contentsElement = document.querySelector(".contents");
const menuContentsElements = document.querySelector(".menucontents");
const mclisttextElement = document.querySelectorAll(".mclisttext");
const backgroundElement = document.querySelector(".background");
const nameFLElement = document.querySelector(".f-l-name");
const jobDescriptionElement = document.querySelector(".job-description");
const mclist = document.querySelectorAll('.mclist');
const mclIndicatorElement = document.querySelector(".mclindicator");


function switchToDarkMode() {
    uiBtnDarkMode.style.display = 'none';
    lightModeToggle.classList.add('switchModeActive');
    document.body.classList.add('mcldarkmode');
    switchDark();
}

function switchToLightMode() {
    lightModeToggle.classList.remove('switchModeActive');
    darkModeToggle.style.removeProperty('display');
    document.body.classList.remove('mcldarkmode');
    switchLight();
}

function activeLink() {
    mclist.forEach((item) =>
    item.classList.remove('active'))
    this.classList.add('active');
}
mclist.forEach((item) =>
item.addEventListener('click', activeLink));


function openLink(url) {
    window.open(url, '_blank');
}

function switchDark() {
    topSideElement.style.background = 'rgba(4, 13, 18, .7)';
    // topSideElement.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 30px 60px -12px inset, rgba(255, 255, 255, 0.3) 0px 18px 36px -18px inset';
    // portraitShadowElement.style.boxShadow = 'rgba(238, 243, 209, 0.15) 0px 48px 100px 0px';
    contentsElement.style.background = 'rgb(24, 61, 61)';
    contentsElement.style.color = 'rgba(255, 255, 255, .7)';
    // contentsElement.style.boxShadow = 'rgba(255, 255, 255, 0.16) 0px 1px 4px';
    backgroundElement.style.background = 'rgb(92, 131, 116)';
    menuContentsElements.style.background = 'rgb(24, 61, 61)';
    mclisttextElement.forEach(element => {element.style.color = 'rgba(255, 255, 255, .7)';});
    // menuContentsElements.style.boxShadow = 'rgba(255, 255, 255, 0.16) 0px 1px 4px';
    nameFLElement.style.color = 'rgba(255, 255, 255, .7)';
    jobDescriptionElement.style.color = 'rgba(255, 255, 255, .7)';
    mclIndicatorElement.style.background = 'rgb(24, 61, 61)';
    mclIndicatorElement.style.boxShadow = 'rgb(92, 131, 116)';
    mclIndicatorElement.style.border = '0.4vh solid rgb(92, 131, 116)';
}
function switchLight() {
    topSideElement.style.background = 'white';
    // topSideElement.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset';
    // portraitShadowElement.style.boxShadow = 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px';
    contentsElement.style.background = 'white';
    contentsElement.style.color = 'rgba(0, 0, 0, .7)';
    // contentsElement.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
    backgroundElement.style.background = 'white';
    menuContentsElements.style.background = 'white';
    mclisttextElement.forEach(element => {element.style.color = 'rgba(0, 0, 0, .7)';});
    // menuContentsElements.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
    nameFLElement.style.color = 'rgba(0, 0, 0, .7)';
    jobDescriptionElement.style.color = 'rgba(0, 0, 0, .7)';
    mclIndicatorElement.style.background = 'white';
    mclIndicatorElement.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 15px 30px -24px inset, rgba(0, 0, 0, 0.3) 0px 9px 18px -36px inset;';
    mclIndicatorElement.style.border = '0.4vh solid rgb(255, 255, 255)';
}

uiBtnDarkMode.addEventListener("click", switchToDarkMode);
uiBtnLightMode.addEventListener("click", switchToLightMode);