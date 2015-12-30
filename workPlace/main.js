Zepto(function($){

	$('.showList').tap(function() {	

		var _this = $(this);	
		var index = _this.index() / 2;

		_this.addClass('active');
		setTimeout(function() {
			_this.removeClass('active');
			$('#typeList').hide();
			$('footer').hide();						
		},300);

		setTimeout(function() {
			$('body').scrollTop(0);		
		},330);

		setTimeout(function() {	
			$('nav').show();
			$( $('.qList')[index] ).show();		
		},360);

		console.log(index);

	});

	$('.back').tap(function() {	
		$('nav').hide();
		$('.qList').hide();

		setTimeout(function() {
			$('body').scrollTop(0);		
		},30);

		setTimeout(function() {
			$('footer').show();
			$('#typeList').show();	
		},60);	
		
	});

	var olistTitles = $('.listTitle');
	for (var i = 0; i < olistTitles.length; i++) {
		olistTitles[i].btn = true;
	}

	olistTitles.tap(function() {
		
		var _this = $(this);

		// _this.toggleClass('show');
		_this.next('.hide').toggleClass('show');
		
		if (_this[0].btn) {
			_this.addClass('active');
			setTimeout(function() {
				_this.removeClass('active');
			},100);

			// _this.next('.hide').animate({
			// 	maxHeight: '9999px'
			// }, 1300, 'ease-in-out');

		} else if (!_this[0].btn) {
			// _this.next('.hide').animate({
			// 	maxHeight: '0px'
			// }, 500, 'ease-out');

		}
		_this[0].btn = !_this[0].btn;
		
	});

});
