//select active buttons and make them into an object

var totalOrder = [];


$("#addToOrder").on("click", function(possibleOrderFillings, extras){

var possibleOrderFillings = ["#crispy", "#grilled", "#ground", "#steak", "#halibut", "#cod", "#tofu", "#rice"]
var addOns = ["#sourCream", "#guac", "#salsa"];

  var orderItem = {
    type: "",
    sauce: "",
    extras: []
  };

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
});
