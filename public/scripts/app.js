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
  $('.slider').hide();
});

$(".start").click(function(){
  $(".fillings").slideToggle("fast","linear");
  $('.chickenTypes').hide();
  $('.fishTypes').hide();
  $('.vegTypes').hide();
  $('.beefTypes').hide();
  $('.slider').hide();

});

$("#chicken").click(function(){
  $(".chickenTypes").slideToggle("fast","linear");
  $('.slider').hide();
});
$("#beef").click(function(){
  $(".beefTypes").slideToggle("fast","linear");
  $('.slider').hide();
});
$("#fish").click(function(){
  $(".fishTypes").slideToggle("fast","linear");
  $('.slider').hide();
});
$("#veg").click(function(){
  $(".vegTypes").slideToggle("fast","linear");
  $('.slider').hide();
});

$(".meatMenu").click(function(){
  $(this).siblings().toggle();
  $(this).toggleClass( "width" )
});

$(".second").click(function(){
  $(".slider").slideDown("fast","linear");
});
