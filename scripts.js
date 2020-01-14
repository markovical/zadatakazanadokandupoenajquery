$('nav#tabovi span').click(function() {
	let tabIndex = $(this).index();

	$('.tab-aktivan').toggleClass('tab-aktivan');
	$(this).toggleClass('tab-aktivan');

	$('#sadrzaj div').not('.sakriveno').toggleClass('sakriveno');
	$(`#sadrzaj div:nth-child(${tabIndex + 1})`).toggleClass('sakriveno');
});

$('#meni-dugme').click(function() {
	$('nav#dropdown').toggleClass('sakriveno');
});