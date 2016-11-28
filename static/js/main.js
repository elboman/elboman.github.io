(function () {
  fixPostHeight(Modernizr.mq('(min-width: 60em)'));
  var resizeTimer;
  console.log(Modernizr.mq('(min-width: 60em)'));
  $(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // Run code here, resizing has "stopped"
      fixPostHeight(Modernizr.mq('(min-width: 60em)'));
    }, 250);
  });
})();

function fixPostHeight (fix) {
  var $postItem = $('.post__item');
  $postItem.css({ height: 'auto' });
  if (fix) {
    var maxHeight = 0;
    $postItem.each(function(index, post) {
      if ($(post).outerHeight() > maxHeight)
        maxHeight = $(post).outerHeight();
    });
    $postItem.css({ height: maxHeight + 'px' });
  }
}