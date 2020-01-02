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

function localDate() {
    let currentDate = new Date().toLocaleDateString()

    console.log(currentDate);
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
        $('body').removeClass('themeDarkBody');
        $('header').removeClass('themeDarkNav');
        $('.categoryname').removeClass('themeDarkCategory');
        $('.featured, .recommended, .library-games-left, .library-games-right, .news').removeClass('themeDarkSection');
        $('.card-recommendedGameDescription').removeClass('themeDarkGameDescription');
        $('.game-product').removeClass('themeDarkGameProduct');
        $('.show-more-button').removeClass('themeDarkShowMoreButton');
        $('.hot-games-footer').removeClass('themeDarkLibraryBottom');
        $('.library-games-button-container').removeClass('themeDarkLibraryBottom');
        $('.topFooter,.bottomFooter').removeClass('themeDarkFooter');
        // // // // Library // // //
        $('.libraryItself').addClass('themeBrightLibraryItself');
        $('.sectionForSearchForm').addClass('themeBrightLibrarySearchForm');
        ////// Calendar /////
        $('.calendarLogo').removeClass('themeDarkCalendarLogo');
        $('.calendarContainer').removeClass('themeDarkCalendarContainer');
        $('.card-CalendarGameDesc').removeClass('themeDarkCalendarCard');
        ///// Guidelines /////
        $('.guidelines').removeClass('themeDarkGuidelinesContainer');
        $('.guidelines h3').removeClass('themeDarkGuidelinesLogo');
        $('.guidelines p').removeClass('themeDarkGuidelinesText');
        $('.guidelines li').removeClass('themeDarkGuidelinesText');
            /* Remove Blue */
        $('body').removeClass('themeBlueBody');
        $('header').removeClass('themeBlueNav');
        $('.popupLoginForm').removeClass('themeBluePopupForm');
        $('.categoryname').removeClass('themeBlueCategory');
        $('.featured, .recommended, .library-games-left, .library-games-right, .news').removeClass('themeBlueSection');
        $('.card-recommendedGameDescription').removeClass('themeBlueGameDescription');
        $('.game-product').removeClass('themeBlueGameProduct');
        $('.show-more-button').removeClass('themeBlueShowMoreButton');
        $('.hot-games-footer').removeClass('themeBlueLibraryBottom');
        $('.library-games-button-container').removeClass('themeBlueLibraryBottom');
        $('.middleFooter').removeClass('themeBlueMiddleFooter');
        $('.topFooter,.bottomFooter').removeClass('themeBlueFooter');
        ///// Calendar /////
        $('.calendarLogo').removeClass('themeBlueCalendarLogo');
        $('.calendarContainer').removeClass('themeBlueCalendarContainer');
        $('.card-CalendarGameDesc').removeClass('themeBlueCalendarCard');
        //// Guidelines ////
        
    });
}

function buttonSwitchThemeDark(){
    $('.themeDarkTheme').click(function(){
            /* Add */
        $('body').addClass('themeDarkBody');
        $('header').addClass('themeDarkNav');
        $('.categoryname').addClass('themeDarkCategory');
        $('.featured, .recommended, .library-games-left, .library-games-right, .news').addClass('themeDarkSection');
        $('.card-recommendedGameDescription').addClass('themeDarkGameDescription');
        $('.game-product').addClass('themeDarkGameProduct');
        $('.show-more-button').addClass('themeDarkShowMoreButton');
        $('.hot-games-footer').addClass('themeDarkLibraryBottom');
        $('.library-games-button-container').addClass('themeDarkLibraryBottom');
        $('.topFooter,.bottomFooter').addClass('themeDarkFooter');
        ///// Calendar /////
        $('.calendarLogo').addClass('themeDarkCalendarLogo');
        $('.calendarContainer').addClass('themeDarkCalendarContainer');
        $('.card-CalendarGameDesc').addClass('themeDarkCalendarCard');
        //////Guidelines ////
        $('.guidelines').addClass('themeDarkGuidelinesContainer');
        $('.guidelines h3').addClass('themeDarkGuidelinesLogo');
        $('.guidelines p').addClass('themeDarkGuidelinesText');
        $('.guidelines li').addClass('themeDarkGuidelinesText');
            /* Remove */
        $('body').removeClass('themeBlueBody');
        $('header').removeClass('themeBlueNav');
        $('.popupLoginForm').removeClass('themeBluePopupForm');
        $('.categoryname').removeClass('themeBlueCategory');
        $('.featured, .recommended, .library-games-left, .library-games-right, .news').removeClass('themeBlueSection');
        $('.card-recommendedGameDescription').removeClass('themeBlueGameDescription');
        $('.game-product').removeClass('themeBlueGameProduct');
        $('.show-more-button').removeClass('themeBlueShowMoreButton');
        $('.hot-games-footer').removeClass('themeBlueLibraryBottom');
        $('.library-games-button-container').removeClass('themeBlueLibraryBottom');
        $('.middleFooter').removeClass('themeBlueMiddleFooter');
        $('.topFooter,.bottomFooter').removeClass('themeBlueFooter');
        ////// Library /////
        $('.libraryItself').removeClass('themeBrightLibraryItself');
        $('.sectionForSearchForm').removeClass('themeBrightLibrarySearchForm');
        ////// Calendar ////
        $('.calendarLogo').removeClass('themeBlueCalendarLogo');
        $('.calendarContainer').removeClass('themeBlueCalendarContainer');
        $('.card-CalendarGameDesc').removeClass('themeBlueCalendarCard');
        ///// Guidelines/////
        $('.guidelines').removeClass('themeBlueGuidelinesContainer');
        
    });
}

function buttonSwitchThemeBlue(){
    $('.themeBlueTheme').click(function(){
            /* Add */ 
        $('body').addClass('themeBlueBody');
        $('header').addClass('themeBlueNav');
        $('.popupLoginForm').addClass('themeBluePopupForm');
        $('.categoryname').addClass('themeBlueCategory');
        $('.featured, .recommended, .library-games-left, .library-games-right, .news').addClass('themeBlueSection');
        $('.card-recommendedGameDescription').addClass('themeBlueGameDescription');
        $('.game-product').addClass('themeBlueGameProduct');
        $('.show-more-button').addClass('themeBlueShowMoreButton');
        $('.hot-games-footer').addClass('themeBlueLibraryBottom');
        $('.library-games-button-container').addClass('themeBlueLibraryBottom');
        $('.middleFooter').addClass('themeBlueMiddleFooter');
        $('.topFooter,.bottomFooter').addClass('themeBlueFooter');
        /* Calendar */
        $('.calendarLogo').addClass('themeBlueCalendarLogo');
        $('.calendarContainer').addClass('themeBlueCalendarContainer');
        $('.card-CalendarGameDesc').addClass('themeBlueCalendarCard');
            /* Remove */
        $('body').removeClass('themeDarkBody');
        $('header').removeClass('themeDarkNav');
        $('.categoryname').removeClass('themeDarkCategory');
        $('.card-recommendedGameDescription').removeClass('themeDarkGameDescription');
        $('.featured, .recommended, .library-games-left, .library-games-right, .news').removeClass('themeDarkSection');
        $('.game-product').removeClass('themeDarkGameProduct');
        $('.show-more-button').removeClass('themeDarkShowMoreButton');
        $('.hot-games-footer').removeClass('themeDarkLibraryBottom');
        $('.library-games-button-container').removeClass('themeDarkLibraryBottom');
        $('.topFooter,.bottomFooter').removeClass('themeDarkFooter');
        //////////
        $('.libraryItself').removeClass('themeBrightLibraryItself');
        $('.sectionForSearchForm').removeClass('themeBrightLibrarySearchForm');
        //////////
        $('.calendarLogo').removeClass('themeDarkCalendarLogo');
        $('.calendarContainer').removeClass('themeDarkCalendarContainer');
        $('.card-CalendarGameDesc').removeClass('themeDarkCalendarCard');
        //////////
        $('.guidelines').removeClass('themeDarkGuidelinesContainer');
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

function videoVolume() {
    $('#video1').prop("volume", 0.1);
}

/* Category Checkboxes */    

function handleCategoryFilter() {   
    $('input[name="categoryCheckbox"]').click(function(){
        $('.sectionForGames a').addClass('hide');
        $('.categoriesContainer input').each(function(index){
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
        $('.studiosContainer input').each(function(index){
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

function preview_image(event) 
{
    var reader = new FileReader();
    reader.onload = function()
{
    var output = document.getElementById('output_image');
    output.src = reader.result;
}
    reader.readAsDataURL(event.target.files[0]);
}
















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