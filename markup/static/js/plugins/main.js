
$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	// forms();


	// let lazyImages = [...document.querySelectorAll('img')]
	// let inAdvance = 300
	
	// function lazyLoad() {
	// 	lazyImages.forEach(image => {
	// 		if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
	// 			image.src = image.dataset.src
	// 			image.onload = () => image.classList.add('loaded')
	// 		}
	// 	})
	
	// }
	// lazyLoad();

	var swiper = new Swiper('.-slider', {
		spaceBetween: 30,
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
		pagination: {
			el: '.first-pagination',
		},
	});

	var swiper = new Swiper('.tea-button-slider', {
		slidesPerView: "auto",
		spaceBetween: 8,
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
		pagination: {
			el: '.first-pagination',
		},
	});

	$(".tabs").each(function() {
		$(document).on('click', '.tab', function(e) {
			e.preventDefault();
			console.log(0302003320);
			var it = $(this);
			var href = it.attr("href");
			$(".tab").removeClass("active");
			it.addClass("active");
			$(".cont-tab").removeClass("active");
			$("." + href).each(function () {
				$("." + href).addClass('active');
				$("." + href + " input").removeClass("is-focus");
			});
		});
	});	

	$(".cinfo__row").each(function() {
		var line = $(this).attr("data-line");
		$(this).find(".cinfo__back-line").css("width", line + "%")
	});

	


	$(document).ready(function() {
		$('select').niceSelect();
	});

	$(".lightgallery").lightGallery();

	$('.phone-mask').mask("+7 000 000 00 00");
	$('.card-mask').mask("0000 0000 0000 0000");
	$('.date-mask').mask("00/00");
	$('.cvc-mask').mask("000");
	$('.sms-mask').mask("000");

	$(document).on('click', '.number-input-container .number-increment', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            max = parseInt($input.attr('max')),
            step = parseInt($input.attr('step'));
		let temp = val + step;
		$input.val(temp <= max ? temp : max);
		$(this).closest(".number-input-container").find(".number-result").text($input.val());
    });
    $(document).on('click', '.number-input-container .number-decrement', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            min = parseInt($input.attr('min')),
            step = parseInt($input.attr('step'));
		let temp = val - step;
		$input.val(temp >= min ? temp : min);
		$(this).closest(".number-input-container").find(".number-result").text($input.val());
    });
	
	if ($('#slider').length > 0) {
		var slider = document.getElementById('slider');
		var rangeMin = +$("#slider").attr("data-min")
		var rangeMax = +$("#slider").attr("data-max")

		var valMin = +$(".input-min").val();
		var valMax = +$(".input-max").val();
		
		var rangeStep = $("#slider").data("step")
		$(".output-left").text(parseFloat(valMin).toFixed(0));
		$(".output-right").text(parseFloat(valMax).toFixed(0));
		// $(".input-min").text(parseFloat(rangeMin).toFixed(0));
		noUiSlider.create(slider, {
			start: [valMin, valMax],
			connect: true,
			step: rangeStep,
			range: {
				'min': rangeMin,
				'max': rangeMax
			},
			format: wNumb({
				decimals: 0
			})
			
		});	
		$(".filter__open").click(function() {
			$(".filter__container").addClass("active");
			$(".overlay").addClass("visible")
		});
		$(".filter__close-mobile, .overlay").click(function() {
			$(".filter__container").removeClass("active");
			$(".overlay").removeClass("visible")
		});
		// $(".noUi-handle-touch-area").mousemove(function() {
		// 	var val = $(this).find("span").text();
		// 	$(".output-left").text(parseFloat(val).toFixed(0));
		// 	$(".input-min").val(parseFloat(val).toFixed(0));
		// });
		// $(".noUi-handle-touch-area").mousemove(function() {
		// 	var val = $(this).find("span").text();
		// 	$(".output-right").text(parseFloat(val).toFixed(0));
		// 	$(".input-max").val(parseFloat(val).toFixed(0));
		// });
		slider.noUiSlider.on('slide', function () { 
			$(".noUi-handle-lower").each(function() {
				var val = +$(this).find("span").text();
				$(this).find("span").text(val.toFixed(0))
				$(".filter-output-min").text(val.toFixed(0));
			});
		});
		slider.noUiSlider.on('slide', function () { 
			$(".noUi-handle-upper").each(function() {
				var val = +$(this).find("span").text();
				$(this).find("span").text(val.toFixed(0))
				$(".filter-output-max").text(val.toFixed(0));
			});
		});
	}


	

	$(".card__eye").click(function() {
		$(this).toggleClass("active")
		$(".card__number").toggleClass("active")
	});
	
	$(".tea__button").click(function() {
		var tea = +$(this).attr("data-tea");
		var value = +$(".tea__input").val();
		// var value1 = +value.substring(0, value.length - 1);
		var itog = tea + value	
		$(".tea__input").val(itog);
		$(".tea__input span").text(itog);
	});

	$(".card__eye").click(function() {
		$(this).toggleClass("active")
		$(".card__number").toggleClass("active")
	});
	$(".tea__input").keyup(function() {
		var val = $(".tea__input").val();
		$(".tea__input span").text(val);
	});
	$(".tea__input").focus(function() {
		$(".tea__input").val("");
		$(".tea__input span").text("");
	});
	// $(".tea__input").click(function() {
	// 	$(".tea__input").val("");
	// 	$("div.tea__input span").text("");
	// });
	$(".tea__delete").click(function() {
		$(".tea__input").val("0");
		$("div.tea__input span").text("0");
	});

    $(".rating2").click(function() {
		$(".rating-star").addClass("active")
        $(".rating-hide").addClass("active");
	});

	$(".infouser__card").click(function(){
		var el = $(this).find("span") 
	    var $tmp = $("<textarea>");
	    $("body").append($tmp);
	    $tmp.val($(el).text()).select();
	    document.execCommand("copy");
	    $tmp.remove();
	});



	
	setInterval(function() {
		if ($("input.tea__input").is(":focus")) {
			$("input.tea__input").addClass("active")
		} else {
			$("input.tea__input").removeClass("active")
		}
		if ($("input.tea__input").val() == "" || $("input.tea__input").val() == "0") {
			$("input.tea__input").removeClass("active")
		} else {
			$("input.tea__input").addClass("active")
		}
	}, 100);
	

	$(".rating2").click(function() {
		$(".rating-star").addClass("active")
        $(".rating-hide").addClass("active");
	});	
	


	$(".collapsible-body").each(function() {
		var height = $(this).height();
		$(this).css("height", 0);
		$(this).attr("data-height", height)
	});

	$(".collapsible-header").click(function() {
		var body = $(this).next(".collapsible-body");
		var header = $(this);
		if(header.hasClass("active")) {
			header.removeClass("active");
			var height = body.height();
			// body.attr("data-height", height);
			body.height(0);
			body.removeClass("active");
		} else {

			// // $(".collapsible-header").removeClass("active");
			// // var height = body.height();
			// // $(".collapsible-body").attr("data-height", height);
			// // $(".collapsible-body").height(0);
			// // $(".collapsible-body").removeClass("active");
			
			// header.addClass("active");
			// var height = body.attr("data-height");
			// body.height(height);

			$(".collapsible-header").removeClass("active");
				var height = body.height();
				$(".collapsible-body").height(0);
				$(".collapsible-body").removeClass("active");
				header.addClass("active");
				var height = body.attr("data-height");
				body.height(height);
				console.log("21919921")
		}
	});




	$(".header__open").click(function() {
		$(".header__humb, .header__humb-overlay").addClass("active")
	});

	$(".header__close, .header__humb-overlay").click(function() {
		$(".header__humb, .header__humb-overlay").removeClass("active")
	});


	$('body').on('click','[data-popup]',function(e) { //Вызов попапов
    	e.preventDefault();
    	var popup = $(this).data('popup');
    	var width = $('.blur').prop('scrollWidth');
    	$('html').addClass('no-scroll');
    	$('body').css('width',width);
    	$('.blur').addClass('active');
		$('.popup').removeClass('active');
    	$('.popup-'+popup).addClass('active');
    });
    $('body').on('mousedown','.blur',function(e) { //Закрытие попапов по .blur
    	if (this == e.target) {
    		$('.popup').removeClass('active');
    		$('html').removeClass('no-scroll');
    		$('body').css('width','auto');
			$('.blur').removeClass('active');
			$('.popup').each(function() {
				$(this).find('input[type=text],input[type=mail],textarea').val('');
				$(this).find('input[type=checkbox]').prop('checked', false);
				$(this).find('.active').removeClass('active');
			});
			$(".header__right").removeClass("active");
			$(".catalog__sidebar-container").removeClass('active');

    	}
	});
    $('body').on('click','.popup__close',function(e) { //Закрытие попапов по .popup__close
		$('.popup').removeClass('active');
		$('html').removeClass('no-scroll');
		$('body').css('width','auto');
		$('.blur').removeClass('active');
		$('.popup').each(function() {
			$(this).find('input[type=text],input[type=mail],textarea').val('');
			$(this).find('input[type=checkbox]').prop('checked', false);
			$(this).find('.active').removeClass('active');
		});
	});


	$(".m-bg-cont").each(function() {
		var img = $(this).find("img:first-of-type").attr("src");
		$(this).css("background-image", "url(" + img + ")");
	});

	setTimeout(function() {
		var datepicker = $("#ui-datepicker-div").remove();
	
		$(".selected_date").append(datepicker);
	}, 600);


	
	 
})