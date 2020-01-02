$(document).ready(function(){
    sliderMainSlider();
    sliderMultipleItems();
    buttonTopFunction();
    buttonSwitchThemeBright();
    buttonSwitchThemeDark();
    buttonSwitchThemeBlue();
    handleCategoryFilter();
    popupOpenClose();
    localDate();
    changeMonth()
});

function buttonTopFunction(){
    $('.buttonUp').click(function(){
        window.scrollTo(0,0); 
    });
}

function popupOpenClose() {
    $('.background').hide();
    $('.buttonLogin').click(function(){
        $('.background').fadeIn(100);
        $('body').css({
            'overflow':'hidden'
        });
        
    });
    $('.popupLoginMenu button').click(function(){
        $('.background').fadeOut(100);
        $('body').css({
            'overflow':''
        });
    });
}

function changeMonth() {
    $('.DEC').hide();
    $('.monthCurrent').click(function(){
        $('.DEC').hide();
        $('.NOV').show();
        $('.monthCurrent').css({
            'background':'#9e1e9e',
            'color':'',
            'border-radius':''
        });
        $('.monthUpcoming').css({
            'background':'',
            'color':'',
            'border-radius':''
        });
    });
    $('.monthUpcoming').click(function(){
        $('.DEC').show();
        $('.NOV').hide();
        $('.monthUpcoming').css({
            'background':'#9e1e9e',
            'color':'white',
            'border-radius':'2px'
        });
        $('.monthCurrent').css({
            'background':'',
            'color':'black',
            'border-radius':''
        });
    });
}


/* Themes */ /* Themes */ /* Themes */ /* Themes */ /* Themes */ /* Themes */ 

function buttonSwitchThemeBright(){
    $('.themeBrightTheme').click(function(){
            /* Remove Dark */ 
        $('body').removeClass('themeDarkBody').removeClass('themeBlueBody');
        $('header').removeClass('themeDarkNav').removeClass('themeBlueNav');
        $('.categoryname').removeClass('themeDarkCategory').removeClass('themeBlueCategory');
        $('.featured, .recommended, .library-games-left, .library-games-right, .news').removeClass('themeDarkSection').removeClass('themeBlueSection');
        $('.card-recommendedGameDescription').removeClass('themeDarkGameDescription').removeClass('themeBlueGameDescription');
        $('.game-product').removeClass('themeDarkGameProduct').removeClass('themeBlueGameProduct');
        $('.show-more-button').removeClass('themeDarkShowMoreButton').removeClass('themeBlueShowMoreButton');
        $('.hot-games-footer').removeClass('themeDarkLibraryBottom').removeClass('themeBlueLibraryBottom');
        $('.library-games-button-container').removeClass('themeDarkLibraryBottom').removeClass('themeBlueLibraryBottom');
        $('.topFooter,.bottomFooter').removeClass('themeDarkFooter').removeClass('themeBlueFooter');
        // // // // Library // // //
        $('.libraryItself').addClass('themeBrightLibraryItself');
        $('.sectionForSearchForm').addClass('themeBrightLibrarySearchForm');
        ////// Calendar /////
        $('.calendarLogo').removeClass('themeDarkCalendarLogo').removeClass('themeBlueCalendarLogo');
        $('.calendarContainer').removeClass('themeDarkCalendarContainer').removeClass('themeBlueCalendarContainer');
        $('.card-CalendarGameDesc').removeClass('themeDarkCalendarCard').removeClass('themeBlueCalendarCard');
        ///// Guidelines /////
        $('.guidelines').removeClass('themeDarkGuidelinesContainer').removeClass('themeBlueGuidelinesContainer');
        $('.guidelines h3').removeClass('themeDarkGuidelinesLogo');
        $('.guidelines p').removeClass('themeDarkGuidelinesText');
        $('.guidelines li').removeClass('themeDarkGuidelinesText');
            /* Remove Blue */
        $('.popupLoginForm').removeClass('themeBluePopupForm');
        $('.middleFooter').removeClass('themeBlueMiddleFooter');
        //// Guidelines ////
        
    });
}

function buttonSwitchThemeDark(){
    $('.themeDarkTheme').click(function(){
            /* Add */
        $('body').addClass('themeDarkBody').removeClass('themeBlueBody');
        $('header').addClass('themeDarkNav').removeClass('themeBlueNav');
        $('.categoryname').addClass('themeDarkCategory').removeClass('themeBlueCategory');
        $('.featured, .recommended, .library-games-left, .library-games-right, .news').addClass('themeDarkSection').removeClass('themeBlueSection');
        $('.card-recommendedGameDescription').addClass('themeDarkGameDescription').removeClass('themeBlueGameDescription');
        $('.game-product').addClass('themeDarkGameProduct').removeClass('themeBlueGameProduct');
        $('.show-more-button').addClass('themeDarkShowMoreButton').removeClass('themeBlueShowMoreButton');
        $('.hot-games-footer').addClass('themeDarkLibraryBottom').removeClass('themeBlueLibraryBottom');
        $('.library-games-button-container').addClass('themeDarkLibraryBottom').removeClass('themeBlueLibraryBottom');
        $('.topFooter,.bottomFooter').addClass('themeDarkFooter').removeClass('themeBlueFooter');
        ///// Calendar /////
        $('.calendarLogo').addClass('themeDarkCalendarLogo').removeClass('themeBlueCalendarLogo');
        $('.calendarContainer').addClass('themeDarkCalendarContainer').removeClass('themeBlueCalendarContainer');
        $('.card-CalendarGameDesc').addClass('themeDarkCalendarCard').removeClass('themeBlueCalendarCard');
        //////Guidelines ////
        $('.guidelines').addClass('themeDarkGuidelinesContainer').removeClass('themeBlueGuidelinesContainer');
        $('.guidelines h3').addClass('themeDarkGuidelinesLogo');
        $('.guidelines p').addClass('themeDarkGuidelinesText');
        $('.guidelines li').addClass('themeDarkGuidelinesText');
            /* Remove */
        $('.popupLoginForm').removeClass('themeBluePopupForm');
        $('.middleFooter').removeClass('themeBlueMiddleFooter');
        ////// Library /////
        $('.libraryItself').removeClass('themeBrightLibraryItself');
        $('.sectionForSearchForm').removeClass('themeBrightLibrarySearchForm');
        
    });
}

function buttonSwitchThemeBlue(){
    $('.themeBlueTheme').click(function(){
            /* Add */ 
        $('body').addClass('themeBlueBody').removeClass('themeDarkBody');
        $('header').addClass('themeBlueNav').removeClass('themeDarkNav');
        $('.popupLoginForm').addClass('themeBluePopupForm');
        $('.categoryname').addClass('themeBlueCategory').removeClass('themeDarkCategory');
        $('.featured, .recommended, .library-games-left, .library-games-right, .news').addClass('themeBlueSection');
        $('.card-recommendedGameDescription').addClass('themeBlueGameDescription').removeClass('themeDarkGameDescription').removeClass('themeDarkSection');
        $('.game-product').addClass('themeBlueGameProduct').removeClass('themeDarkGameProduct');
        $('.show-more-button').addClass('themeBlueShowMoreButton').removeClass('themeDarkShowMoreButton');
        $('.hot-games-footer').addClass('themeBlueLibraryBottom').removeClass('themeDarkLibraryBottom');
            // Library
        $('.library-games-button-container').addClass('themeBlueLibraryBottom').removeClass('themeDarkLibraryBottom');
        $('.middleFooter').addClass('themeBlueMiddleFooter');
        $('.topFooter,.bottomFooter').addClass('themeBlueFooter').removeClass('themeDarkFooter');
            // Calendar
        $('.calendarLogo').addClass('themeBlueCalendarLogo').removeClass('themeDarkCalendarLogo');
        $('.calendarContainer').addClass('themeBlueCalendarContainer').removeClass('themeDarkCalendarContainer');
        $('.card-CalendarGameDesc').addClass('themeBlueCalendarCard').removeClass('themeDarkCalendarCard');
            /* Remove */
        $('.libraryItself').removeClass('themeBrightLibraryItself');
        $('.sectionForSearchForm').removeClass('themeBrightLibrarySearchForm');
            // Guidelines
        $('.guidelines').removeClass('themeDarkGuidelinesContainer');
        $('.guidelines h3').removeClass('themeDarkGuidelinesLogo');
        $('.guidelines p').removeClass('themeDarkGuidelinesText');
        $('.guidelines li').removeClass('themeDarkGuidelinesText');
    });
}

/* Main Slider */ /* Main Slider */ /* Main Slider */ /* Main Slider */ 

function sliderMainSlider(){
    $('.main-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        pauseOnDotsHover: true,
        autoplaySpeed: 7500,
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
        ]
    });
}


/* Slider Multiple Items */ /* Slider Multiple Items */ /* Slider Multiple Items */

function sliderMultipleItems(){
    $('.multiple-items').slick({
	    dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        pauseOnDotsHover: true,
        autoplaySpeed: 5000,
        responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 830,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 550,
            settings: {
                sildesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        }
    ]
	});
}

/* Category Checkboxes */    

function handleCategoryFilter() {   
    $('input[name="categoryCheckbox"]').click(function(){
        $('.sectionForGames a').addClass('hide');
        $('.categoriesContainer input').each(function(){
            if($(this).prop('checked')){     
                $('.' + $(this).attr('id')).parent().closest('a').removeClass('hide');
                $(this).parent().closest('li').css({
                    'background':'#404040'
                }); 
            } else {
                $(this).parent().closest('li').css({
                    'background':''
                });
            }
        }); 
        $('.studiosContainer input').each(function(){
            if($(this).prop('checked')){     
                $('.' + $(this).attr('id')).parent().removeClass('hide');
                $(this).parent().closest('li').css({
                    'background':'#404040'
                });      
            } else {
                $(this).parent().closest('li').css({
                    'background':''
                });
            }
        });                        
    });
}


//

/*function preview_image(event)
{
    var reader = new FileReader();
    reader.onload = function()
{
    var output = document.getElementById('output_image');
    output.src = reader.result;
}
    reader.readAsDataURL(event.target.files[0]);
}*/
















/*  Meme  */

function playMeme() { 
    const Audio = document.getElementById("butm"); 
if 
    (Audio.paused) 
        Audio.play();
else 
    Audio.pause();
}

function tbcde() {
    const Audio = document.getElementById("butm"); 
    setTimeout(function() {
        $('.tbcd').css({
            "transform":"translate(0, 0)"
        });
        $('.oback').css({
            'transform': 'translate(0,0)'
        });
        $('#gun').css({
            'transform': 'translate(0,0)'
        });
        $('body').css({
            'overflow': 'hidden'
        });
    }, 3500);
        setTimeout(function() {
        Audio.pause();
        Audio.currentTime=0;
        $('.tbcd').css({
            "transform":"translate(-5000px,0)"
        });
        $('.oback').css({
            'transform': 'translate(-5000px,0)'
        });
        $('#gun').css({
            'transform': 'translate(-5000px,0)'
        });
        $('body').css({
            'overflow': 'visible'
        });
        }, 10700);
}