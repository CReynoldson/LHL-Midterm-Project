module.exports = {
  lookup: (knex, cb) => {
    var results = [];
    console.log("Got into lookup with knext!");
    knex.select("type", "filling", "extra1", "extra2", "extra3", "sauce")
        .from("customerOrders")
        .then(function(rows){
          results = rows;
          cb(results);
        });
  },

  render: (data, cb) => {
    let rendered = data.map(function (obj){
      let type = capitalize(obj.type);
      let filling = capitalize(obj.filling);
      let sauce = obj.sauce;
      if (extra1 !== null){
      var extra1 = capitalize(obj.extra1);
      }
      if (extra2 !== null){
      var extra2 = capitalize(obj.extra2);
      }
      if (extra3 !== null){
      var extra3 = capitalize(obj.extra3);
      }
      let order = `${type} burrito (${filling}), Heats: ${sauce}, Extras: ${extra1} ${extra2} ${extra3}`;
      return order;
    });
      cb(rendered);
  },

  refresh: (knex, cb) => {
    knex.del().from("customerOrders").then(cb("Success"));
  }

//end of .exports
};
  function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
