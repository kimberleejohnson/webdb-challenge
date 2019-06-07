// Requiring my router
const router = require('express').Router(); 

// Importing my data model 
const Projects = require('./projects-model.js')

// ROUTES

// GET to display all my projects (test, R in CRUD)
router.get('/', (req, res) => {
    Projects.find().then(projects => {
        res.status(200).json(projects); 
     })
    .catch(error => {
        res.status(500).json(error); 
    })
}); 

// Add a new project (C in CRUD)
router.post('/', (req, res) => {
    Projects.add(req.body, 'id').then(ids => {
        res.status(201).json(ids); 
    }).catch(error => {
        res.status(500).json(error); 
    })
})
// 

// Exporting my router, so my server can use  
module.exports = router; 