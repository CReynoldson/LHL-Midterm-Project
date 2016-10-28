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
});

$(".start").click(function(){
  $(".fillings").slideToggle("fast","linear");
});

$("#chicken").click(function(){
  $(".chickenTypes").slideToggle("fast","linear");
});
$("#beef").click(function(){
  $(".beefTypes").slideToggle("fast","linear");
});
$("#fish").click(function(){
  $(".fishTypes").slideToggle("fast","linear");
});
$("#veg").click(function(){
  $(".vegTypes").slideToggle("fast","linear");
});

$(".meatMenu").click(function(){
  $(this).siblings().toggle();
  $(this).toggleClass( "width" )
});
