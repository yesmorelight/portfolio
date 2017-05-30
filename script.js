$(document).ready(function() {
	$('.menu').hide();
	$('#ham').click(function(){
		$('.menu').slideToggle(400);
	});
});