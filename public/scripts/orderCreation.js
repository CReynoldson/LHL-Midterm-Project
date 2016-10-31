$(document).ready(function(){

//hold multiple items in a given order
var totalOrder = [];
console.log(totalOrder)
//take active choices and turn them into an orderItem object

$("#addToOrder").on("click", function(){
  var typesOfProtein = ["#chicken","#beef","#veg","#fish"];
  var possibleOrderFillings = ["#crispy", "#grilled", "#ground", "#steak", "#halibut", "#cod", "#tofu", "#rice"]
  var addOns = ["#sourCream", "#guac", "#salsa"];


  var orderItem = {
    type: "",
    filling: "",
    sauce: "",
    extras: [],

    // this method should return an object with just the data
    data: function() {
      return {
        type: this.type,
        filling: this.filling,
        sauce: this.sauce,
        extras: this.extras,
      }
    },

    spiciness: function (num){
      var text = ""
      switch(num){
        case 1:
        case 2:
        text = "Spiciness: Mild";
        break;
        case 3:
        case 4:
        text = "Spiciness: Moderate";
        break;
        case 5:
        case 6:
        text = "Spiciness: Spicy";
        break;
        case 7:
        text = "Spiciness: Pepper Spray";
        break;
        case 8:
        text = "Spiciness: The Dark Lord Satan Himself";
        break;
      }
      return text;
    },
    capitalize: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    stringify: function (){
      var string = "";
      if (this.type === "chicken"){
        string += this.capitalize(this.filling) + " Chicken Burrito ";
        if (this.extras.length === 0){
          string += this.spiciness(Number(this.sauce));
        } else {
          string += "with ";
          for (var i = 0; i < this.extras.length; i++){
            string += this.capitalize(this.extras[i]) + ", ";
          }
          string += this.spiciness(Number(this.sauce));
        }
        return string;
      } else {
        string += this.capitalize(this.filling) + " Burrito ";
        if (this.extras.length === 0){
          string += this.spiciness(Number(this.sauce));
        } else {
          string += "with ";
          for (var i = 0; i < this.extras.length; i++){
            string += this.capitalize(this.extras[i]) + ", ";
          }
          string += this.spiciness(Number(this.sauce));
        }
        return string;
      }
    }
  };

  typesOfProtein.forEach(function (elm){
    if ($(elm).is(":visible")){
      orderItem.type = elm.substring(1);
    }
  });

  possibleOrderFillings.forEach(function (elm){

    if ($(elm).is(":visible")){
      orderItem.filling = elm.substring(1);
      if (orderItem.filling === "ground"){
        orderItem.filling = "Ground Beef";
      }
    }
  });

  orderItem.sauce = $("#sauce").val();

  addOns.forEach(function (elm){
    if ($(elm).hasClass("active") && ($(elm).text().trim() === "Sour Cream")){
      orderItem.extras.push("Sour Cream");
    } else if ($(elm).hasClass("active")){
      orderItem.extras.push(elm.substring(1));
    }
  });


  // Add order to list of orders
  totalOrder.push(orderItem);
  //Add order to cart list
  var cartOrderItem = $("<li>").addClass("order-item").text(orderItem.stringify());
  $("#order").append(cartOrderItem);

  //hide everything so the customer can start a new order
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
  $(".grilledP").addClass("hide");
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


  var allOrderItems = []; // this is what we submit in ajax

  $("#submitOrder").click(function(){
      totalOrder.forEach(function(orderItem){
        allOrderItems.push(orderItem.data());
        console.log(orderItem.data());
      });
    submitOrder (event, allOrderItems);
  });

  function submitOrder (event, allOrderItems){
    // if(event){event.preventDefault()};
    console.log("clicked Confirm");
    console.log("InsideFunction", allOrderItems);
    $.ajax({
      method: "POST",
      url: "/confirm-order",
      type: 'POST',
      // contentType: 'application/json',
      // dataType: 'json',
      data: {
        myArray: allOrderItems
      },
      success: function(response){
        window.location.href = "/confirm-order";
      }
    });
  }

});

