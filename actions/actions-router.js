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

// Update a project (U in CRUD)
router.put('/:id', (req, res) => {
    Actions.update(req.params.id, req.body).then(count => {
        if (count > 0) {
            res.status(200).json({ message: `${count} actions updated!`})
        } else {
            res.status(404).json({ message: "Action not found."})
        }
    }) .catch(error => {
        res.status(500).json(error); 
    })
})

// Delete a project (D in CRUD)
router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
    .then(count => {
        if(count >0) {
            const unit = count > 1 ? 'actions' : 'action'; 
            res.status(200).json({ message: `${count} ${unit} deleted!`})
        } else {
            res.status(404).json({ message: 'Action not found!'})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// Exporting my router, so my server can use
module.exports = router; 