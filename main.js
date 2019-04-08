var oldS = 0;
var wScroll;
$(window).scroll(function(){
	wScroll = $(this).scrollTop();
	if (wScroll > oldS) {
		increase();
		oldS = wScroll;
	}
	if (wScroll < oldS) {
		decrease();
		oldS = wScroll;
	}
	console.log(wScroll);


})

function increase(){
	if (wScroll >= 100 && wScroll <=150) {
		$('#one').css({
			'transform' : 'scale(2)',
			'opacity' : '1'
		})
	}
	if (wScroll >= 900 && wScroll <= 1050) {
		$('#one').css({
			'transform' : 'scale(1)',
			'opacity' : '0'
		})
	}
	if (wScroll >= 900 && wScroll <= 1050) {
		$('.two').css({
			'transform' : 'translateY(0%)',
			'opacity' : '1'
		})
		$('#two').css({
			'transform' : 'scale(2)',
			'opacity' : '1'
		})
	}
	if (wScroll >= 1700 && wScroll <= 1850) {
		$('#two').css({
			'transform' : 'scale(1)',
			'opacity' : '0'
		})
	}
	if (wScroll >= 1700 && wScroll <= 1850) {
		$('.three').css({
			'transform' : 'translateY(0%)',
			'opacity' : '1'
		})
		$('#three').css({
			'transform' : 'scale(2)',
			'opacity' : '1'
		})
	}
	if (wScroll >= 2500 && wScroll <= 2650) {
		$('#three').css({
			'transform' : 'scale(1)',
			'opacity' : '0'
		})
	}
	if (wScroll >= 2500 && wScroll <= 2650) {
		$('.four').css({
			'transform' : 'translateY(0%)',
			'opacity' : '1'
		})
		$('#four').css({
			'transform' : 'scale(2)',
			'opacity' : '1'
		})
	}
}

function decrease(){
	if (wScroll >= 600 && wScroll <= 750) {
		$('#one').css({
			'transform' : 'scale(2)',
			'opacity' : '1'
		})
	}
	if (wScroll >= 800 && wScroll <= 900) {
		$('#two').css({
			'transform' : 'scale(1)',
			'opacity' : '0'
		})
	}
	if (wScroll >= 1400 && wScroll <= 1550) {
		$('#two').css({
			'transform' : 'scale(2)',
			'opacity' : '1'
		})
	}
	if (wScroll >= 1600 && wScroll <= 1750) {
		$('#three').css({
			'transform' : 'scale(1)',
			'opacity' : '0'
		})
	}
	if (wScroll >= 2200 && wScroll <= 2350) {
		$('#three').css({
			'transform' : 'scale(2)',
			'opacity' : '1'
		})
	}
	if (wScroll >= 800 && wScroll <= 900) {
		$('.two').css({
			'transform' : 'translateY(100%)',
			'opacity' : '0'
		})
	}

	if (wScroll >= 1600 && wScroll <= 1750) {
		$('.three').css({
			'transform' : 'translateY(100%)',
			'opacity' : '0'
		})
	}
	if (wScroll >= 2400 && wScroll <= 2550) {
		$('.four').css({
			'transform' : 'translateY(100%)',
			'opacity' : '0'
		})
	}
	if (wScroll >= 2400 && wScroll <= 2550) {
		$('#four').css({
			'transform' : 'scale(1)',
			'opacity' : '0'
		})
	}
}