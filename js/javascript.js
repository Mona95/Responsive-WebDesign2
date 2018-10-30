$(document).ready(function(){

	$('.flexslider').flexslider({
		animation: "slide",
		start:function(slider){
			$('body').removeClass('loading');
		}
	});

	 var btn = $('#button');

  $(window).scroll(function() {
  		 var scrollTrigger = 100;
	 var scrollTop = $(window).scrollTop();
    if (scrollTop > scrollTrigger) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '700');
  });
});


