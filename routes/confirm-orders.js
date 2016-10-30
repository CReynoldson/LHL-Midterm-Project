"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/", (req, res) => {
    console.log("In router post with ", req.body);
    let input = req.body;

    input.myArray.forEach(function (elm){
      let type = elm.type;
      let filling = elm.filling;
      if(!elm.extras){
        let sauce = elm.sauce;
        knex("customer-orders")
          .returning('type')
          .insert({type: type, filling: filling, sauce: sauce})
          .then ((resourceID) => {
            console.log(resourceID);
            knex.select("*").from("customer-orders").then((result) => {
              console.log(result);
              res.redirect("/confirm-order");
            })
          })
      } else {
        let extra1 = "";
        let extra2 = "";
        let extra3 = "";
        switch(elm.extras.length){
          case 1:
            extra1 = elm.extras[0];
            break;
          case 2:
            extra1 = elm.extras[0];
            extra2 = elm.extras[1];
            break;
          case 3:
            extra1 = elm.extras[0];
            extra2 = elm.extras[1];
            extra3 = elm.extras[2];
            break;
        }
        let sauce = elm.sauce;
        console.log("About to run Knex stuff");
        knex("customer-orders")
          .insert({type: type, filling: filling, extra1: extra1, extra2: extra2, extra3: extra3, sauce: sauce});
      }
    });
    // console.log(input);
    // knex
    //   .insert("*")
    //   .to("TABLENAME???")
    //   .then((results) => {
    //     res.json(results);
    // });
  });

  return router;
}
