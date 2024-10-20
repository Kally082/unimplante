$(document).on('ready', function() {
    $(".regular").slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,      
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<a class="slick-prev" style="font-size: 7rem;"><i class="bx bx-chevron-left"></i></a>',
      nextArrow: '<a class="slick-next" style="font-size: 7rem;"><i class="bx bx-chevron-right"></i></a>'
    });
    $(".regular2").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,      
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<a class="slick-prev" style="font-size: 4rem;"><i class="bx bx-chevron-left"></i></a>',
        nextArrow: '<a class="slick-next" style="font-size: 4rem;"><i class="bx bx-chevron-right"></i></a>',
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
      });
  });