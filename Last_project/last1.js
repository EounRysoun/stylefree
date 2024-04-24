$(document).ready(function () {
  var i = 0;
  $(".bars").click(function () {
    if (i == 0) {
      $(".bar-left").show(200);
      i = 1;
    } else {
      $(".bar-left").hide(200);
      i = 0;
    }
  });
  $(".bar-left").click(function () {
    $(".bar-left").hide();
  });
});
