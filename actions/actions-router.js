//Requiring my router 
const router = require('express').Router();

// Importing my data model 
const Actions = require('./actions-model.js'); 

// ROUTES
router.get('/', (req, res) => {
    Actions.find().then(actions => {
        res.status(200).json(actions); 
    })
    .catch(error => {
        res.status(500).json(error); 
    })
}); 

// 

// Exporting my router, so my server can use
module.exports = router; 