$('nav li').hover(
  function() {
    $('ul', this).stop().slideToggle(300);
  });