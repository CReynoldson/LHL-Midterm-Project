// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });
// });

// drop down bars
$(document).ready(function(){
  $('.fillings').hide();
  $('.chickenTypes').hide();
  $('.fishTypes').hide();
  $('.vegTypes').hide();
  $('.beefTypes').hide();
  $('.extras').hide();
//});

$(".start").click(function(){
  $(".fillings").slideToggle("fast","linear");
  $('.chickenTypes').hide();
  $('.fishTypes').hide();
  $('.vegTypes').hide();
  $('.beefTypes').hide();
  $('.extras').hide();
  $(".second").removeClass("width");
  $(".second").removeClass("hide");
  $(".second").removeClass("active");
  $(".meatMenu").removeClass("width");
  $(".meatMenu").removeClass("hide");
  $(".meatMenu").removeClass("active");
  $(".third").removeClass("active");
  $(".chickenP").addClass("hide");
  $(".beefP").addClass("hide");
  $(".vegP").addClass("hide");
  $(".fishP").addClass("hide");
});

$("#chicken").click(function(){
  $(this).toggleClass("active");
  $(".chickenP").removeClass("hide");
  $(".chickenP").siblings().addClass("hide");
  $(".chickenTypes").slideToggle("fast","linear");
  $('.extras').hide();

});
$("#beef").click(function(){
  $(this).toggleClass("active");
  $(".beefP").removeClass("hide");
  $(".beefP").siblings().addClass("hide");
  $(".beefTypes").slideToggle("fast","linear");
  $('.extras').hide();
});
$("#fish").click(function(){
  $(this).toggleClass("active");
  $(".fishP").removeClass("hide");
  $(".fishP").siblings().addClass("hide");
  $(".fishTypes").slideToggle("fast","linear");
  $('.extras').hide();
});
$("#veg").click(function(){
  $(this).toggleClass("active");
  $(".vegP").removeClass("hide");
  $(".vegP").siblings().addClass("hide");
  $(".vegTypes").slideToggle("fast","linear");
  $('.extras').hide();
});

$(".meatMenu").click(function(){
  $(".second").removeClass("width");
  $(".second").removeClass("active");
  $(".second").removeClass("hide");
  $(".third").removeClass("active");
  $(this).siblings().toggleClass("hide");
  $(this).toggleClass( "width" );
});

$(".second").click(function(){
  $(this).toggleClass("active");
  $(this).toggleClass("width");
  $(".third").removeClass("active");
  $(this).siblings().toggleClass("hide");
  $(".extras").slideDown("fast","linear");
});
$(".third").click(function(){ //sour cream guac salsa
  $(this).toggleClass("active");
  $(this).blur();
});













//select active buttons and make them into an object
var totalOrder = [];
var orderItem = {
  Filling: "",
  Type: "",
  Sauce: "",
  Extras: []
};
console.log("hi");
console.log($("button.active"));





});
