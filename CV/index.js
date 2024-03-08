const uiBtnDarkMode = document.getElementById("darkModeToggle");
const uiBtnLightMode = document.getElementById("lightModeToggle");
const topSideElement = document.querySelector(".topSide");
const portraitShadowElement = document.querySelector("img.portrait-picture");
const contentsElement = document.querySelector(".contents");
const menuContentsElements = document.querySelector(".menucontents");
const mclisttextElement = document.querySelectorAll(".mclisttext");
const backgroundElement = document.querySelector(".background");
const modeLDlement = document.querySelector(".lightModeDark");
const nameFLElement = document.querySelector(".f-l-name");
const jobDescriptionElement = document.querySelector(".job-description");
const mclist = document.querySelectorAll('.mclist');
const mclIndicatorElement = document.querySelector(".mclindicator");
const logoDefaultElement = document.querySelectorAll("img.ljuzovlogo, img.ljuzovnamelogo");
const logoWhiteElement = document.querySelectorAll("img.ljuzovwhitelogo, img.ljuzovwhitenamelogo");

uiBtnDarkMode.addEventListener("click", switchToDarkMode);
uiBtnLightMode.addEventListener("click", switchToLightMode);
mclist.forEach((item) => item.addEventListener('click', activeLink));


// The Dark Mode Switch
function switchToDarkMode() {
    uiBtnDarkMode.style.display = 'none';
    uiBtnLightMode.classList.add('switchModeActive');
    document.body.classList.add('mcldarkmode');
    switchTheme(darkTheme);
}

// The Light Mode Switch
function switchToLightMode() {
    uiBtnLightMode.classList.remove('switchModeActive');
    uiBtnDarkMode.style.removeProperty('display');
    document.body.classList.remove('mcldarkmode');
    switchTheme(lightTheme);
}

// The Active Section in the Menubar
function activeLink() {
    mclist.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

// Open Socials on click function
function openLink(url) {
    window.open(url, '_blank');
}

// Theme Switching
function switchTheme(theme) {
    topSideElement.style.background = theme.topSideBackground;
    contentsElement.style.background = theme.contentsBackground;
    contentsElement.style.color = theme.contentsColor;
    backgroundElement.style.background = theme.background;
    menuContentsElements.style.background = theme.menuContentsBackground;
    mclisttextElement.forEach(element => element.style.color = theme.menuContentsTextColor);
    nameFLElement.style.color = theme.nameColor;
    jobDescriptionElement.style.color = theme.jobDescriptionColor;
    mclIndicatorElement.style.background = theme.indicatorBackground;
    mclIndicatorElement.style.boxShadow = theme.indicatorBoxShadow;
    mclIndicatorElement.style.border = theme.indicatorBorder;
    modeLDlement.style.color = theme.modeLDColor;
    // Handle logo display based on theme
    if (theme === darkTheme) {
        logoWhiteElement.forEach(img => img.style.display = 'inline');
        logoDefaultElement.forEach(img => img.style.display = 'none');
    } else if (theme === lightTheme) {
        logoWhiteElement.forEach(img => img.style.display = 'none');
        logoDefaultElement.forEach(img => img.style.display = 'inline');
    }
}

// For all Text Color on Dark theme
const commonTextColorDark = 'rgba(255, 255, 255, .7)'; //Modify only this if you want
const textColorDark = {
    contentsColor: commonTextColorDark,
    menuContentsTextColor: commonTextColorDark,
    nameColor: commonTextColorDark,
    jobDescriptionColor: commonTextColorDark,
    modeLDColor: commonTextColorDark
}

// For all contents with the Background Color on Dark theme
const commonBackgroundColorDark = 'rgb(92, 131, 116)'; //Modify only this if you want
const backgroundColorDark = {
    background: commonBackgroundColorDark,
    indicatorBoxShadow: commonBackgroundColorDark,
    indicatorBorder: '0.4vh solid ' + commonBackgroundColorDark
}

// For all with the Content Background Color on Dark theme
const commonBackgroundContentsColorDark = 'rgb(24, 61, 61)'; //Modify only this if you want
const backgroundContentsColorDark = {
    contentsBackground: commonBackgroundContentsColorDark,
    menuContentsBackground: commonBackgroundContentsColorDark,
    indicatorBackground: commonBackgroundContentsColorDark
}

// Dark Theme Styling
const darkTheme = {
    topSideBackground: 'rgba(4, 13, 18, .7)', //Modify only this if you want
    ...textColorDark,
    ...backgroundColorDark,
    ...backgroundContentsColorDark,
};

// For all Text Color on Light theme
const commonTextColorLight = 'rgba(0, 0, 0, .7)'; //Modify only this if you want
const textColorLight = {
    contentsColor: commonTextColorLight,
    menuContentsTextColor: commonTextColorLight,
    nameColor: commonTextColorLight,
    jobDescriptionColor: commonTextColorLight,
    modeLDColor: commonTextColorLight
}

// For all contents with the Background Color on Light theme
const commonBackgroundColorLight = 'rgb(255, 255, 255)'; //Modify only this if you want
const backgroundColorLight = {
    background: commonBackgroundColorLight,
    indicatorBorder: '0.4vh solid ' + commonBackgroundColorLight
}

// For all with the Content Background Color on Light theme
const commonBackgroundContentsColorLight = 'rgb(255, 255, 255)'; //Modify only this if you want
const backgroundContentsColorLight = {
    contentsBackground: commonBackgroundContentsColorLight,
    menuContentsBackground: commonBackgroundContentsColorLight,
    indicatorBackground: commonBackgroundContentsColorLight
}

// Light Theme Styling
const lightTheme = {
    topSideBackground: 'rgb(255, 255, 255)', //Modify only this if you want
    ...textColorLight,
    ...backgroundColorLight,
    ...backgroundContentsColorLight,
    indicatorBoxShadow: 'rgba(50, 50, 93, 0.25) 0px 15px 30px -24px inset, rgba(0, 0, 0, 0.3) 0px 9px 18px -36px inset;', //Modify only the rgba elements if you want
};
