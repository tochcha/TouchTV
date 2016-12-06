$(document).ready(function () {
	
	// анимация сэндвича
	$("#sandwich, .menu_item").click(function () {
		$("#sandwich").toggleClass("active");
		$("header nav").slideToggle(300);
	});
	
	// тень от меню при прокрутке страницы больше чем 22px
	$(window).scroll(function () {
		if ($(this).scrollTop() > 2) {
			// бла-бла-бла
			$('.videobox nav').addClass('fixed');
		}
		else {
			$('.videobox nav').removeClass('fixed');
		}
	});
	
	// партнеры и каналы
	$('.carousel').slick({
		infinite: true,
		dots: true,
		fade: false,
		arrows: false,
		pauseOnFocus: false,
		autoplaySpeed: 12000,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll:4,
		autoplay: true,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 3,
				slidesToScroll:3,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll:2,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll:1,
			  }
			}
		]
	});
	
	// Скриншоты
	jQuery("#layerslider").layerSlider({
		responsive: true,
		responsiveUnder: 1280,
		layersContainer: 1280,
		autoStart: false,
		towWaySlideshow: true,
		hoverPrevNext: false,
		navStartStop: false,
		thumbnailNavigation: 'disabled',
		skinsPath: 'layerslider/skins/',
		showCircleTimer: false
	});
	
	// 4 иконки над верхним видео
	jQuery("#parallax").layerSlider({
	});
	
	// высота блока со скриншотами на 100%
	function setHeiHeight() {
    $('#layerslider').css({
        height: $(window).height() + 'px'
    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна
	

	// подмена картинок для Retina дисплеев
	if ('devicePixelRatio' in window && window.devicePixelRatio == 2) {
		var img_to_replace = jQuery('img.replace-2x').get();
		for (var i = 0, l = img_to_replace.length; i < l; i++) {
			var src = img_to_replace[i].src;
			src = src.replace(/\.(png|jpg|gif)+$/i, '@2x.png.$1');
			img_to_replace[i].src = src;
		};
	}
	
	// анимация
	if( window.innerWidth >= 480 ){
		new WOW({
			boxClass: 'wow',
		}).init();
	}
	
});

// прелоадер
$(window).load(function () {
	$(".loader_inner").fadeOut(400);
	$(".loader").delay(300).fadeOut(300);
/*	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");*/
});
