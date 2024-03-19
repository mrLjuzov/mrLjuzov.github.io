const uiBtnDarkMode = document.getElementById("darkModeToggle");
const uiBtnLightMode = document.getElementById("lightModeToggle");
const topSideElement = document.querySelector(".topSide");
const portraitShadowElement = document.querySelector("img.portrait-picture");
const contentsElement = document.querySelector(".contents");
const menuContentsElements = document.querySelector(".menucontents");
const mclisttextElement = document.querySelectorAll(".mclisttext-eng, .mclisttext-mkd");
const backgroundElement = document.querySelector(".background");
const modeLDlement = document.querySelector(".lightModeDark");
const nameFLElement = document.querySelectorAll(".f-l-name-eng, .f-l-name-mkd");
const jobDescriptionElement = document.querySelectorAll(".job-description-eng, .job-description-mkd");
const mclist = document.querySelectorAll('.mclist-eng, .mclist-mkd');
const mclIndicatorElement = document.querySelectorAll(".mclindicator");
const logoDefaultElement = document.querySelectorAll("img.ljuzovlogo, img.ljuzovnamelogo");
const logoWhiteElement = document.querySelectorAll("img.ljuzovwhitelogo, img.ljuzovwhitenamelogo");
const flagTextElement = document.querySelectorAll('.flag-text-eng, .flag-text-mkd')

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

//Language Switching and Menubar Contents below
let lastActiveId = null; // Variable to store the ID of the last active element

// The Language Switch
function translationsLangSwitch(translationsLang) {
    var elementsEng = document.querySelectorAll('[class*="-eng"]:not(.mclisttext-eng)');
    var elementsMkd = document.querySelectorAll('[class*="-mkd"]:not(.mclisttext-mkd)');
    var mclisttextEng = document.querySelectorAll('.mclisttext-eng');
    var mclisttextMkd = document.querySelectorAll('.mclisttext-mkd');
    var hobbiescontentsEng = document.querySelectorAll('.hobbiescontent-eng');
    var hobbiescontentsMkd = document.querySelectorAll('.hobbiescontent-mkd');
    var translationsBtnEng = document.querySelector(".translationsbutton-eng");

    // Hide elements with '-eng' class and show elements with '-mkd' class
    if (translationsLang === '-eng') {
        elementsEng.forEach(function(el) {
            el.style.display = 'none';
        });
        elementsMkd.forEach(function(el) {
            el.style.display = 'flex';
        });
        mclisttextEng.forEach(function(mclten) {
            mclten.style.display = 'none';
        });
        mclisttextMkd.forEach(function(mcltmkd) {
            mcltmkd.style.display = 'contents';
        });
        hobbiescontentsEng.forEach(function(hobce) {
            hobce.style.display = 'none';
        });
        hobbiescontentsMkd.forEach(function(hobce) {
            hobce.style.display = 'list-item';
        });
        translationsBtnEng.style.display = 'none';

        // Activate mclist-mkd if last active element was mclist-eng
        if (lastActiveId && lastActiveId.endsWith('-eng')) {
            const mclistMkd = document.getElementById(lastActiveId.replace('-eng', '-mkd'));
            if (mclistMkd) {
                mclistMkd.classList.add('active');
            }
        }
    } 
    // Hide elements with '-mkd' class and show elements with '-eng' class
    else if (translationsLang === '-mkd') {
        elementsMkd.forEach(function(el) {
            el.style.display = 'none';
        });
        elementsEng.forEach(function(el) {
            el.style.display = 'flex';
        });
        mclisttextMkd.forEach(function(mcltmkd) {
            mcltmkd.style.display = 'none';
        });
        mclisttextEng.forEach(function(mclten) {
            mclten.style.display = 'contents';
        });
        hobbiescontentsMkd.forEach(function(hobce) {
            hobce.style.display = 'none';
        });
        hobbiescontentsEng.forEach(function(hobce) {
            hobce.style.display = 'list-item';
        });
        translationsBtnEng.style.display = 'block';

        // Activate mclist-eng if last active element was mclist-mkd
        if (lastActiveId && lastActiveId.endsWith('-mkd')) {
            const mclistEng = document.getElementById(lastActiveId.replace('-mkd', '-eng'));
            if (mclistEng) {
                mclistEng.classList.add('active');
            }
        }
    }
    
}

//Event listeners for language switch buttons
document.getElementById('translationsbutton-eng').addEventListener('click', function() {
    translationsLangSwitch('-eng');
});
document.getElementById('translationsbutton-mkd').addEventListener('click', function() {
    translationsLangSwitch('-mkd');
});

//Event listener for each mclist item to set active state
mclist.forEach(function(item) {
    item.addEventListener('click', function() {
        activeLink.call(this);
        lastActiveId = this.id;
    });
});

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
    mclisttextElement.forEach(function(element) {
        element.style.color = theme.menuContentsTextColor;
    });
    nameFLElement.forEach(function(fln) {
        fln.style.color = theme.nameColor;
    });
    jobDescriptionElement.forEach(function(jd) {
        jd.style.color = theme.jobDescriptionColor;
    });
    mclIndicatorElement.forEach(function(mclind) {
        mclind.style.background = theme.indicatorBackground;
        mclind.style.boxShadow = theme.indicatorBoxShadow;
        mclind.style.border = theme.indicatorBorder;
    });
    modeLDlement.style.color = theme.modeLDColor;
    flagTextElement.forEach(function(fte) {
        fte.style.color = theme.flagTextColor;
    });

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
    modeLDColor: commonTextColorDark,
    flagTextColor: commonTextColorDark
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
    modeLDColor: commonTextColorLight,
    flagTextColor: commonTextColorLight
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