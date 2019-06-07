// Defining what columns to add to my table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
        // Unique id 
        tbl.increments(); 

        // Name 
        tbl.string('project_name', 128).notNullable().unique(); 

        // Description 
        tbl.string('project_desc', 255).notNullable().unique(); 

        // Boolean whether project complete or not 
        tbl.boolean('is_complete'); 
    })
};

// Defining how we will delete things if we need 
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects'); 
};
