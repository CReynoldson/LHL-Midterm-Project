function spiciness (num){
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
};

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function stringify (){
  var string = "";
  if (type === "chicken"){
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
