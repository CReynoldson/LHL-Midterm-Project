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
  $('.types').hide();
});

$(".start").click(function(){
  $(".fillings").slideToggle("fast","linear");
});

$("#chicken").click(function(){
  $(".chickenTypes").slideToggle("fast","linear");
});

$(".meatMenu").click(function(){
  $(this).siblings().toggle();
  $(this).toggleClass( "width" )
});
