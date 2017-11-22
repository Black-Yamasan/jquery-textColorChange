$(function() {
  var $el1 = $('#js-el1');
  var $el2 = $('#js-el2');

  var el1Options = {
    colorName: 'color-blue',
    devideHeight: 1.2,
    delay: 200,
    timeout: 800
  }

  var el2Options = {
    colorName: 'color-white',
    devideHeight: 1.3,
    delay: 100,
    timeout: 1200
  }

  $el1.textColorChange(el1Options);
  $el2.textColorChange(el2Options);
});
