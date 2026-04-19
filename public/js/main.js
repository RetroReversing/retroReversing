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
//   Used for the carousel on the homepage
	$('.full-height .carousel-item').each(function () {
// 		$(this).css('height', $(window).height()  - $('header').outerHeight() );
    $(this).css('height', '50vh'  );
  });

// 	$(window).resize(function () {
//     $('.full-height .carousel-item').each(function () {
// 			$(this).css('height', $(window).height()  - $('header').outerHeight() );
//     });
//   });


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

function replaceAll(str, find, replace) {
       return str.replace(new RegExp(find, 'g'), replace);
}

function handle_tab_groups() {
      var rr_tab_groups = $(".rr-tabs");

      rr_tab_groups.each(function loop_tab_group(index, tab_group) {
        var rr_tabs = $(tab_group).find('.rr-tab');

        var li_tabs = rr_tabs.map(function mapTabsToHeaders(i,v) {
          var title = $(v).attr('title');
          var isdefault = $(v).attr('default') === "";
          var classnames = "";
          if (isdefault) {
            classnames = "active"
          }
          var href_title=replaceAll(title,' ','___');
          return '<li><a class="'+classnames+'" href="#/'+href_title+'">'+title+'</a></li>';
        });

        var result_html = li_tabs.toArray().join('');
        $(tab_group).prepend('<ul class="tabs group">'+result_html+'</ul>');

        var tabs =  $(tab_group).find(".tabs li a");

        $(tab_group).find('.rr-tab').hide();
        $(tab_group).find('div[default]').show();

        tabs.click(function() {
          var content = this.hash.replace('/','').replace('#','');
          tabs.removeClass("active");
          $(this).addClass("active");
          $(tab_group).find('.rr-tab').hide();
          var href_content=replaceAll(content,'___',' ');

          $('div[title|="'+href_content+'"]').show();
        });

      });
}

// isInView is used for lazy loading to check if we should load it or not
function isInView(element) {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var elementTop = $(element).offset().top;
    return (elementTop >= scrollTop && elementTop <= scrollTop + windowHeight);
  }

function lazyLoad() {
      var card_images = document.querySelectorAll('.lazy-load');

      // loop over each lazy loadable image
      card_images.forEach(function(content_image) {
        if (!isInView(content_image)) {
          return;
        }
        var image_url = content_image.getAttribute('data-image-full');

          // change the src of the content image to load the new high res photo
          content_image.src = image_url;

        try {
           $(content_image).removeClass("lazy-load");
        } catch (e) {
          console.error("error removing lazy-load class:", e);
        }
      });

    }

function initializeMermaidDiagrams() {
  if (typeof mermaid === "undefined") {
    return;
  }

  var mermaidBlocks = document.querySelectorAll("pre code.language-mermaid, pre code.lang-mermaid");

  mermaidBlocks.forEach(function(codeBlock, index) {
    var pre = codeBlock.parentElement;
    if (!pre || pre.dataset.mermaidProcessed === "true") {
      return;
    }

    var mermaidContainer = document.createElement("div");
    mermaidContainer.className = "mermaid";
    mermaidContainer.textContent = codeBlock.textContent;
    mermaidContainer.id = "mermaid-diagram-" + index;
    pre.replaceWith(mermaidContainer);
  });

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    theme: "default"
  });

  function setupMermaidDiagramZoom() {
    var mermaidContainers = document.querySelectorAll(".mermaid");

    mermaidContainers.forEach(function(container) {
      if (container.dataset.rrMermaidZoomInitialized === "true") {
        return;
      }

      var svg = container.querySelector("svg");
      if (!svg) {
        return;
      }

      container.dataset.rrMermaidZoomInitialized = "true";
      container.dataset.rrMermaidZoom = "1";
      container.classList.add("rr-mermaid-zoom");

      var canvas = document.createElement("div");
      canvas.className = "rr-mermaid-canvas";

      // Mermaid may output other nodes (e.g. <style>) alongside the SVG; keep them together.
      while (container.firstChild) {
        canvas.appendChild(container.firstChild);
      }

      var controls = document.createElement("div");
      controls.className = "rr-mermaid-controls";

      function makeButton(label, className, title) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = className;
        button.textContent = label;
        button.setAttribute("aria-label", title);
        button.title = title;
        return button;
      }

      var zoomInButton = makeButton("+", "rr-mermaid-zoom-in", "Zoom in");
      var zoomOutButton = makeButton("−", "rr-mermaid-zoom-out", "Zoom out");
      var resetButton = makeButton("100%", "rr-mermaid-zoom-reset", "Reset zoom");

      controls.appendChild(zoomOutButton);
      controls.appendChild(resetButton);
      controls.appendChild(zoomInButton);

      container.appendChild(controls);
      container.appendChild(canvas);

      // Re-query after we moved the DOM around.
      svg = canvas.querySelector("svg");
      if (!svg) {
        return;
      }

      function getBaseSize() {
        if (svg.dataset.rrMermaidBaseWidth && svg.dataset.rrMermaidBaseHeight) {
          return {
            width: parseFloat(svg.dataset.rrMermaidBaseWidth),
            height: parseFloat(svg.dataset.rrMermaidBaseHeight)
          };
        }

        var rect = svg.getBoundingClientRect();
        var baseWidth = rect.width;
        var baseHeight = rect.height;

        if ((!baseWidth || !baseHeight) && svg.viewBox && svg.viewBox.baseVal) {
          baseWidth = svg.viewBox.baseVal.width;
          baseHeight = svg.viewBox.baseVal.height;
        }

        // Fallback to something sensible rather than breaking.
        if (!baseWidth) {
          baseWidth = 800;
        }
        if (!baseHeight) {
          baseHeight = 400;
        }

        svg.dataset.rrMermaidBaseWidth = String(baseWidth);
        svg.dataset.rrMermaidBaseHeight = String(baseHeight);

        return {
          width: baseWidth,
          height: baseHeight
        };
      }

      function applyZoom(nextZoom) {
        var zoom = Math.max(0.5, Math.min(4, nextZoom));
        container.dataset.rrMermaidZoom = String(zoom);
        resetButton.textContent = Math.round(zoom * 100) + "%";

        var baseSize = getBaseSize();
        svg.style.width = (baseSize.width * zoom) + "px";
        svg.style.height = (baseSize.height * zoom) + "px";
        svg.style.maxWidth = "none";
      }

      function getZoom() {
        var zoom = parseFloat(container.dataset.rrMermaidZoom || "1");
        return Number.isFinite(zoom) ? zoom : 1;
      }

      zoomInButton.addEventListener("click", function() {
        applyZoom(getZoom() * 1.2);
      });

      zoomOutButton.addEventListener("click", function() {
        applyZoom(getZoom() / 1.2);
      });

      resetButton.addEventListener("click", function() {
        applyZoom(1);
      });

      // Ctrl/⌘ + wheel zoom, double-click reset.
      canvas.addEventListener("wheel", function(event) {
        if (!event.ctrlKey && !event.metaKey) {
          return;
        }

        event.preventDefault();

        var direction = event.deltaY < 0 ? 1 : -1;
        var factor = direction > 0 ? 1.12 : (1 / 1.12);
        applyZoom(getZoom() * factor);
      }, { passive: false });

      canvas.addEventListener("dblclick", function() {
        applyZoom(1);
      });

      // Ensure zoom starts from the actual rendered size (not a 100% CSS-constrained size).
      applyZoom(1);
    });
  }

  if (typeof mermaid.run === "function") {
    Promise.resolve(mermaid.run({
      querySelector: ".mermaid"
    })).then(setupMermaidDiagramZoom).catch(function() {
      // If rendering fails, don't break the rest of the page.
    });
  } else if (typeof mermaid.init === "function") {
    mermaid.init(undefined, document.querySelectorAll(".mermaid"));
    setupMermaidDiagramZoom();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  initializeMermaidDiagrams();
});

  function setupCarousel() {
    var items = 1;
//       if ($(window).width() > 600) {
//         items=2;
//       }

      // Full Width Carousel
      $('.owl-slide-auto-play').owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        items: items
      });

      $('.owl-slide-no-auto').owlCarousel({
        nav: true,
        loop: true,
        autoplay: false,
        items: 1
      });
  }

  function setupDataTables(retryCount) {
    // Table Handling
    try {
          // Make markdown tables have the bootstrap table class to look pretty
          $('table').addClass('table');

          // We only want striped tables if the table has more than one element
          function onlyRowsGreaterThanTwo(index) { return $( "tr", this ).length > 2 }
          $('table').filter(onlyRowsGreaterThanTwo).addClass('table-striped');

          // Only use the fancy table if elements greater than minimum
          function onlyRowsGreaterThanMinimum(index) { return $( "tr", this ).length > 11 }


          $('table').filter(onlyRowsGreaterThanMinimum).DataTable();
    } catch (e) {
      console.error("Exception with table handling:", e, retryCount);
      if (retryCount < 5) {
        // Try again after 10seconds
        setTimeout(setupDataTables.bind(null, retryCount+1), 10000);
      }
    }
    //  End Table Handling

  }

  function generateChangelogs($) {
        $('.rr-version-gen').each(function(index) {
            $(this).replaceWith( `<div>
                <div class="rr-changelog-version">`+$(this).attr('version')+`</div>
                <div class="rr-changelog-date">`+$(this).attr('date')+`</div>
        </div>
            `);
        });

        $('.rr-info-gen').each(function(index) {
          let childText = $(this).text();
          let badge = $(this).attr('badge');
          let description = childText || $(this).attr('desc');
          let locationOfFirstDash = childText.indexOf(' - ');
          if (locationOfFirstDash > 0) {
            badge = childText.substr(0, locationOfFirstDash)
            description = childText.substr(locationOfFirstDash+3) // get everything after the first " - ", plus the three characters that make up the deliminator
          }
          $(this).replaceWith(`<div class="rr-changelog rr-changelog-success">
                        <div class="rr-changelog-badge">`+badge+`</div>
                        <div class="rr-changelog-info">`+description+`</div>
                    </div>`);
        })
     }



    (function($) {
      handle_tab_groups();
    })(jQuery);

    function onScroll() {
      // This is called everytime the user scrolls so make sure not to do anything too heavy here
      lazyLoad();
    }


    (function($) {
      "use strict";

     $(document).ready(function() {
      setupCarousel();
      setupDataTables(0);

      // lightbox
      // $('[data-lightbox]').lightbox();

      // scroll animations
      new WOW().init();

       $(window).scroll(onScroll)

       generateChangelogs($);

      // geopattern
      $(function() {
        $('.geopattern').each(function geoP() {
          $(this).geopattern($(this).attr('data-title'));
        })
      });
      // end geopattern

    // Lazy Load Images
    //     window.addEventListener('load', function() {
      // setTimeout to simulate the delay from a real page load
      setTimeout(lazyLoad, 1000);
    //     });

    window.addEventListener('click', function() {
      // Whenever the user clicks on something like the table page buttons, make sure to load any new images
      setTimeout(lazyLoad, 100);
    });

    }); // end ready function

    })(jQuery);
