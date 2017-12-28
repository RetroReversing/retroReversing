(function($) {
	"use strict";

	// Tooltips
  // ======================
	$("[data-toggle='tooltip']").tooltip({
		container: "body"
	});


	// Popovers
  // ======================
	$("[data-toggle='popover']").popover();


	// Sticky Sections
  // ======================
  if ($.fn.sticky) {
		$('section[data-fixed="true"]').sticky({ topSpacing: $('#header').outerHeight(), zIndex: 1039 }).on('sticky-start', function() { $('#header').addClass('no-shadow'); }).on('sticky-end', function() { $('#header').removeClass('no-shadow'); });
  }

	$(window).resize(function() {
    $('.sticky-wrapper').each(function() {
      $(this).css('min-height', $(this).children().outerHeight() );
    });
  });


	// Fixed Navigation
  // ======================
	$(window).scroll(function(){
  	if ($(this).scrollTop() > 40) {
    	$('body').addClass('header-scroll');
    } else {
			$('body').removeClass('header-scroll');
    }
  });


	// Responsive Navbar
  // ======================
	// Toggle Navbar
	$(".navbar-toggle").click(function () {
		$('body').toggleClass('navbar-open');
		return false;
	});

	// Nav Responsive
	$('#header .navbar-left .nav').clone().prependTo("body").addClass('nav-responsive');

	// Nav Responsive
	$('.nav-responsive .has-dropdown > a').click(function() {
		$(this).parent().toggleClass('open');
		return false;
	});


	// Search Bar
  // ======================
	// Toggle Search
	$("[data-toggle='search']").click(function () {
		$('body').toggleClass('navbar-search-open');
		return false;
	});

	// Close Search
	$(".navbar-search .close").click(function () {
		$('body').removeClass('navbar-search-open');
		return false;
	});


	// Nav Dropdown Open
	// ======================
	$('#header .has-dropdown').hover(function() {
		$(this).addClass('open');
	}, function() {
		$(this).removeClass('open');
	});


	// Progress Bars
  // ======================
	setTimeout(function(){
		$('.progress-loaded .progress-bar').each(function() {
			var me = $(this);
			var perc = me.attr("aria-valuenow");
			var current_perc = 0;
			var progress = setInterval(function() {
				if (current_perc>=perc) {
					clearInterval(progress);
				} else {
					current_perc +=1;
					me.css('width', (current_perc)+'%');
				}
			}, 0);
		});
	},0);


	// Carousel
  // ======================
	// Ken Burns effect
	$('.item-active').removeClass('item-active');

	// Animated Carousel
	function slideranimation( elems ) {
		var animEndEv = 'webkitAnimationEnd animationend';
		elems.each(function () {
			var $this = $(this),
			$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	var $fullCarousel = $('.carousel-animated'),
	$firstAnimatingElems = $fullCarousel.find('.carousel-item:first').find("[data-animation ^= 'animated']");
	slideranimation($firstAnimatingElems);
	$fullCarousel.carousel('pause');

	$fullCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		slideranimation($animatingElems);
	});

	// Full Height
	$('.full-height .carousel-item').each(function () {
		$(this).css('height', $(window).height()  - $('header').outerHeight() );
  });

	$(window).resize(function () {
    $('.full-height .carousel-item').each(function () {
			$(this).css('height', $(window).height()  - $('header').outerHeight() );
    });
  });


	// Embed Player
  // ======================
	$(".embed-responsive i").click(function() {
		$(this).parent().find('.video-play-icon').addClass("animated fadeOut");
    $(this).parent().parent().find('.video-caption').addClass("animated fadeOut");
		$(this).parent().parent().find('img').addClass("animated fadeOut");
    $(this).parent().parent().parent().addClass('played');
		var id = $(this).parent().parent().parent().data("src");
    $(this).parent().append('<iframe class="embed-responsive-item" src="' + id + '" allowfullscreen></iframe>');
  });


	// Model
  // ======================
	$('.modal').on('show.bs.modal', function() {
	  $(this).show();
	  setModalMaxHeight(this);
	});

	$(window).resize(function() {
	  if ($('.modal.show').length != 0) {
	    setModalMaxHeight($('.modal.show'));
	  }
	});


	// Check All
	// ======================
	$(".table thead input:checkbox").click(function(){
    $('input:checkbox').not(this).prop('checked', this.checked);
	});
})(window.jQuery);

function setModalMaxHeight(element) {
	this.$element     = $(element);
	this.$content     = this.$element.find('.modal-content');
	var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
	var dialogMargin  = $(window).width() < 768 ? 20 : 60;
	var contentHeight = $(window).height() - (dialogMargin + borderWidth);
	var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
	var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
	var maxHeight     = contentHeight - (headerHeight + footerHeight);

	this.$content.css({
		'overflow': 'hidden'
	});

	this.$element.find('.modal-body').css({
		'max-height': maxHeight,
		'overflow-y': 'auto'
	});
}
