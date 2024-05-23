const multipleItemCarousel = document.querySelector("#testimonialCarousel");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}




/* -------------
Scroll Animation
----------- */

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});
ScrollReveal().reveal(".one", { delay: 100, origin: "left" });
ScrollReveal().reveal(".two", { delay: 100, origin: "right" });
ScrollReveal().reveal(".three", { delay: 300, origin: "left" });
ScrollReveal().reveal(".four", { delay: 300, origin: "right" });
ScrollReveal().reveal(".five", { delay: 300, origin: "right" });
ScrollReveal().reveal(".six", { delay: 300, origin: "left" });
ScrollReveal().reveal(".seven", { delay: 300, origin: "left" });
ScrollReveal().reveal(".eight", { delay: 300, origin: "right" });

ScrollReveal().reveal(".nine", { delay: 150, origin: "top" });
ScrollReveal().reveal(".testi-container", {
  delay: 300,
  origin: "bottom",
});

ScrollReveal().reveal(".social-icons", { delay: 100, origin: "right" });
ScrollReveal().reveal(".quick-links", { delay: 100, origin: "top" });
ScrollReveal().reveal(".contact-us", { delay: 100, origin: "left" });



