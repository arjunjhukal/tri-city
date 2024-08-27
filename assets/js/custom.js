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
