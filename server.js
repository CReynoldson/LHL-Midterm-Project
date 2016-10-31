"use strict";

require('dotenv').config();

const PORT          = process.env.PORT || 8080;
const ENV           = process.env.ENV || "development";
const express       = require("express");
const bodyParser    = require("body-parser");
const sass          = require("node-sass-middleware");
const app           = express();

const knexConfig    = require("./knexfile");
const knex          = require("knex")(knexConfig[ENV]);
const morgan        = require('morgan');
const knexLogger    = require('knex-logger');
const confirmOrders = require("./routes/confirm-orders");
const renderOrder   = require("./routes/render-orders");
// const twilio        = require('twilio');


// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// const twiliosettings = require("./twiliosettings")
// var accountSid = twiliosettings.accountSid;
// var authToken = twiliosettings.authToken;


// var client = new twilio.RestClient(accountSid, authToken);

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
// app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
//app.use("/api/users", usersRoutes(knex));
app.use("/confirm-order", confirmOrders(knex));

// Home page
app.get("/", (req, res) => {
  res.redirect("/restaurants/id");
});

app.get("/restaurants/id", (req, res) => {
  res.render("restaurants_id");
});

app.get("/confirm-order", (req, res) => {
  console.log("Got to app.get confirmorder!");
  renderOrder.lookup(knex, (orderInfo) => {
    renderOrder.render(orderInfo, (renderedInfo) => {
      let templateVars = {order: renderedInfo};
      res.render("order_confirmation.ejs", templateVars);
    })
  });
});

// router.get("/", (req, res) => {
//   db.getMenu(1).then((data) => {
//     res.render("../views/customers/index", {data});
//   });
// });









app.post("/confirm-order", (req, res) => {
  console.log("got to the parsing section!");

  res.redirect("/confirm-order");
})


app.get("/current-orders", (req, res) => {
  res.render("current_orders");
})

app.get("/orders-in-progress", (req, res) => {
  res.render("restaurant_orders");
});
app.post("/sendOrder", (req, res) => {
    client.messages.create({
        to: twiliosettings.phone,
        from: twiliosettings.twiliophone,
        body: "Your order will be ready in 5 minutes!"
    }, function(err, message) {
        console.log(message);
    });
  res.redirect("/restaurants/id")
})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
