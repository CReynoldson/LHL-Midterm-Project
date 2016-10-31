module.exports = {
  lookup: (knex, cb) => {
    var results = [];
    console.log("Got into lookup with knext!");
    knex.select("id","type", "filling", "extra1", "extra2", "extra3", "sauce")
        .from("customerOrders")
        .then(function(rows){
          results = rows;
          cb(results);
        });
  },

  render: (data, cb) => {
    let rendered = data.map(function (obj){
      let num = obj.id;
      let type = obj.type;
      let filling = obj.filling;
      let sauce = obj.sauce;
      if (extra1 !== null){
      var extra1 = obj.extra1;
      }
      if (extra2 !== null){
      var extra2 = obj.extra2;
      }
      if (extra3 !== null){
      var extra3 = obj.extra3;
      }
      let order = `${num}: ${filling} ${type} burrito, heats:${sauce}, extras: ${extra1} ${extra2} ${extra3} `;
      return order;
    });
      cb(rendered);







  }













//end of .exports
};
