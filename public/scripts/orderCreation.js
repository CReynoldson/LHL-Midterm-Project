//select active buttons and make them into an object

var totalOrder = [];

$("#addToOrder").on("click", function(){

var possibleOrderFillings = ["#crispy", "#grilled", "#ground", "#steak", "#halibut", "#cod", "#tofu", "#rice"]
var addOns = ["#sourCream", "#guac", "#salsa"];

  var orderItem = {
    type: "",
    sauce: "",
    extras: []
  };

  orderItem.sauce = $("#sauce").val();

  possibleOrderFillings.forEach(function (elm){
    if ($(elm).is(":visible")){
      orderItem.type = elm;
    }
  });
  addOns.forEach(function (elm){
    if ($(elm).hasClass("active")){
      orderItem.extras.push(elm);
    }
  });
  totalOrder.push(orderItem);
 console.log(orderItem);
 console.log(totalOrder);


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

