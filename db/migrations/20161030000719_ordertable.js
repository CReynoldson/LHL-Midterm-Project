exports.up = function(knex, Promise) {
 return knex.schema.createTable('customer-orders', function (table) {
   table.increments("id");//default: not nullable
   table.string("type").notNullable();
   table.string("filling").notNullable();
   table.string("extra1");
   table.string("extra2");
   table.string("extra3");
   table.integer("sauce");

  });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('resource-tags');
};
