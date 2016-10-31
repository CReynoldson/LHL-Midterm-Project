module.exports = {
  lookup: (knex) => {
    var results = [];
    console.log("Got into lookup with knext!");
    knex.select("type", "filling", "extra1", "extra2", "extra3", "sauce")
                    .from("customerOrders")
                    .then(function(rows){
                      // console.log(rows);
                      results = rows;
                      return results;
                      // console.log("Results inside the .then " + results);
                    });











//end of lookup =>
  }













//end of .exports
};
