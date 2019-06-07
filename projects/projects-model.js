// Requiring knex
const knex = require('knex')

// Configuring knex
knexConfig = {
    client: 'sqlite3', 
    connection: {
        filename: './data/projectTracker.db3'
    }, 
    useNullAsDefault: true,
}

// Defining database
const db = knex(knexConfig); 

// Exporting functions I'll use in my routes
module.exports = {
    find,
    add,
    update, 
    remove,
}

// Defining what those functions do

// Finds a project in the database 
function find() {
    return db('projects')
}; 

// Adds a project to the database 
function add(project) {
    return db('projects')
    .insert(project, 'id')
};

// Updates a project 
function update(id, changes) {
    return db('projects')
    .where({ id })
    .update(changes); 
}

// Removes a project 
function remove(id, changes) {
    return db ('projects')
    .where({ id })
    .del();
}