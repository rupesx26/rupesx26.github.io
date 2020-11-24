(function($) {
	'use strict';
// VARS
    var $window = $(window);
    var windowSize = $window.width();
    var windowHeight = getViewPortHeight();

	$(document).ready(function(){
		welcomeText();
		backgroundImg();
		backgroundColor();
		textColor();
		titleReflect();
		progressBar();
		$('.viewportHeight').css({'height': windowHeight + 'px'});

		

	});

	$(window).resize(function() {
		windowSize = $window.width();
        windowHeight = getViewPortHeight();
	});

//Welcome Text
function welcomeText(){
	$('.welcomeText').css({ 'margin-top': $(window).height() / 2.35 + 'px'  });
}

//Viewport Height
function getViewPortHeight() {     
        
        //detech ios chrome
        if(navigator.userAgent.match('CriOS')) {
            return window.innerHeight;
        }
        return $window.height();
    }

//Background image
function backgroundImg(){
	$("section, div").each(function(indx) {
            if ($(this).attr("data-bg")) {
                $(this).css("background-image", "url(" + $(this).data("bg") + ")");
            }
        });
}

//Background color
function backgroundColor(){
	$("section, div, span").each(function(indx) {
            if ($(this).attr("data-bgcolor")) {
              $(this).css("background", $(this).data("bgcolor"));
            }
        });
}

//Text color
function textColor(){
	$("section, div, h1, h2, h3, h4, p, span").each(function(indx) {
            if ($(this).attr("data-color")) {
              $(this).css("color", $(this).data("color"));
            }
        });
}

//Title reflect
function titleReflect(){
	if($('.title-left')){
			$(this).each(function(){
				var title = $('.title-left h2');
				var titleText = ($('.title-left h2').text());
				 $(title).attr('data-before', titleText);
			});
		}

}

function progressBar(){
	$(".skillBar li").each(function(index){
		var barWidth = $("span:first-child",this).attr('rel');
		var barTitle = $("span:first-child",this).attr('title');
		$("span:first-child",this).animate({width:  + parseInt((barWidth/100)*100)+'%'}, 2000);
		$("span:nth-child(2)",this).html(barWidth+'%');
		// setTimeout(function(){
		// 	console.log($(this));
		// });
		$("span:first-child",this).html(barTitle);
	
	});
}


var wall = new Freewall("#freewall");
			wall.reset({
				selector: '.cell',
				animate: true,
				cellW: 20,
				cellH: 200,
				onResize: function() {
					wall.fitWidth();
				}
			});
			wall.fitWidth();
			// for scroll bar appear;
			$(window).trigger("resize");

			var getVisitorName = $('.visitor').text().split('').length
			var getHereText = $('.hero-text')
			var getWelcomeText = $('.welcome-text').find('li')

			//If visitor name is long
			if(getVisitorName > 6 ) {
				getHereText.style.fontSize = '10px'
			}
			setTimeout(function(){
				for(var i = 0; getWelcomeText.length > i; i++){
					(function(i){
						setTimeout(function(){
							 getWelcomeText[i].classList.add('fadeIn');
						}, 1500*i);
					})(i);
				}
			}, 2000)	

})(jQuery);;