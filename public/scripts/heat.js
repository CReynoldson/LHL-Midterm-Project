
$("#sauce").change(function() {
  var heat = Number(document.getElementById("sauce").value);
  switch(heat){
    case 1:
      $(".1").removeClass("hide");
      $(".1").siblings().addClass("hide");
      break;
      case 2:
      $(".2").removeClass("hide");
      $(".2").siblings().addClass("hide");
      break;
      case 3:
      $(".3").removeClass("hide");
      $(".3").siblings().addClass("hide");
      break;
      case 4:
      $(".4").removeClass("hide");
      $(".4").siblings().addClass("hide");
      break;
      case 5:
      $(".5").removeClass("hide");
      $(".5").siblings().addClass("hide");
      break;
      case 6:
      $(".6").removeClass("hide");
      $(".6").siblings().addClass("hide");
      break;
      case 7:
      $(".7").removeClass("hide");
      $(".7").siblings().addClass("hide");
      break;
      case 8:
      $(".8").removeClass("hide");
      $(".8").siblings().addClass("hide");
  }

});
