$(function () {
  $(".timeline-tabs li").each(function (index) {
    $(this).click(function () {
      $(".timeline-tabs li").each(function () {
        $(this).removeClass("active");
      });

      $(this).addClass("active");

      $(".timeline .tab-content-box").each(function () {
        $(this).removeClass("active");
      });

      $(".timeline .tab-content-box").eq(index).addClass("active");
    });
  });
});

$(function () {
  gsap.registerPlugin(ScrollTrigger);

  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".features",
      start: "bottom center",
      end: "bottom top",
      scrub: 1,
      ease: "ease-in-out",
      markers: {
        startColor: "green",
        endColor: "yellow",
      },
    },
  });

  t1.fromTo(".headline-content h1", { x: 50, y: 0 }, { x: -300, y: -20 });
});
