const header = $('.header');
let	scrollPrev = 0;

$(window).scroll(function() {
	const scrolled = $(window).scrollTop();

	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}

	scrollPrev = scrolled;
});





