Zepto(function($){
	$('.showList').mousedownon(function() {		
		var index = $(this).index();
		$('#typeList').hide();
		$('nav').show();
		$( $('.qListDiv')[index] ).show();	
		$('footer').hide();
		$('body').scrollTop(0);	
	});

	$('.back').on('touchstart', function() {	
		$('nav').hide();
		$('.qListDiv').hide();
		$('footer').show();
		$('#typeList').show();	
		$('body').scrollTop(0);	
	});

	$('.listTitle').on('touchstart', function() {
		$(this).toggleClass('fcw');
		$(this).next('.hide').toggleClass('show');
		$(this).next('.hide').toggleClass('hide0');
		
	});

});
