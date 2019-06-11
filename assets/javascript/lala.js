

$( document ).ready(function() {

  $("pro-next").click(function() {
      $('slidex').animate({
          scrollTop: $(".slidex").offset().top},
          'slow');
  });

});


