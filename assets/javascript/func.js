$( document ).ready(function() {
  $('#colors').change(function() {
    $('#my-button').data('item-custom3-value', $(this).val());
});  


$(document).ready(function() {
      $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });
      $("#toTop").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
  });

    });

$(document).ready(function() {

  $('input[name="oozer-filter"]').click(function() {
    $("#oozer-list").oozer('filter', $(this).val());
  });

  $('#oozer-list').oozer()
    .bind('beforeFilter.oozer', function(e) {
      $('input[name="oozer-filter"]').each(function() { 
        if (this.getAttribute('value') == e.oozer.filterFor) {
          this.checked = true;
        }
      });
    });
});


$( document ).ready(function() {
  (function($) {
    'use strict';
    
    var $document = $(document);
    var $body  = $('body');
    var $roots = $('html').add($body);
    var cache  = {};

    $.modal = function(settings) {

        function Modal() {
            var modal = this;
            var modalCreated = false;
            modal.isActive = false;

            var config = $.extend({
                content: '', // content to show initial
                contentUrl: null, // content from an external url (ajax-loaded)
                useCache: true, // don't repeat ajax-load every time
                youtubeId: null, // show youtube-iframe
                class: '', // custom class for modal
                closeBtn: true, // show x-close-btn
                layerClose: true, // modal closes when layer is clicked
                closingSelectors: null, // custom selectors for elements to close modal
                showOnInit: true, // show modal when created
                fadeInDuration: 400, // how fast modal fades in
                fadeOutDuration: 400, // how fast modal fades out
                beforeModalOpen: null, // callback before modal appears - returns modal
                afterModalOpen: null, // callback after modal appears - returns modal
                beforeModalClose: null, // callback before modal disappears - returns modal
                afterModalClose: null // callback after modal disappears - returns modal
            }, settings);

            var init = function() {
                if (config.showOnInit) modal.open();
            };

            var createModal = function() {
                var closingX = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="12" height="12"><polygon fill="currentColor" points="96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48 "/></svg>';
                
                var modalClass = 'modal ' + config.class;
                if (config.youtubeId) {
                    modalClass = modalClass + ' modal-youtube';
                }

                modal.$wrapper = $('<div>', {
                    class: 'modal-wrapper'
                });

                modal.$layer = $('<div>', {
                    class: 'modal-layer'
                });

                modal.$modal = $('<div>', {
                    class: modalClass
                });

                if (config.closeBtn) {
                    modal.$closeBtn = $('<button>', {
                        class: 'modal-close-btn' 
                    }).html(closingX);

                    modal.$modal.append(modal.$closeBtn);
                }

                modal.$content = $('<div>', {
                    class: 'modal-content'
                }).html(config.content);

                modal.$modal.append(modal.$content);
                modal.$wrapper.append(modal.$layer);
                modal.$wrapper.append(modal.$modal);

                modal.$wrapper.hide();

                if (config.contentUrl) loadExternal();
                if (config.youtubeId) loadYoutubeVideo();
                modalCreated = true;
            };

            modal.updateContent = function(content) {
                modal.$content.html(content);
            };

            modal.open = function() {
                if (!modalCreated) createModal();

                if (typeof config.beforeModalOpen === 'function') config.beforeModalOpen(modal);
                appendToBody();
                enableRootsActive();
                modal.$wrapper.fadeIn(config.fadeInDuration ,function() {
                    modal.isActive = true;
                    if (typeof config.afterModalOpen === 'function') config.afterModalOpen(modal);
                });
            };

            modal.close = function() {
                if (typeof config.beforeModalClose === 'function') config.beforeModalClose(modal);
                modal.$wrapper.fadeOut(config.fadeOutDuration, function() {
                    removeFromBody();
                    disableRootsActive();
                    modal.isActive = false;
                    if (typeof config.afterModalClose === 'function') config.afterModalClose(modal);
                });
            };

            var bindClose = function() {
                if (config.closeBtn) modal.$closeBtn.click(modal.close);
                if (config.layerClose) modal.$layer.click(modal.close);
                if (config.closingSelectors) modal.$modal.on('click', config.closingSelectors.toString(), modal.close);
            };

            var offset = 0;

            var enableRootsActive = function() {
                offset = $document.scrollTop();
                $roots.css('top', (-offset) + 'px')
                      .addClass('modal-active');
            };

            var disableRootsActive = function() {
                $roots.css('top', '')
                      .removeClass('modal-active')
                      .scrollTop(offset);
            };

            var appendToBody = function() {
                $body.append(modal.$wrapper);
                bindClose();
            };

            var removeFromBody = function() {
                modal.$wrapper.remove();
            };

            var loadYoutubeVideo = function() {
                var $iframe = $('<iframe>', {
                    css: {
                        width: '100%',
                        height: '100%',
                        display: 'block'
                    },
                    src: 'https://www.youtube.com/embed/' + config.youtubeId,
                    frameborder: 0,
                    allowfullscreen: 'allowfullscreen'
                });

                modal.updateContent($iframe);
            };

            var loadExternal = function() {
                if (config.useCache && cache[config.contentUrl]) {
                    var cachedContent = cache[config.contentUrl];
                    modal.updateContent(cachedContent);
                } else {
                    $.get(config.contentUrl, function(response) {
                        var ajaxContent = response;
                        modal.updateContent(ajaxContent);
                        cache[config.contentUrl] = ajaxContent;
                    }).fail(function() {
                        console.log('Ajax failed - wrong URL?');
                    });
                }
            };

            init();

            return modal;
        }

        return new Modal();
    };

})(jQuery);

var demoModal = $.modal({
   content: $('#demo-modal-content'),
    class: 'demo-modal',
   closingSelectors: ['.modal-close']
});

$('#fadePopup').click(function() {
    demoModal.open();
})


  $(".productss").click(function () {
    $(".sublist").toggleClass("show");
  });
  $(".minusarrow").click(function() {
    $(".basic").toggleClass("nobasic")
    $(".minusarrow").toggleClass("hideminus")
    $(".plusarrow").toggleClass("showplus")
  });
  $(".plusarrow").click(function() {
    $(".basic").toggleClass("nobasic")
    $(".minusarrow").toggleClass("hideminus")
    $(".plusarrow").toggleClass("showplus")
  });
  $(".menuscores").click(function() {
    $(".maiscoresdiv").toggleClass("nobasic")
    $(".menuscores").toggleClass("hideminus")
    $(".maiscores").toggleClass("showplus")
  });
  $(".maiscores").click(function() {
    $(".maiscoresdiv").toggleClass("nobasic")
    $(".menuscores").toggleClass("hideminus")
    $(".maiscores").toggleClass("showplus")
  });
  $(".menosestacoes").click(function() {
    $(".estacoes").toggleClass("nobasic")
    $(".menosestacoes").toggleClass("hideminus")
    $(".maisestacoes").toggleClass("showplus")
  });
  $(".maisestacoes").click(function() {
    $(".estacoes").toggleClass("nobasic")
    $(".menosestacoes").toggleClass("hideminus")
    $(".maisestacoes").toggleClass("showplus")
  });
  $(".hamb").click(function () {
    $(".mobi").toggleClass("displaymobi");
  });
    $(".productsss").click(function () {
      $(".crash").toggleClass("crashshow");
  });
    $(".order").click(function () {
      $(".upprice").toggleClass("upriceshow");
  });
  $(".filtercontainer").click(function () {
    $(".oofilter").toggleClass("oofiltershow");
  });
  $(".sortcontainer").click(function () {
    $(".oosort").toggleClass("oofiltershow");
  });


  $(".productimage").mouseover(function () {
    $(this).attr('src', $(this).data("hover"));
  }).mouseout(function () {
    $(this).attr('src', $(this).data("src"));
  });
  $('#my-quantity').change(function() {
    $('#my-button').data('item-quantity', $(this).val());
  });
  $('#my-size').change(function() {
    $('#my-button').data('item-custom2-value', $(this).val());
  });

  $('.pagination').pagination({
    itemsToPaginate: ".prod",
    activeClass: 'active',
    itemsPerPage: 12
  });
  $('#ckFilter').ckFilter({
    reset: true,
    multiple: false,
    animation: true,
  });
});


/*
 * We trigger the factory() function is different
 * ways to support modular JavaScript libraries. See
 * the 'Wrapping Up' section of the tutorial for
 * more information productimage
 *
 */
;(function(factory){
  
  if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
      module.exports = factory(require('jquery'));
  } else {
      factory(jQuery);
  }

})(function($){
  
  /*
   * We define Zippy as a variable of type ‘function’. 
   * Here, we use an anonymous function to ensure 
   * that the logic inside the function is executed immediately. 
   *
   */
  var Zippy = (function(element, settings){
    
    var instanceUid = 0;
    
    /*
     * The constructor function for Zippy
     *
     */
    function _Zippy(element, settings){
      this.defaults = {
        slideDuration: '3000',
        speed: 500,
        arrowRight: '.arrow-right',
        arrowLeft: '.arrow-left'
      };
      
      // We create a new property to hold our default settings after they
      // have been merged with user supplied settings
      this.settings = $.extend({},this,this.defaults,settings);
      
      // This object holds values that will change as the plugin operates
      this.initials = {
        currSlide : 0,
        $currSlide: null,
        totalSlides : false,
        csstransitions: false
      };
      
      // Attaches the properties of this.initials as direct properties of Zippy
      $.extend(this,this.initials);
      
      // Here we'll hold a reference to the DOM element passed in
      // by the $.each function when this plugin was instantiated
      this.$el = $(element);
      
      // Ensure that the value of 'this' always references Zippy
      this.changeSlide = $.proxy(this.changeSlide,this);
      
      // We'll call our initiator function to get things rolling!
      this.init();
      
      // A little bit of metadata about the instantiated object
      // This property will be incremented everytime a new Zippy carousel is created
     // It provides each carousel with a unique ID
      this.instanceUid = instanceUid++;
    }
    
    return _Zippy;
  
  })();
  
  /**
   * Called once per instance
   * Calls starter methods and associate the '.zippy-carousel' class
   * @params void
   * @returns void
   *
   */
   Zippy.prototype.init = function(){
    //Test to see if cssanimations are available
    this.csstransitionsTest();
    // Add a class so we can style our carousel
    this.$el.addClass('zippy-carousel');
    // Build out any DOM elements needed for the plugin to run
    // Eg, we'll create an indicator dot for every slide in the carousel
    this.build();
    // Eg. Let the user click next/prev arrows or indicator dots
    this.events();
    // Bind any events we'll need for the carousel to function
    this.activate();
    // Start the timer loop to control progression to the next slide
    this.initTimer();
  };
  
  /**
   * Appropriated out of Modernizr v2.8.3
   * Creates a new DOM element and tests existence of properties on it's
   * Style object to see if CSSTransitions are available
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.csstransitionsTest = function(){
    var elem = document.createElement('modernizr');
    //A list of properties to test for
    var props = ["transition","WebkitTransition","MozTransition","OTransition","msTransition"];
    //Iterate through our new element's Style property to see if these properties exist
    for ( var i in props ) {
      var prop = props[i];
      var result = elem.style[prop] !== undefined ? prop : false;
      if (result){
        this.csstransitions = result;
        break;
      } 
    } 
  };
  
  /**
   * Add the CSSTransition duration to the DOM Object's Style property
   * We trigger this function just before we want the slides to animate
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.addCSSDuration = function(){
    var _ = this;
    this.$el.find('.slide').each(function(){
      this.style[_.csstransitions+'Duration'] = _.settings.speed+'ms';
    });
  }
  
  /**
   * Remove the CSSTransition duration from the DOM Object's style property
   * We trigger this function just after the slides have animated
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.removeCSSDuration = function(){
    var _ = this;
    this.$el.find('.slide').each(function(){
      this.style[_.csstransitions+'Duration'] = '';
    });
  }
  
  /**
   * Creates a list of indicators based on the amount of slides
   * @params void
   * @returns void
   *
   */ 
  Zippy.prototype.build = function(){
    var $indicators = this.$el.append('<ul class="indicators" >').find('.indicators');
    this.totalSlides = this.$el.find('.slide').length;
    for(var i = 0; i < this.totalSlides; i++) $indicators.append('<li data-index='+i+'>');
  };
  
  /**
   * Activates the first slide
   * Activates the first indicator
   * @params void
   * @returns void
   *
   */ 
  Zippy.prototype.activate = function(){
    this.$currSlide = this.$el.find('.slide').eq(0);
    this.$el.find('.indicators li').eq(0).addClass('active');
  };
  
  /**
   * Associate event handlers to events
   * For arrow events, we send the placement of the next slide to the handler
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.events = function(){
    $('body')
      .on('click',this.settings.arrowRight,{direction:'right'},this.changeSlide)
      .on('click',this.settings.arrowLeft,{direction:'left'},this.changeSlide)
      .on('click','.indicators li',this.changeSlide);
  };
  
  /**
   * TIMER
   * Resets the timer
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.clearTimer = function(){
    if (this.timer) clearInterval(this.timer);
  };
  
  /**
   * TIMER
   * Initialise the timer
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.initTimer = function(){
    this.timer = setInterval(this.changeSlide, this.settings.slideDuration);
  };
  
  /**
   * TIMER
   * Start the timer
   * Reset the throttle to allow changeSlide to be executable
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.startTimer = function(){
    this.initTimer();
    this.throttle = false;
  };
  
  /**
   * MAIN LOGIC HANDLER
   * Triggers a set of subfunctions to carry out the animation
   * @params  object  event
   * @returns void
   *
   */
  Zippy.prototype.changeSlide = function(e){
    //Ensure that animations are triggered one at a time
    if (this.throttle) return;
    this.throttle = true;
    
    //Stop the timer as the animation is getting carried out
    this.clearTimer();
    
    // Returns the animation direction (left or right)
    var direction = this._direction(e);
    
    // Selects the next slide
    var animate = this._next(e,direction);
    if (!animate) return;
    
    //Active the next slide to scroll into view
    var $nextSlide = this.$el.find('.slide').eq(this.currSlide).addClass(direction + ' active');
    
    if (!this.csstransitions){
      this._jsAnimation($nextSlide,direction);
    } else {
      this._cssAnimation($nextSlide,direction);
    }
  };
  
  /**
   * Returns the animation direction, right or left
   * @params  object  event
   * @returns strong  animation direction
   *
   */
  Zippy.prototype._direction = function(e){
    var direction;
    
    // Default to forward movement
    if (typeof e !== 'undefined'){
      direction = (typeof e.data === 'undefined' ? 'right' : e.data.direction);
    } else {
      direction = 'right';
    }
    return direction;
  };
  
  /**
   * Updates our plugin with the next slide number
   * @params  object  event
   * @params  string  animation direction
   * @returns boolean continue to animate?
   *
   */
  Zippy.prototype._next = function(e,direction){
    
    // If the event was triggered by a slide indicator, we store the data-index value of that indicator
    var index = (typeof e !== 'undefined' ? $(e.currentTarget).data('index') : undefined);
    
    //Logic for determining the next slide
    switch(true){
      //If the event was triggered by an indicator, we set the next slide based on index
       case( typeof index !== 'undefined'):
        if (this.currSlide == index){
          this.startTimer();
          return false;
        } 
        this.currSlide = index;
      break;
      case(direction == 'right' && this.currSlide < (this.totalSlides - 1)):
        this.currSlide++;
      break;
      case(direction == 'right'):
        this.currSlide = 0;
      break;
      case(direction == 'left' && this.currSlide === 0):
        this.currSlide = (this.totalSlides - 1);
      break;
      case(direction == 'left'):
        this.currSlide--;
      break;
    }
    return true;
  };
  
  /**
   * Executes the animation via CSS transitions
   * @params  object  Jquery object the next slide to slide into view
   * @params  string  animation direction
   * @returns void
   *
   */
  Zippy.prototype._cssAnimation = function($nextSlide,direction){
    //Init CSS transitions
    setTimeout(function(){
      this.$el.addClass('transition');
      this.addCSSDuration();
      this.$currSlide.addClass('shift-'+direction);
    }.bind(this),100);
    
    //CSS Animation Callback
    //After the animation has played out, remove CSS transitions
    //Remove unnecessary classes
    //Start timer
    setTimeout(function(){
      this.$el.removeClass('transition');
      this.removeCSSDuration();
      this.$currSlide.removeClass('active shift-left shift-right');
      this.$currSlide = $nextSlide.removeClass(direction);
      this._updateIndicators();
      this.startTimer();
    }.bind(this),100 + this.settings.speed);
  };
  
  /**
   * Executes the animation via JS transitions
   * @params  object  Jquery object the next slide to slide into view
   * @params  string  animation direction
   * @returns void
   *
   */
  Zippy.prototype._jsAnimation = function($nextSlide,direction){
    //Cache this reference for use inside animate functions
    var _ = this;
    
     // See CSS for explanation of .js-reset-left
    if(direction == 'right') _.$currSlide.addClass('js-reset-left');
    
     var animation = {};
    animation[direction] = '0%';
    
    var animationPrev = {};
    animationPrev[direction] = '100%';
    
    //Animation: Current slide
    this.$currSlide.animate(animationPrev,this.settings.speed);
    
    //Animation: Next slide
    $nextSlide.animate(animation,this.settings.speed,'swing',function(){
      //Get rid of any JS animation residue
      _.$currSlide.removeClass('active js-reset-left').attr('style','');
      //Cache the next slide after classes and inline styles have been removed
      _.$currSlide = $nextSlide.removeClass(direction).attr('style','');
      _._updateIndicators();
      _.startTimer();
    });
  };
  
  /**
   * Ensures the slide indicators are pointing to the currently active slide
   * @params  void
   * @returns void
   *
   */
  Zippy.prototype._updateIndicators = function(){
    this.$el.find('.indicators li').removeClass('active').eq(this.currSlide).addClass('active');
  };
  
  /**
   * Initialize the plugin once for each DOM object passed to jQuery
   * @params  object  options object
   * @returns void
   *
   */
  $.fn.Zippy = function(options){
    
    return this.each(function(index,el){
      
      el.Zippy = new Zippy(el,options);
      
    });
    
  };
  



// Custom options for the carousel
var args = {
  arrowRight : '.arrow-right', //A jQuery reference to the right arrow
  arrowLeft : '.arrow-left', //A jQuery reference to the left arrow
  speed : 1000, //The speed of the animation (milliseconds)
  slideDuration : 4000 //The amount of time between animations (milliseconds)
};

$('.carousel').Zippy(args);
});

/* BGIN */

;(function(factory){
  
  if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
      module.exports = factory(require('jquery'));
  } else {
      factory(jQuery);
  }

})(function($){
  
  /*
   * We define Zippy as a variable of type ‘function’. 
   * Here, we use an anonymous function to ensure 
   * that the logic inside the function is executed immediately. 
   *
   */
  var Zippy = (function(element, settings){
    
    var instanceUid = 0;
    
    /*
     * The constructor function for Zippy
     *
     */
    function _Zippy(element, settings){
      this.defaults = {
        slideDuration: '3000',
        speed: 500,
        arrowRight: '.arrow-right',
        arrowLeft: '.arrow-left'
      };
      
      // We create a new property to hold our default settings after they
      // have been merged with user supplied settings
      this.settings = $.extend({},this,this.defaults,settings);
      
      // This object holds values that will change as the plugin operates
      this.initials = {
        currSlide : 0,
        $currSlide: null,
        totalSlides : false,
        csstransitions: false
      };
      
      // Attaches the properties of this.initials as direct properties of Zippy
      $.extend(this,this.initials);
      
      // Here we'll hold a reference to the DOM element passed in
      // by the $.each function when this plugin was instantiated
      this.$el = $(element);
      
      // Ensure that the value of 'this' always references Zippy
      this.changeSlide = $.proxy(this.changeSlide,this);
      
      // We'll call our initiator function to get things rolling!
      this.init();
      
      // A little bit of metadata about the instantiated object
      // This property will be incremented everytime a new Zippy carousel is created
     // It provides each carousel with a unique ID
      this.instanceUid = instanceUid++;
    }
    
    return _Zippy;
  
  })();
  
  /**
   * Called once per instance
   * Calls starter methods and associate the '.zippy-carousel' class
   * @params void
   * @returns void
   *
   */
   Zippy.prototype.init = function(){
    //Test to see if cssanimations are available
    this.csstransitionsTest();
    // Add a class so we can style our carousel
    this.$el.addClass('zippy-carousel');
    // Build out any DOM elements needed for the plugin to run
    // Eg, we'll create an indicator dot for every slide in the carousel
    this.build();
    // Eg. Let the user click next/prev arrows or indicator dots
    this.events();
    // Bind any events we'll need for the carousel to function
    this.activate();
    // Start the timer loop to control progression to the next slide
    this.initTimer();
  };
  
  /**
   * Appropriated out of Modernizr v2.8.3
   * Creates a new DOM element and tests existence of properties on it's
   * Style object to see if CSSTransitions are available
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.csstransitionsTest = function(){
    var elem = document.createElement('modernizr');
    //A list of properties to test for
    var props = ["transition","WebkitTransition","MozTransition","OTransition","msTransition"];
    //Iterate through our new element's Style property to see if these properties exist
    for ( var i in props ) {
      var prop = props[i];
      var result = elem.style[prop] !== undefined ? prop : false;
      if (result){
        this.csstransitions = result;
        break;
      } 
    } 
  };
  
  /**
   * Add the CSSTransition duration to the DOM Object's Style property
   * We trigger this function just before we want the slides to animate
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.addCSSDuration = function(){
    var _ = this;
    this.$el.find('.slide1').each(function(){
      this.style[_.csstransitions+'Duration'] = _.settings.speed+'ms';
    });
  }
  
  /**
   * Remove the CSSTransition duration from the DOM Object's style property
   * We trigger this function just after the slides have animated
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.removeCSSDuration = function(){
    var _ = this;
    this.$el.find('.slide1').each(function(){
      this.style[_.csstransitions+'Duration'] = '';
    });
  }
  
  /**
   * Creates a list of indicators based on the amount of slides
   * @params void
   * @returns void
   *
   */ 
  Zippy.prototype.build = function(){
    var $indicators = this.$el.append('<ul class="indicators" >').find('.indicators');
    this.totalSlides = this.$el.find('.slide1').length;
    for(var i = 0; i < this.totalSlides; i++) $indicators.append('<li data-index='+i+'>');
  };
  
  /**
   * Activates the first slide
   * Activates the first indicator
   * @params void
   * @returns void
   *
   */ 
  Zippy.prototype.activate = function(){
    this.$currSlide = this.$el.find('.slide1').eq(0);
    this.$el.find('.indicators li').eq(0).addClass('active');
  };
  
  /**
   * Associate event handlers to events
   * For arrow events, we send the placement of the next slide to the handler
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.events = function(){
    $('body')
      .on('click',this.settings.arrowRight,{direction:'right'},this.changeSlide)
      .on('click',this.settings.arrowLeft,{direction:'left'},this.changeSlide)
      .on('click','.indicators li',this.changeSlide);
  };
  
  /**
   * TIMER
   * Resets the timer
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.clearTimer = function(){
    if (this.timer) clearInterval(this.timer);
  };
  
  /**
   * TIMER
   * Initialise the timer
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.initTimer = function(){
    this.timer = setInterval(this.changeSlide, this.settings.slideDuration);
  };
  
  /**
   * TIMER
   * Start the timer
   * Reset the throttle to allow changeSlide to be executable
   * @params void
   * @returns void
   *
   */
  Zippy.prototype.startTimer = function(){
    this.initTimer();
    this.throttle = false;
  };
  
  /**
   * MAIN LOGIC HANDLER
   * Triggers a set of subfunctions to carry out the animation
   * @params  object  event
   * @returns void
   *
   */
  Zippy.prototype.changeSlide = function(e){
    //Ensure that animations are triggered one at a time
    if (this.throttle) return;
    this.throttle = true;
    
    //Stop the timer as the animation is getting carried out
    this.clearTimer();
    
    // Returns the animation direction (left or right)
    var direction = this._direction(e);
    
    // Selects the next slide
    var animate = this._next(e,direction);
    if (!animate) return;
    
    //Active the next slide to scroll into view
    var $nextSlide = this.$el.find('.slide1').eq(this.currSlide).addClass(direction + ' active');
    
    if (!this.csstransitions){
      this._jsAnimation($nextSlide,direction);
    } else {
      this._cssAnimation($nextSlide,direction);
    }
  };
  
  /**
   * Returns the animation direction, right or left
   * @params  object  event
   * @returns strong  animation direction
   *
   */
  Zippy.prototype._direction = function(e){
    var direction;
    
    // Default to forward movement
    if (typeof e !== 'undefined'){
      direction = (typeof e.data === 'undefined' ? 'right' : e.data.direction);
    } else {
      direction = 'right';
    }
    return direction;
  };
  
  /**
   * Updates our plugin with the next slide number
   * @params  object  event
   * @params  string  animation direction
   * @returns boolean continue to animate?
   *
   */
  Zippy.prototype._next = function(e,direction){
    
    // If the event was triggered by a slide indicator, we store the data-index value of that indicator
    var index = (typeof e !== 'undefined' ? $(e.currentTarget).data('index') : undefined);
    
    //Logic for determining the next slide
    switch(true){
      //If the event was triggered by an indicator, we set the next slide based on index
       case( typeof index !== 'undefined'):
        if (this.currSlide == index){
          this.startTimer();
          return false;
        } 
        this.currSlide = index;
      break;
      case(direction == 'right' && this.currSlide < (this.totalSlides - 1)):
        this.currSlide++;
      break;
      case(direction == 'right'):
        this.currSlide = 0;
      break;
      case(direction == 'left' && this.currSlide === 0):
        this.currSlide = (this.totalSlides - 1);
      break;
      case(direction == 'left'):
        this.currSlide--;
      break;
    }
    return true;
  };
  
  /**
   * Executes the animation via CSS transitions
   * @params  object  Jquery object the next slide to slide into view
   * @params  string  animation direction
   * @returns void
   *
   */
  Zippy.prototype._cssAnimation = function($nextSlide,direction){
    //Init CSS transitions
    setTimeout(function(){
      this.$el.addClass('transition');
      this.addCSSDuration();
      this.$currSlide.addClass('shift-'+direction);
    }.bind(this),100);
    
    //CSS Animation Callback
    //After the animation has played out, remove CSS transitions
    //Remove unnecessary classes
    //Start timer
    setTimeout(function(){
      this.$el.removeClass('transition');
      this.removeCSSDuration();
      this.$currSlide.removeClass('active shift-left shift-right');
      this.$currSlide = $nextSlide.removeClass(direction);
      this._updateIndicators();
      this.startTimer();
    }.bind(this),100 + this.settings.speed);
  };
  
  /**
   * Executes the animation via JS transitions
   * @params  object  Jquery object the next slide to slide into view
   * @params  string  animation direction
   * @returns void
   *
   */
  Zippy.prototype._jsAnimation = function($nextSlide,direction){
    //Cache this reference for use inside animate functions
    var _ = this;
    
     // See CSS for explanation of .js-reset-left
    if(direction == 'right') _.$currSlide.addClass('js-reset-left');
    
     var animation = {};
    animation[direction] = '0%';
    
    var animationPrev = {};
    animationPrev[direction] = '100%';
    
    //Animation: Current slide
    this.$currSlide.animate(animationPrev,this.settings.speed);
    
    //Animation: Next slide
    $nextSlide.animate(animation,this.settings.speed,'swing',function(){
      //Get rid of any JS animation residue
      _.$currSlide.removeClass('active js-reset-left').attr('style','');
      //Cache the next slide after classes and inline styles have been removed
      _.$currSlide = $nextSlide.removeClass(direction).attr('style','');
      _._updateIndicators();
      _.startTimer();
    });
  };
  
  /**
   * Ensures the slide indicators are pointing to the currently active slide
   * @params  void
   * @returns void
   *
   */
  Zippy.prototype._updateIndicators = function(){
    this.$el.find('.indicators li').removeClass('active').eq(this.currSlide).addClass('active');
  };
  
  /**
   * Initialize the plugin once for each DOM object passed to jQuery
   * @params  object  options object
   * @returns void
   *
   */
  $.fn.Zippy = function(options){
    
    return this.each(function(index,el){
      
      el.Zippy = new Zippy(el,options);
      
    });
    
  };
  

});



// Custom options for the carousel
var args = {
  arrowRight : '.arrow-right', //A jQuery reference to the right arrow
  arrowLeft : '.arrow-left', //A jQuery reference to the left arrow
  speed : 1000, //The speed of the animation (milliseconds)
  slideDuration : 4000 //The amount of time between animations (milliseconds)
};

$('.carousel1').Zippy(args);

});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});




jQuery(document).ready(function(){
// This button will increment the value
$(".plus").click( function(e) {

    e.preventDefault();
    
    // Define field variable
    field = "input[name=" + $(this).attr("field") + "]";
    
    // Get its current value
    var currentVal = parseInt($(field).val());
    
    // If is not undefined
    if ( !isNaN(currentVal) && currentVal < 20 ) {

        // Increment
        $(field).val(currentVal + 1);

    }
    
});

// This button will decrement the value till 0
$(".minus").click( function(e) {

    e.preventDefault();
    
    // Define field variable
    field = "input[name=" + $(this).attr("field") + "]";
    
    // Get its current value
    var currentVal = parseInt($(field).val());
    
    // If it isn't undefined or its greater than 0
    if ( !isNaN(currentVal) && currentVal > 1 ) {
        // Decrement one
        $(field).val(currentVal - 1);
    }
    
});
});



Snipcart.execute('config', 'show_continue_shopping', true);




$(document).ajaxComplete(function(event, XMLHttpRequest, ajaxOptions) {
  $("#snipcart-bill-me-later").html("Receber Referência");
  $("#snipcart-bill-me-later").next().html("<img style='width: 50px;' src='/assets/images/mb.png'/>Pagar pelo Multibanco");
});





