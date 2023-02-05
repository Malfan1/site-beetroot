$('#open-pop-up-login').click( function() {
    $('#pop-up-login-container').fadeToggle();
});


/* $(document).mouseup( function(e){ // событие клика по веб-документу
    var div = $( "#pop-up-login-container" ); // тут указываем ID элемента
    if ( !div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
        div.fadeOut(); // скрываем его
    }
}); */

$(document).on('keyup', function(e) {
	if ( e.key == "Escape" ) {
		$( "#pop-up-login-container" ).fadeOut();
	}
});