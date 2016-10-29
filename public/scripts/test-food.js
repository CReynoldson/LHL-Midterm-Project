var orderItem = function() {

  return {
    type: "",
    filling: "",
    sauce: "",
    extras: [],


    // Returns an object representing   *just the data* for this order item
    data: function() {
      var _this = this;
      return {
        type: _this.type,
        filling: _this.filling,
        sauce: _this.sauce,
        extras: _this.extras,
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

}


var orderItem1 = new orderItem();
orderItem1.type = 'main dish';
console.log('orderItem1:', orderItem1); // this includes the functions - we can't send this nicely over ajax

console.log('orderItem1:', orderItem1.data());



var orderItem2 = new orderItem();
orderItem2.type = 'whatever'

