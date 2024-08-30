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

  /* Mobile Menu Toggler */
  $(".ham-icon").click(function () {
    MobileMenuActiveHandler();

    $(".close-ham").click(function () {
      MobileMenuCloser();
    });
  });

  /* Overlay Click Handler */
  $(".overlay").click(function () {
    HandleOverlayClick();
  });

  /* TimeLine Slider */

  $(".timeline-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    asNavFor: ".timeline-tabs",
  });

  $(".timeline-tabs").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    asNavFor: ".timeline-slider",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* Dynamic Rating */

  $(".review-rating").each(function () {
    var currentRating = $(this).attr("data-rating");
    var ratingValue = parseFloat(currentRating);
    var ratingBeforeDecimal = Math.floor(ratingValue);
    var ratingAfterDecimal = ratingValue - ratingBeforeDecimal;

    var widthPercentage = ratingAfterDecimal * 100;

    if (ratingAfterDecimal >= 0) {
      $(this)
        .find("li")
        .eq(ratingBeforeDecimal)
        .find(".filled-star")
        .css("width", widthPercentage + "%");
    }

    $(this)
      .find("li")
      .each(function (index) {
        if (index > ratingBeforeDecimal) {
          $(this).find(".filled-star").css("width", "0%");
        }
      });

    console.log({ currentRating, ratingBeforeDecimal, widthPercentage }); // Log the details
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

      ease: "ease-in-out",
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

/* Action Animation */
$(function () {
  const actionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact",
      start: "top center",
      end: "center center",
      scrub: 1,
      // markers: {
      //   startColor: "green",
      //   endColor: "yellow",
      // },
    },
  });

  actionTimeline.fromTo(
    ".contact-info",
    {
      "--after-left": "-8px",
      "--after-rotate": "0deg",
    },
    {
      "--after-left": "10px",
      "--after-rotate": "10.4deg",
    }
  );
});
