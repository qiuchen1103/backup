Zepto(function($){
	$('.showList').mousedown(function() {	
		var _this = $(this);	
		var index = _this.index();

		_this.addClass('active');

		setTimeout(function() {
			_this.removeClass('active');
		},300);
		setTimeout(function() {
			$('#typeList').hide();
			$('nav').show();
			$( $('.qListDiv')[index] ).show();	
			$('footer').hide();
			$('body').scrollTop(0);	
		},300);

	});

	$('.back').mousedown(function() {	
		$('nav').hide();
		$('.qListDiv').hide();
		$('footer').show();
		$('#typeList').show();	
		$('body').scrollTop(0);	
	});

	var olistTitles = $('.listTitle');
	for (var i = 0; i < olistTitles.length; i++) {
		olistTitles[i].btn = true;
	}

	olistTitles.mousedown(function() {
		
		var _this = $(this);

		// _this.toggleClass('fcw');
		_this.next('.hide').toggleClass('fcw');
		
		if (_this[0].btn) {
			_this.addClass('active');
			setTimeout(function() {
				_this.removeClass('active');
			},100);

			_this.next('.hide').animate({
				maxHeight: '9999px'
			}, 1300, 'ease-in-out');

		} else if (!_this[0].btn) {
			_this.next('.hide').animate({
				maxHeight: '0px'
			}, 500, 'ease-out');

		}
		_this[0].btn = !_this[0].btn;
		
	});

});
