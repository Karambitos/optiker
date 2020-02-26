// owlCarousel
// ============================================
$(document).ready(function() {
  $(".slide-one").owlCarousel({
    nav: false,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $(".slide-two").owlCarousel({
    // margin: 10,
    nav: false,
    loop:true,
    autoplay:false,
    responsive: {
      0: {
        items: 1
      },
      550: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });
});
// ============================================
 