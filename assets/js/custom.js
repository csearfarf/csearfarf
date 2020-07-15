
		AOS.init();
		var $section_features = '';

		var btn = $('#btn-up');

		$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
		});

		btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '1000');
		});



		$(document).ready(function () {
			$(".owl-carousel").owlCarousel({
				items: 3,
				smartSpeed: 750,
				margin: 30,
				dots: true,
				nav: false,
				dotData: false,
				loop: true,
				autoplay: true,
				center:true,
				autoplayTimeout: 7000,
				autoplayHoverPause: true,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 2
					},
					900: {
						items: 3
					}
				}
			});
			
			$(".scrollTo").on('click', function (e) {
				e.preventDefault();
				var target = $(this).attr('href');
				$('html, body').animate({
					scrollTop: ($(target).offset().top - 40)
				}, 1000);
			});
		});