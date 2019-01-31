$(() => {

  //Apply background color to navber if window is scrolled
  $(window).scroll(()=> {
    if($(window).scrollTop() > 75) {
      $("#mainNavbar").addClass("navScroll");
    } else {
      $("#mainNavbar").removeClass("navScroll");
    }
  });

});