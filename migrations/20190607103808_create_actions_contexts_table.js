// Adding columns to my table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions_contexts', function(tbl) {
        // Unique id 
        tbl.increments(); 

        // Foreign key for action id
        tbl.integer('action_id').unsigned().references('id').inTable('actions').onDelete('CASCADE').onUpdate('CASCADE');

        // Foreign key for context id 
        tbl.integer('context_id').unsigned().references('id').inTable('contexts').onDelete('CASCADE').onUpdate('CASCADE');

        // Foreign key for context desc 
        tbl.string('context_desc').unsigned().references('context_desc').inTable('contexts').onDelete('CASCADE').onUpdate('CASCADE');
    })
  
};

// Defining how we delete columns if we need 
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions_contexts'); 
};
