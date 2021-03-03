// Navbar Shadow Show/Hide
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $(".navbar").addClass("shadow-sm");
    } else {
      $(".navbar").removeClass("shadow-sm");
    }
  });
});

$(document).ready(function () {
  // Homepage Review Carousel
  $("#reviewCarousel").owlCarousel({
    autoPlay: 5000,
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [991, 2],
    itemsTablet: [768, 1],
  });

  // Homepage Blog Carousel
  $("#blogCarousel").owlCarousel({
    autoPlay: 5000,
    items: 2,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [991, 2],
    itemsTablet: [768, 1],
  });

  $(".blog-carousel-next").click(function () {
    $("#blogCarousel").trigger('owl.prev');
  });
  $(".blog-carousel-prev").click(function () {
    $("#blogCarousel").trigger('owl.next');
  });
})