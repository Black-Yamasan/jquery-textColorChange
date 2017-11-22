/*
* jquery-textColorChange
* MIT License
**/
;(function($) {
  $.fn.textColorChange = function(options) {
    var textColorChangeOptions = $.extend( {}, $.fn.textColorChange.defaults, options );
    var $el = $(this),
        $win = $(window),
        $elChild = null;

    var winWidth = $win.width(),
        currentWidth = $win.innerWidth(),
        winHeight = $win.height();

    var colorName = textColorChangeOptions.colorName,
        devideHeight = textColorChangeOptions.devideHeight,
        delay = textColorChangeOptions.delay,
        timeout = textColorChangeOptions.timeout;

    var resizeTimer = null,
        scrollTimer = null,
        timer = null,
        flag = null;

    var offsetTop = $el.offset().top,
        text = $el.text(),
        textLength = text.length,
        textData = [],
        str = null;

    $win.imagesLoaded(function() {
      winHeight = $win.height();
      offsetTop = $el.offset().top;
    });


    for ( var i = 0; i < textLength; i++ ) {
      textData.push('<span class="js-colorChange">' + text[i] + '</span>');
    }
    str = textData.join('');
    var regExp = new RegExp( text, 'g' );
    $el.html(text.replace( regExp, str ));

    $elChild = $el.find('.js-colorChange');


    function colorChange() {
      var k = 0;
      timer = setInterval(function() {
        $elChild.eq(k).addClass(colorName);
        k++;
        if ( k > textLength ) {
          stopTimer();
        }
      }, delay);
    }

    function stopTimer() {
      clearInterval(timer);
    }


    $win.on('resize', function() {
      if ( currentWidth == $win.innerWidth() ) {
        return;
      }
      if ( resizeTimer ) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(function() {
        winWidth = $win.width();
        currentWidth = $win.innerWidth();
        $win.imagesLoaded(function() {
          winHeight = $win.height();
          offsetTop = $el.offset().top;
        });
      }, 15);
    });

    $win.on('scroll', function() {
      if ( scrollTimer ) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(function() {
        if ( flag ) return false;
        if ( $win.scrollTop() > offsetTop - winHeight / devideHeight ) {
          setTimeout(function() {
            colorChange();
          }, timeout);
          flag = true;
        }
      }, 5);
    });


  };

  $.fn.textColorChange.defaults = {
    colorName: 'color-blue',
    devideHeight: 0.8,
    delay: 200,
    timeout: 100
  };
})(jQuery);
