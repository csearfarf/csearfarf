
AOS.init();
var $section_features = '';

var btn = $('#btn-up');

$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, '1000');
});



$(document).ready(function () {

	const contactForm = document.getElementById('js-contact-form');
	if (contactForm) {
		const serialize = function (form) {
			var field,
				l,
				s = [];

			if (typeof form == 'object' && form.nodeName == 'FORM') {
				var len = form.elements.length;

				for (var i = 0; i < len; i++) {
					field = form.elements[i];
					if (
						field.name &&
						!field.disabled &&
						field.type != 'button' &&
						field.type != 'file' &&
						field.type != 'hidden' &&
						field.type != 'reset' &&
						field.type != 'submit'
					) {
						if (field.type == 'select-multiple') {
							l = form.elements[i].options.length;

							for (var j = 0; j < l; j++) {
								if (field.options[j].selected) {
									s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.options[j].value);
								}
							}
						} else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
							s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value);
						}
					}
				}
			}
			return s.join('&').replace(/%20/g, '+');
		};
		contactForm.addEventListener('submit', (e) => {
			e.preventDefault();

			const theForm = e.currentTarget;
			const formData = 'form-name=' + theForm.name + '&' + serialize(theForm);
			const options = {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: formData
			};

			fetch('/', options)
				.then(function (response) {
					window.location.assign(theForm.action);
				})
				.catch(function (error) {
					console.log(error);
				});
		});
	}





	$(".owl-carousel").owlCarousel({
		items: 3,
		smartSpeed: 750,
		margin: 30,
		dots: true,
		nav: false,
		dotData: false,
		loop: true,
		autoplay: true,
		center: true,
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