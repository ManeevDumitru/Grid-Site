$(document).ready(function(){
    sliderMainSlider();
    sliderMultipleItems();
    buttonWorkInProgress();
    buttonNotYetImplemented();
    buttonTopFunction();
    buttonSwitchThemeBright();
    buttonSwitchThemeDark();
    buttonSwitchThemeBlue();
    videoVolume();
    scrollTest();
    handleCategoryFilter();
});

function buttonWorkInProgress(){
    $('.work-in-progress').click(function(){
    $(this).hide();
    $('.blackBackground').hide();
  });
}

function buttonTopFunction(){
    $('.buttonUp').click(function(){
        window.scrollTo(0,0); 
    });
}

function buttonNotYetImplemented(){
    $('.not-yet-implemented').click(function(){
        alert('Not Yet Implemented');
    });
}

/* Themes */ /* Themes */ /* Themes */ /* Themes */ /* Themes */ /* Themes */ 

function buttonSwitchThemeBright(){
    $('.themeBrightTheme').click(function(){
            /* Remove Dark */ 
        $('body').removeClass('themeDarkBody');
        $('header').removeClass('themeDarkNav');
        $('.categoryname').removeClass('themeDarkCategory');
        $('.recommended').removeClass('themeDarkSection');
        $('.card-recommendedGameDescription').removeClass('themeDarkGameDescription');
        $('.featured').removeClass('themeDarkSection');
        $('.library-games-left').removeClass('themeDarkSection');
        $('.game-product').removeClass('themeDarkGameProduct');
        $('.show-more-button').removeClass('themeDarkShowMoreButton');
        $('.library-games-right').removeClass('themeDarkSection');
        $('.hot-games-footer').removeClass('themeDarkLibraryBottom');
        $('.library-games-button-container').removeClass('themeDarkLibraryBottom');
        $('.news').removeClass('themeDarkSection');
        $('footer').removeClass('themeDarkFooter');
            /* Remove Blue */
        $('body').removeClass('themeBlueBody');
        $('header').removeClass('themeBlueNav');
        $('.categoryname').removeClass('themeBlueCategory');
        $('.recommended').removeClass('themeBlueSection');
        $('.card-recommendedGameDescription').removeClass('themeBlueGameDescription');
        $('.featured').removeClass('themeBlueSection');
        $('.library-games-left').removeClass('themeBlueSection');
        $('.game-product').removeClass('themeBlueGameProduct');
        $('.show-more-button').removeClass('themeBlueShowMoreButton');
        $('.library-games-right').removeClass('themeBlueSection');
        $('.hot-games-footer').removeClass('themeBlueLibraryBottom');
        $('.library-games-button-container').removeClass('themeBlueLibraryBottom');
        $('.news').removeClass('themeBlueSection');
        $('footer').removeClass('themeBlueFooter');
    });
}

function buttonSwitchThemeDark(){
    $('.themeDarkTheme').click(function(){
            /* Add */
        $('body').addClass('themeDarkBody');
        $('header').addClass('themeDarkNav');
        $('.categoryname').addClass('themeDarkCategory');
        $('.recommended').addClass('themeDarkSection');
        $('.card-recommendedGameDescription').addClass('themeDarkGameDescription');
        $('.featured').addClass('themeDarkSection');
        $('.library-games-left').addClass('themeDarkSection');
        $('.game-product').addClass('themeDarkGameProduct');
        $('.show-more-button').addClass('themeDarkShowMoreButton');
        $('.library-games-right').addClass('themeDarkSection');
        $('.hot-games-footer').addClass('themeDarkLibraryBottom');
        $('.library-games-button-container').addClass('themeDarkLibraryBottom');
        $('.news').addClass('themeDarkSection');
        $('footer').addClass('themeDarkFooter');
            /* Remove */
        $('body').removeClass('themeBlueBody');
        $('header').removeClass('themeBlueNav');
        $('.categoryname').removeClass('themeBlueCategory');
        $('.recommended').removeClass('themeBlueSection');
        $('.card-recommendedGameDescription').removeClass('themeBlueGameDescription');
        $('.featured').removeClass('themeBlueSection');
        $('.library-games-left').removeClass('themeBlueSection');
        $('.game-product').removeClass('themeBlueGameProduct');
        $('.show-more-button').removeClass('themeBlueShowMoreButton');
        $('.library-games-right').removeClass('themeBlueSection');
        $('.hot-games-footer').removeClass('themeBlueLibraryBottom');
        $('.library-games-button-container').removeClass('themeBlueLibraryBottom');
        $('.news').removeClass('themeBlueSection');
        $('footer').removeClass('themeBlueFooter');
    });
}

function buttonSwitchThemeBlue(){
    $('.themeBlueTheme').click(function(){
            /* Add */ 
        $('body').addClass('themeBlueBody');
        $('header').addClass('themeBlueNav');
        $('.categoryname').addClass('themeBlueCategory');
        $('.recommended').addClass('themeBlueSection');
        $('.card-recommendedGameDescription').addClass('themeBlueGameDescription');
        $('.featured').addClass('themeBlueSection');
        $('.library-games-left').addClass('themeBlueSection');
        $('.game-product').addClass('themeBlueGameProduct');
        $('.show-more-button').addClass('themeBlueShowMoreButton');
        $('.library-games-right').addClass('themeBlueSection');
        $('.hot-games-footer').addClass('themeBlueLibraryBottom');
        $('.library-games-button-container').addClass('themeBlueLibraryBottom');
        $('.news').addClass('themeBlueSection');
        $('.footer').addClass('themeBlueFooter');
            /* Remove */
        $('body').removeClass('themeDarkBody');
        $('header').removeClass('themeDarkNav');
        $('.categoryname').removeClass('themeDarkCategory');
        $('.recommended').removeClass('themeDarkSection');
        $('.card-recommendedGameDescription').removeClass('themeDarkGameDescription');
        $('.featured').removeClass('themeDarkSection');
        $('.library-games-left').removeClass('themeDarkSection');
        $('.game-product').removeClass('themeDarkGameProduct');
        $('.show-more-button').removeClass('themeDarkShowMoreButton');
        $('.library-games-right').removeClass('themeDarkSection');
        $('.hot-games-footer').removeClass('themeDarkLibraryBottom');
        $('.library-games-button-container').removeClass('themeDarkLibraryBottom');
        $('.news').removeClass('themeDarkSection');
        $('footer').removeClass('themeDarkFooter');
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
                $('.' + $(this).attr('id')).parent().removeClass('hide');
                $('this').parent().closest('li').css({
                    'background':'white'
                });      
            };
        });                    
    });
}



















/*  Meme  */

function playPause() { 
    
    var myVideo = document.getElementById("video1"); 

  if 
    (myVideo.paused) {
    myVideo.play();
    function showVideo() {
        $('.background').css({
            'transform': 'translate(0,0)'
        });
    }
  }
  else 
    myVideo.pause(); 
  
    setTimeout(showVideo())
}

function playMeme() { 
    
    var Audio = document.getElementById("butm"); 

 if 
    (Audio.paused) 
        Audio.play();
  else 
    Audio.pause();

}

function ricardo() {
    $('#rm').css({
        "transform":"translate(0,-500px)"
    });
    setTimeout(function() {
        $('#naruto').css({
            "transform":"translate(1800px,0)"
        });
    },1000);
    setTimeout(function() {
        var Audio = document.getElementById("narutoo"); 
        Audio.pause();
        Audio.currentTime = 0;
        $('#naruto').attr(
            "src","../gif/nars.png"
        );
        $('#naruto').css({
            'width':'100px',
            'height':'150px',
        });
    },2200);
}
function playNar() { 
    
    var Audio = document.getElementById("narutoo"); 

 if 
    (Audio.paused) 
        Audio.play();
  else 
    Audio.pause();

}

function tbcde() {

    var Audio = document.getElementById("butm"); 
    
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

function scrollTest() {
        window.scrollTo(0, 1080);
}