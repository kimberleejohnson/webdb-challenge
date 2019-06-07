//Requiring my router 
const router = require('express').Router();

// Importing my data model 
const Actions = require('./actions-model.js'); 

// ROUTES

// Displaying all my actions (test)
router.get('/', (req, res) => {
    Actions.find().then(actions => {
        res.status(200).json(actions); 
    })
    .catch(error => {
        res.status(500).json(error); 
    })
}); 

// Adding a new action (C in CRUD)
router.post('/', (req, res) => {
    Actions.add(req.body, 'id').then(ids => {
        res.status(201).json(ids);
    }).catch(error => {
        res.status(500).json(error); 
    })
})

// Exporting my router, so my server can use
module.exports = router; 