
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
				$("." + href + " input").val('');
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


	$(".tea__button").click(function() {
		var tea = +$(this).attr("data-tea");
		var value = "0 ₽"
		var value1 = +value.substring(0, value.length - 1);
		console.log(value1);
		var itog = tea + value1 + " ₽"	
		$(".tea__input").val(itog);
	});

	$(".card__eye").click(function() {
		$(this).toggleClass("active")
		$(".card__number").toggleClass("active")
	});
	$(".tea__input").keydown(function() {
		var val = $(".tea__input").val();
		var val1 = +val.substring(0, val.length - 1);
		// var val2 = +val1;
		setTimeout(function() {
			var val = $(".tea__input").val();
			$(this).val(val + " ₽");
		}, 40)
	});
	$(".tea__input").click(function() {
		$(".tea__input").val("");
	});
	$(".tea__delete").click(function() {
		$(".tea__input").val("0 ₽");
	});

	$(".infouser__card").click(function(){
		var el = $(this).find("span") 
	    var $tmp = $("<textarea>");
	    $("body").append($tmp);
	    $tmp.val($(el).text()).select();
	    document.execCommand("copy");
	    $tmp.remove();
	});


	
	
	$(".ymap").each(function(e){
        var ya = this;
        var myMap;
        ymaps.ready(
            function() {
                var x = $(ya).attr("data-x");
                var y = $(ya).attr("data-y");
                    myMap = new ymaps.Map($(ya)[0], {
                        center: [x , y],
                        zoom: 13,
						controls: ['fullscreenControl']						
                    }, {
                        searchControlProvider: 'yandex#search'
                    });
            
                    var myPlacemark = new ymaps.Placemark([x, y], {},
                { iconLayout: 'default#image',
                iconImageHref: 'static/img/content/marker.svg',
                iconImageSize: [37, 37], });    
            
				myMap.geoObjects.add(myPlacemark);

				var ctrlKey = false;
				var ctrlMessVisible = false;
				var timer;
				myMap.behaviors.disable('scrollZoom');
				// myMap.behaviors.disable('scrollZoom');
				myMap.events.add(['wheel', 'mousedown'], function(e) {
					if (e.get('type') == 'wheel') {
						if (!ctrlKey) { // Ctrl не нажат, показываем уведомление
							$('#ymap_ctrl_display').fadeIn(300);
							ctrlMessVisible = true;
							clearTimeout(timer); // Очищаем таймер, чтобы продолжать показывать уведомление
							timer = setTimeout(function() {
								$('#ymap_ctrl_display').fadeOut(300);
								ctrlMessVisible = false;
							}, 1500);
						}
						else { // Ctrl нажат, скрываем сообщение
							$('#ymap_ctrl_display').fadeOut(100);
						}
					}
					if (e.get('type') == 'mousedown' && ctrlMessVisible) { // Скрываем уведомление при клике на карте
						$('#ymap_ctrl_display').fadeOut(100);
					}
				});
				// Обрабатываем нажатие на Ctrl
				$(document).keydown(function(e) {
					if (e.which === 17 && !ctrlKey) { // Ctrl нажат: включаем масштабирование мышью
						ctrlKey = true;
						myMap.behaviors.enable('scrollZoom');
					}
				});
				$(document).keyup(function(e) { // Ctrl не нажат: выключаем масштабирование мышью
					if (e.which === 17) {
						ctrlKey = false;
						myMap.behaviors.disable('scrollZoom');
					}
				});
            }
        );
		
	})

	
	


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


	$('.form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				message: {
					required: true,
				},
				name: {
					required: true,
				},
				nameProd: {
					required: true,	
				},
				check: {
					required: true,
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
						$(".thanx-trigger").trigger("click");
					}
				});
			},  
         });
	 });

	$(".header__open").click(function() {
		$(".header__humb, .header__humb-overlay").addClass("active")
	});

	$(".header__close, .header__humb-overlay").click(function() {
		$(".header__humb, .header__humb-overlay").removeClass("active")
	});

	$('.sign-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				phone: {
					required: true,
					minlength: 16,
				},
				sms: {
					required: true,
				},
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
						location.href = "main.html"
					}
				});
			},  
         });
	 });

	$('.rev-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				rev: {
					required: true,
				},
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
						location.href = "main.html"
					}
				});
			},  
         });
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

	var ctx = document.getElementById("myChart-1");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["1 июн", "2 июн", "3 июн", "4 июн", "5 июн", "6 июн"],
			datasets: [{
				// label: '# of Votes',
				data: [100, 200, 400, 400, 500, 700],
				backgroundColor: [
					'rgba(187, 65, 193, 0.12)',
				],
				borderColor: [
					'rgb(187, 65, 193)',
				],
				pointBackgroundColor: 'rgb(187, 65, 193)',
				pointRadius: 8,
				pointBorderWidth: 3,
				pointBorderColor: "#fff",
			}]
		},
		options: {
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
					
					ticks: {
						callback: function (value, index, values) {
							return (value % 2 === 0) ? value : "";
						},
						beginAtZero:true,
						autoSkip: false,
					}
				}],
				xAxes: [{
					gridLines: {
						drawBorder: false,
					},
				}],
			}
		}
	});

	var ctx = document.getElementById("myChart-2");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["1 июн", "2 июн", "3 июн", "4 июн", "5 июн", "6 июн"],
			datasets: [{
				label: "",
				data: [100, 200, 400, 400, 500, 700],
				backgroundColor: [
					'transparent',
				],
				borderColor: [
					'rgb(187, 65, 193)',
				],
				pointBackgroundColor: 'rgb(187, 65, 193)',
				pointRadius: 8,
				pointBorderWidth: 3,
				pointBorderColor: "#fff",
			}]
		},
		options: {
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
					
					ticks: {
						callback: function (value, index, values) {
							return (value % 2 === 0) ? value : "";
						},
						beginAtZero:true,
						autoSkip: false,
					}
				}],
				xAxes: [{
					gridLines: {
						drawBorder: false,
					},
				}],
			}
		}
	});

	var ctx = document.getElementById("myChart-4");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["1 июн", "2 июн", "3 июн", "4 июн", "5 июн", "6 июн", "7 июн"],
			datasets: [{
				label: "",
				data: [100, 200, 130, 400, 200, 500, 700],
				backgroundColor: [
					'rgba(187, 65, 193, 0.12)',
				],
				borderColor: [
					'rgb(187, 65, 193)',
				],
				pointBackgroundColor: 'rgb(187, 65, 193)',
				pointRadius: 8,
				pointBorderWidth: 3,
				pointBorderColor: "#fff",
			}]
		},
		options: {
			legend: {
				display: false
			},
			elements: {
				line: {
					tension: 0
				}
			},
			scales: {
				yAxes: [{
					
					ticks: {
						callback: function (value, index, values) {
							return (value % 2 === 0) ? value : "";
						},
						beginAtZero:true,
						autoSkip: false,
					}
				}],
				xAxes: [{
					gridLines: {
						drawBorder: false,
					},
				}],
			}
		}
	});

	var ctx = document.getElementById("myChart-3");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["2:00", "5:00", "8:00", "11:00", "17:00", "20:00", "23:00"],
			datasets: [{
				label: "",
				data: [
					100,
					 200,
					 400,
					 400,
					 500,
					 400,
					 500,
					 400,
					 500,
					 400,
					 500,
					 400,
					 500,
					 400,
					 500,
					 700
				],
				backgroundColor: [
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)',
					'rgb(187, 65, 193)'
				],
				borderColor: [
				],
				pointBackgroundColor: 'rgb(187, 65, 193)',
				pointRadius: 8,
				pointBorderWidth: 3,
				pointBorderColor: "#fff",
			}]
		},
		options: {
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
						
					ticks: {
						callback: function (value, index, values) {
							return (value % 2 === 0) ? value : "";
						},
						beginAtZero:true,
						autoSkip: false,
					}
				}],
				xAxes: [{
					gridLines: {
						drawBorder: false,
					},
				}],
			}
		}
	});
	
	

	var data = [
		{ y: '2014', a: 50,},
		{ y: '2015', a: 65, },
		{ y: '2016', a: 50, },
		{ y: '2017', a: 75, },
		{ y: '2018', a: 80, },
		{ y: '2019', a: 90, },
		{ y: '2020', a: 100,},
		{ y: '2021', a: 115,},
		{ y: '2022', a: 120,},
		{ y: '2023', a: 145,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
		{ y: '2024', a: 160,},
	  ],
	  config = {
		data: data,
		labels: ['Total Income', 'Total Outcome'],
		fillOpacity: 0.12,
		hideHover: 'auto',
		behaveLikeLine: true,
		resize: true,
		pointFillColors:['#00CEF9'],
		pointStrokeColors: ['white'],
		lineColors:['#00CEF9'],
		xkey: 'y',
		ykeys: ['a'],
		labels: ['Value']
	};
  config.element = 'area-chart';
  Morris.Area(config);
  config.element = 'area-chart-1';
  Morris.Area(config);
  config.element = 'bar-chart';
  Morris.Bar(config);
  config.element = 'stacked';
  config.stacked = true;
  Morris.Bar(config);
  Morris.Donut({
	element: 'pie-chart',
	data: [
	  {label: "Friends", value: 30},
	  {label: "Allies", value: 15},
	  {label: "Enemies", value: 45},
	  {label: "Neutral", value: 10}
	]
  });
	 
})