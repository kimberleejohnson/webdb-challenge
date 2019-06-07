// Requiring knex
const knex = require('knex'); 

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

//Defining what those functions do 

// Finds actions in the database 
function find() {
    return db('actions')
}; 

// Adds an action to the database 
function add(action) {
    return db('actions')
    .insert(action, 'id')
};

// Updates an action 
function update(id, changes) {
    return db('actions')
    .where({ id })
    .update(changes); 
}

// Removes an action 
function remove(id, changes) {
    return db ('actions')
    .where({ id })
    .del();
}