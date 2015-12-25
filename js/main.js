Zepto(function($){
	$('.showList').mousedown(function() {		
		var index = $(this).index();
		$('#typeList').hide();
		$('nav').show();
		$( $('.qListDiv')[index] ).show();	
		$('footer').hide();
		$('body').scrollTop(0);	
		console.log("?");
	});

	$('.back').mousedown(function() {	
		$('nav').hide();
		$('.qListDiv').hide();
		$('footer').show();
		$('#typeList').show();	
		$('body').scrollTop(0);	
	});

	$('.listTitle').mousedown(function() {
		$(this).toggleClass('fcw');
		$(this).next('.hide').toggleClass('show');
		$(this).next('.hide').toggleClass('hide0');
		
	});

});
