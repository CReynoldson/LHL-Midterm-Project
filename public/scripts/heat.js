
$("#sauce").change(function() {
  var heatLevel;
  switch(document.getElementById("sauce").value){
    case 1:
      $(".1").toggleClass("hide");
      $(".1").siblings().addClass("hide");
      break;
      case 2:
      $(".2").toggleClass("hide");
      $(".2").siblings().addClass("hide");
      break;
      case 3:
      $(".3").toggleClass("hide");
      $(".3").siblings().addClass("hide");
      break;
      case 4:
      $(".4").toggleClass("hide");
      $(".4").siblings().addClass("hide");
      break;
      case 5:
      $(".5").toggleClass("hide");
      $(".5").siblings().addClass("hide");
      break;
      case 6:
      $(".6").toggleClass("hide");
      $(".6").siblings().addClass("hide");
      break;
      case 7:
      $(".7").toggleClass("hide");
      $(".7").siblings().addClass("hide");
      break;
      case 8:
      $(".8").toggleClass("hide");
      $(".8").siblings().addClass("hide");
      break;
      default:
      $(".4").toggleClass("hide");
      $(".4").siblings().addClass("hide");
  }

});
