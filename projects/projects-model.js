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
}

// Defining what those functions do
function find() {
    return db('projects')
}; 

function add(project) {
    return db('projects')
    .insert(project, 'id')
};