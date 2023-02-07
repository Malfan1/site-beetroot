$('#open-pop-up-login').click( function() {
    $('#pop-up-login-container').fadeToggle();
});


$(document).on('keyup', function(e) {
	if ( e.key == "Escape" ) {
		$( "#pop-up-login-container" ).fadeOut();
	}
});