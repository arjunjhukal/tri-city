function MobileMenuActiveHandler() {
  $(".overlay").addClass("active");
  $(".header-menu").addClass("active");
  $("body").addClass("overflow-hidden");
}

function MobileMenuCloser() {
  $(".overlay").removeClass("active");
  $(".header-menu").removeClass("active");
  $("body").removeClass("overflow-hidden");
}

function HandleOverlayClick() {
  $(".overlay").removeClass("active");
  $(".header-menu").removeClass("active");
  $("body").removeClass("overflow-hidden");
}

$(function () {
  gsap.registerPlugin(ScrollTrigger);

  /*Banner Scroll Indicator */
  $(".banner-scroll-indicator").click(function () {
    window.scrollTo({
      top: window.scrollY + 200,
      behavior: "smooth",
    });
  });

  /* Timeline tab  */
  $(".timeline-tabs li").each(function (index) {
    $(this).click(function () {
      $(".timeline-tabs li").removeClass("active");
      $(this).addClass("active");

      $(".timeline .tab-content-box").removeClass("active");
      $(".timeline .tab-content-box").eq(index).addClass("active");
    });
  });

  /* Mobile Menu Toggler */

  $(".ham-icon").click(function () {
    MobileMenuActiveHandler();

    $(".close-ham").click(function () {
      MobileMenuCloser();
    });
  });

  $(".overlay").click(function () {
    HandleOverlayClick();
  });
});

$(function () {
  const headlineWidth = $(".headline-content h1").outerWidth();

  const viewportWidth = $(window).width();

  const translateAmount = headlineWidth - viewportWidth + 50; // 50px offset

  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".headline",
      start: "top center",
      end: "+=60%",
      scrub: 1,
      // pin: true,
      ease: "ease-in-out",
      // markers: {
      //   startColor: "green",
      //   endColor: "yellow",
      // },
    },
  });

  t1.fromTo(".headline-content h1", { x: "50px" }, { x: `-${translateAmount}px` });
});

/* About Page Collaborator Tab */
$(function () {
  $(".collab-tabs button").on("click", function () {
    $(".collab-tabs li").removeClass("active");

    $(this).parent().addClass("active");

    var target = $(this).text().toLowerCase().replace(/ /g, "_");

    $("#" + target)[0].scrollIntoView({
      behavior: "smooth",
    });
  });

  // Intersection Observer callback
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(".collab-tabs li").removeClass("active");

        var id = entry.target.id;

        $(".collab-tabs button").each(function () {
          if ($(this).text().toLowerCase().replace(/ /g, "_") === id) {
            $(this).parent().addClass("active");
          }
        });
      }
    });
  }

  var observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });

  $(".collab-item").each(function () {
    observer.observe(this);
  });
});
