$(document).ready(function(){

  var accountSid = 'ACc3d9540af089cd45dc236d18dc178043';
  var authToken = 'b0f6a5c2594c547905fe08ad215b0967';
  var client = require('twilio')(accountSid, authToken);

  $("#confirmOrder").click(function(){

    client.messages.create({
        to: "+12503758535",
        from: "+17784001527",
        body: "Your order will be ready in 5 minutes!"
    }, function(err, message) {
        console.log(message.sid);
    });
  });
});
