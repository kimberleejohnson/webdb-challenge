// Add columns to my table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        // Unique id
        tbl.increments(); 

        // Action description 
        tbl.string('action_desc', 128).notNullable().unique(); 

        // Notes column to add additional info
        tbl.string('action_notes', 255).notNullable().unique(); 

        // Boolean flag if action completed
        tbl.boolean('action_done'); 

        // Foreign key referring to projects
        tbl.integer('project_id').unsigned().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
    })
};

// Defining how we'll delete columns if needed
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions'); 
};
