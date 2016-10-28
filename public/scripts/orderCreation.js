//select active buttons and make them into an object
var totalOrder = [];
var orderItem = {
  Filling: "",
  Type: "",
  Sauce: "",
  Extras: []
};

$("#addToOrder").on("click", function(){
  console.log("clicked");
  var active = $(".active").text();
  console.log(active);
  console.log(typeof active);
  var result = active.split(" ");
  var filteredResult = result.filter(function (value){
    if (value == null || value.length === 0){
      return false;
    }
    return true;
  });
  console.log(filteredResult);
});
