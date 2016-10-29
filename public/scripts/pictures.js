$(document).ready(function(){


$(".start").click(function(){
  $(".chickenP").addClass("hide");
  $(".beefP").addClass("hide");
  $(".vegP").addClass("hide");
  $(".fishP").addClass("hide");
  $(".girlledP").addClass("hide");
  $(".crispyP").addClass("hide");
  $(".steakP").addClass("hide");
  $(".groundP").addClass("hide");
  $(".tofuP").addClass("hide");
  $(".riceP").addClass("hide");
  $(".halibutP").addClass("hide");
  $(".codP").addClass("hide");
  $(".heat").addClass("hide");
  $(".top").addClass("hide");

});
$("#chicken").click(function(){
  $(".chickenP").toggleClass("hide");
  $(".chickenP").siblings().addClass("hide");
  $(".grilledP").addClass("hide");
  $(".crispyP").addClass("hide");
  $(".top").addClass("hide");
});
$("#beef").click(function(){
  $(".beefP").toggleClass("hide");
  $(".beefP").siblings().addClass("hide");
  $(".groundP").addClass("hide");
  $(".steakP").addClass("hide");
  $(".heat").addClass("hide");
  $(".top").addClass("hide");
});
$("#fish").click(function(){
  $(".fishP").toggleClass("hide");
  $(".fishP").siblings().addClass("hide");
  $(".halibutP").addClass("hide");
  $(".codP").addClass("hide");
  $(".heat").addClass("hide");
  $(".top").addClass("hide");
});
$("#veg").click(function(){
  $(".vegP").toggleClass("hide");
  $(".vegP").siblings().addClass("hide");
  $(".tofuP").addClass("hide");
  $(".riceP").addClass("hide");
  $(".heat").addClass("hide");
  $(".top").addClass("hide");
});
$("#grilled").click(function(){
  $(".grilledP").toggleClass("hide");
  $(".grilledP").siblings().addClass("hide");
  setTimeout(function(){if($(".extras").css("display") == "none"){
    $(".heat").addClass("hide")
  }else{
    $(".4").removeClass("hide")
  }}, 300);
  $(".sourCream").addClass("hide")
  $(".guac").addClass("hide")
  $(".salsa").addClass("hide")
});

$("#crispy").click(function(){
  $(".crispyP").toggleClass("hide");
  $(".crispyP").siblings().addClass("hide");
  $(".heat").addClass("hide");
  setTimeout(function(){if($(".extras").css("display") == "none"){
    $(".heat").addClass("hide")
  }else{
    $(".4").removeClass("hide")
  }}, 300);
  $(".sourCream").addClass("hide")
  $(".guac").addClass("hide")
  $(".salsa").addClass("hide")
});

$("#steak").click(function(){
  $(".steakP").toggleClass("hide");
  $(".steakP").siblings().addClass("hide");
  $(".heat").addClass("hide");
  setTimeout(function(){if($(".extras").css("display") == "none"){
    $(".heat").addClass("hide")
  }else{
    $(".4").removeClass("hide")
  }}, 300);
  $(".sourCream").addClass("hide")
  $(".guac").addClass("hide")
  $(".salsa").addClass("hide")
});

$("#ground").click(function(){
  $(".groundP").toggleClass("hide");
  $(".groundP").siblings().addClass("hide");
  $(".heat").addClass("hide");
  setTimeout(function(){if($(".extras").css("display") == "none"){
    $(".heat").addClass("hide")
  }else{
    $(".4").removeClass("hide")
  }}, 300);
  $(".sourCream").addClass("hide")
  $(".guac").addClass("hide")
  $(".salsa").addClass("hide")
});

$("#tofu").click(function(){
  $(".tofuP").toggleClass("hide");
  $(".tofuP").siblings().addClass("hide");
  $(".heat").addClass("hide");
  setTimeout(function(){if($(".extras").css("display") == "none"){
    $(".heat").addClass("hide")
  }else{
    $(".4").removeClass("hide")
  }}, 300);
  $(".sourCream").addClass("hide")
  $(".guac").addClass("hide")
  $(".salsa").addClass("hide")
});

$("#rice").click(function(){
  $(".riceP").toggleClass("hide");
  $(".riceP").siblings().addClass("hide");
  $(".heat").addClass("hide");
  setTimeout(function(){if($(".extras").css("display") == "none"){
    $(".heat").addClass("hide")
  }else{
    $(".4").removeClass("hide")
  }}, 300);
  $(".sourCream").addClass("hide")
  $(".guac").addClass("hide")
  $(".salsa").addClass("hide")
});

$("#cod").click(function(){
  $(".codP").toggleClass("hide");
  $(".codP").siblings().addClass("hide");
  $(".heat").addClass("hide");
  setTimeout(function(){if($(".extras").css("display") == "none"){
    $(".heat").addClass("hide")
  }else{
    $(".4").removeClass("hide")
  }}, 300);
  $(".sourCream").addClass("hide")
  $(".guac").addClass("hide")
  $(".salsa").addClass("hide")
});

$("#halibut").click(function(){
  $(".halibutP").toggleClass("hide");
  $(".halibutP").siblings().addClass("hide");
  $(".heat").addClass("hide");
  setTimeout(function(){if($(".extras").css("display") == "none"){
    $(".heat").addClass("hide")
  }else{
    $(".4").removeClass("hide")
  }}, 300);
  $(".sourCream").addClass("hide")
  $(".guac").addClass("hide")
  $(".salsa").addClass("hide")
});

$("#sourCream").click(function(){
  $(".sourCream").toggleClass("hide")
});
$("#guac").click(function(){
  $(".guac").toggleClass("hide")
});
$("#salsa").click(function(){
  $(".salsa").toggleClass("hide")
});


});

