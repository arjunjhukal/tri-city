$(function () {
  $(".banner-scroll-indicator").click(function () {
    window.scrollTo({
      top: window.scrollY + 200,
      behavior: "smooth",
    });
  });

  $(".timeline-tabs li").each(function (index) {
    $(this).click(function () {
      $(".timeline-tabs li").removeClass("active");
      $(this).addClass("active");

      $(".timeline .tab-content-box").removeClass("active");
      $(".timeline .tab-content-box").eq(index).addClass("active");
    });
  });

  gsap.registerPlugin(ScrollTrigger);
});

$(function () {
  const headlineWidth = $(".headline-content h1").outerWidth();

  const viewportWidth = $(window).width();

  const translateAmount = headlineWidth - viewportWidth + 50; // 50px offset

  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".headline",
      start: "top center",
      end: "+=100%",
      scrub: 1,
      pin: true,
      ease: "ease-in-out",
      // markers: {
      //   startColor: "green",
      //   endColor: "yellow",
      // },
    },
  });

  t1.fromTo(".headline-content h1", { x: "50px" }, { x: `-${translateAmount}px` });
});
