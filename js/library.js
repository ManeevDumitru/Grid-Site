$(document).ready(function(){
    buttonTopFunction();
    buttonSwitchThemeDark();
    buttonSwitchThemeBright();
    buttonSwitchThemeBlue();
});

function buttonSwitchThemeBright(){
    $('.themeBrightTheme').click(function(){
        $('body').removeClass('themeDarkBody');
        $('.categoryname').removeClass('themeDarkSection');
        $('.recommended').removeClass('themeDarkSection');
        $('.featured').removeClass('themeDarkSection');
        $('.library-games-left').removeClass('themeDarkSection');
        $('.library-games-right').removeClass('themeDarkSection');
        $('.game-product').removeClass('themeDarkGameProduct');
        $('.hot-game-footer').removeClass('themeDarkSection');
        $('.library-games-button-container').removeClass('themeDarkSection');
        $('.news').removeClass('themeDarkSection');
        $('body').removeClass('themeBlueBody');
        $('.categoryname').removeClass('themeBlueSection');
        $('.recommended').removeClass('themeBlueSection');
        $('.featured').removeClass('themeBlueSection');
        $('.library-games-left').removeClass('themeBlueSection');
        $('.library-games-right').removeClass('themeBlueSection');
        $('.game-product').removeClass('themeBlueGameProduct');
        $('.hot-game-footer').removeClass('themeBlueSection');
        $('.library-games-button-container').removeClass('themeBlueSection');
        $('.news').removeClass('themeBlueSection');
    });
}

function buttonSwitchThemeDark(){
    $('.themeDarkTheme').click(function(){
        $('body').addClass('themeDarkBody');
        $('.categoryname').addClass('themeDarkSection');
        $('.recommended').addClass('themeDarkSection');
        $('.featured').addClass('themeDarkSection');
        $('.library-games-left').addClass('themeDarkSection');
        $('.library-games-right').addClass('themeDarkSection');
        $('.game-product').addClass('themeDarkGameProduct');
        $('.hot-game-footer').addClass('themeDarkSection');
        $('.library-games-button-container').addClass('themeDarkSection');
        $('.news').addClass('themeDarkSection');
        $('body').removeClass('themeBlueBody');
        $('.categoryname').removeClass('themeBlueSection');
        $('.recommended').removeClass('themeBlueSection');
        $('.featured').removeClass('themeBlueSection');
        $('.library-games-left').removeClass('themeBlueSection');
        $('.library-games-right').removeClass('themeBlueSection');
        $('.game-product').removeClass('themeBlueGameProduct');
        $('.hot-game-footer').removeClass('themeBlueSection');
        $('.library-games-button-container').removeClass('themeBlueSection');
        $('.news').removeClass('themeBlueSection');
    });
}

function buttonSwitchThemeBlue(){
    $('.themeBlueTheme').click(function(){
        $('body').addClass('themeBlueBody');
        $('.categoryname').addClass('themeBlueSection');
        $('.recommended').addClass('themeBlueSection');
        $('.featured').addClass('themeBlueSection');
        $('.library-games-left').addClass('themeBlueSection');
        $('.library-games-right').addClass('themeBlueSection');
        $('.game-product').addClass('themeBlueGameProduct');
        $('.hot-game-footer').addClass('themeBlueSection');
        $('.library-games-button-container').addClass('themeBlueSection');
        $('.news').addClass('themeBlueSection');
    });
}

function buttonTopFunction(){
    $('.buttonUp').click(function(){
        window.scrollTo(0,0); 
    });
}