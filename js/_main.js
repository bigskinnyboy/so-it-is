// Modified http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
// Only fires on body class (working off strictly WordPress body_class)

var ExampleSite = {
  // All pages
  common: {
    init: function() {

			// --------------------------------------------------------------------------------------
			// Mobile navigation toggle
			//
			// --------------------------------------------------------------------------------------

			function nav_toggle() {

				var mobile_link = $('.navbar-toggle');
				var nav = $(mobile_link).data('target');

				// .on() requires at least jQuery 1.7.
				$(mobile_link).on('click', function(e){
					e.preventDefault();
					$(nav).toggleClass('expanded');
				});

			}

			//nav_toggle();

    },
    finalize: function() { }
  },
  // Home page
  home: {
    init: function() {

    }
  },
  // About page
  about: {
    init: function() {
      // JS here
    }
  }
};

var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = ExampleSite;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {

    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });

    UTIL.fire('common', 'finalize');
  }
};

$(document).ready(UTIL.loadEvents);