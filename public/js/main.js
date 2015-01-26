(function() {
  jQuery(function($) {
    $(".description:first").show();
    return $(".btn").on("click", function() {
      var link;
      link = $(this).attr("href");
      $(".description").hide();
      $(link).fadeIn();
      return false;
    });
  });

}).call(this);
