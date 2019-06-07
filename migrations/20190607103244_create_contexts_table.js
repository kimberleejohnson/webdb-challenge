// Adding columns to my table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contexts', function(tbl) {
        // Unique id
        tbl.increments(); 

        // Context description 
        tbl.string('context_desc', 128).notNullable().unique(); 
    })
  
};

// Defining how we'll delete columns if needed
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('contexts'); 
};
