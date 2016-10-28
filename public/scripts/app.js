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
});

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
});

$("#chicken").click(function(){
  $(this).toggleClass("active");
  $(".chickenTypes").slideToggle("fast","linear");
  $('.extras').hide();

});
$("#beef").click(function(){
  $(this).toggleClass("active");
  $(".beefTypes").slideToggle("fast","linear");
  $('.extras').hide();
});
$("#fish").click(function(){
  $(this).toggleClass("active");
  $(".fishTypes").slideToggle("fast","linear");
  $('.extras').hide();
});
$("#veg").click(function(){
  $(this).toggleClass("active");
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
  $(".extras").slideToggle("fast","linear");
});
$(".third").click(function(){
  $(this).toggleClass("active");
  $(this).blur();
});

$("#sauce").change(function() {
  var heat = document.getElementById("sauce").value;
  document.getElementById("heatLevel").innerHTML = heat + " HEATS";
});


















