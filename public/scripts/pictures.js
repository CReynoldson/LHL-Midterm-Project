$(".start").click(function(){
  $(".chickenP").addClass("hide");
  $(".beefP").addClass("hide");
  $(".vegP").addClass("hide");
  $(".fishP").addClass("hide");
  $(".girlledP").addClass("hide");
  $(".crispyP").addClass("hide");
});
$("#chicken").click(function(){
  $(".chickenP").toggleClass("hide");
  $(".chickenP").siblings().addClass("hide");
  $(".girlledP").addClass("hide");
  $(".crispyP").addClass("hide");
});
$("#beef").click(function(){
  $(".beefP").toggleClass("hide");
  $(".beefP").siblings().addClass("hide");
  $(".groundP").addClass("hide");
  $(".steakP").addClass("hide");
});
$("#fish").click(function(){
  $(".fishP").toggleClass("hide");
  $(".fishP").siblings().addClass("hide");
  $(".halibutP").addClass("hide");
  $(".codP").addClass("hide");
});
$("#veg").click(function(){
  $(".vegP").toggleClass("hide");
  $(".vegP").siblings().addClass("hide");
  $(".tofuP").addClass("hide");
  $(".riceP").addClass("hide");
});
$("#grilled").click(function(){
  $(".grilledP").toggleClass("hide");
  $(".girlledP").siblings().addClass("hide");
});
$("#crispy").click(function(){
  $(".crispyP").toggleClass("hide");
  $(".crispyP").siblings().addClass("hide");
});
$("#steak").click(function(){
  $(".steakP").toggleClass("hide");
  $(".steakP").siblings().addClass("hide");
});
$("#ground").click(function(){
  $(".groundP").toggleClass("hide");
  $(".groundP").siblings().addClass("hide");
});
$("#tofu").click(function(){
  $(".tofuP").toggleClass("hide");
  $(".tofuP").siblings().addClass("hide");
});
$("#rice").click(function(){
  $(".riceP").toggleClass("hide");
  $(".riceP").siblings().addClass("hide");
});
$("#cod").click(function(){
  $(".codP").toggleClass("hide");
  $(".codP").siblings().addClass("hide");
});
$("#halibut").click(function(){
  $(".halibutP").toggleClass("hide");
  $(".halibutP").siblings().addClass("hide");
});
