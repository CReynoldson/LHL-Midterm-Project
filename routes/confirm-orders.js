"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/", (req, res) => {
    let input = req.body;

    input.myArray.forEach(function (elm){
      let type = elm.type;
      let filling = elm.filling;
      if(!elm.extras){
        let sauce = elm.sauce;
        knex
          .returning(['id', 'type', 'sauce'])
          .insert({type: type, filling: filling, sauce: sauce})
          .into('customerOrders')
          .then ((resourceID) => {
            console.log(resourceID);
            knex.select('*').from('customerOrders')
            .then((result) => {
              console.log(result);
              res.redirect("/confirm-order");
            });
          });
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
        knex
          .returning(['id', 'type', 'sauce'])
          .insert({type: type, filling: filling, sauce: sauce})
          .into('customerOrders')
          .then ((resourceID) => {
            knex.select('*').from('customerOrders')
            .then((result) => {
              res.json(result);
            });
          });
        }
    });
  });


  console.log("returning router");

  return router;
}
