$(document).ready(function(){
	var $div = $('<div>');
	var $button1 = $('<button>');
	var $button2 = $('<button>');
	var $Generate = $('#Generate');
	var $counter = 0;

	//when Generate is clicked do this...
	$Generate.on('click', function(){
		$counter++;
		$div.text('Line #: ' + $counter);
		$button1.text('Change Color');
		$button2.text('Remove');
		$button1.attr('class', 'js-change-color');
		$button2.attr('class', 'js-remove');
		$('body').append($div);
		$div.append($button1, $button2);
	});

	//when Change color is clicked do this
	$div.on('click', '.js-change-color', function(e){
		$div.toggleClass('change-color');
		e.preventDefault();
	});

	//when Remove is clicked do this
	$div.on('click', '.js-remove', function(e){
		$(this).parent().remove();
		e.preventDefault();
	});

});