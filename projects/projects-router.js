// Requiring my router
const router = require('express').Router(); 

// Importing my data models
const Projects = require('./projects-model.js'); 
const Actions = require('../actions/actions-model'); // So I can add the actions for a project 

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

// Get project by ID (R in CRUD)
router.get('/:id', (req, res) => {
    const { id } = req.params; // grabbing the id as required 
    Projects.find()
    .where({ id })
    .first()
    .then((projects) => {
        if(projects) {
            Actions.find()
            .where({ project_id: id})
            .then((actions) => {
                projects.actions = actions; 
                res.status(200).json(projects);
            })
            .catch((error) => res.status(500).json({ message: "Sorry! We have an error."}));
        } else {
            res.status(404).json({ message: "Project not found."})
        }
    }).catch(error => {
        res.status(500).json({ message: "Error!" });
    })
})

// Update a project (U in CRUD)
router.put('/:id', (req, res) => {
    Projects.update(req.params.id, req.body).then(count => {
        if (count > 0) {
            res.status(200).json({ message: `${count} projects updated!`})
        } else {
            res.status(404).json({ message: "Project not found."})
        }
    }) .catch(error => {
        res.status(500).json(error); 
    })
})

// Delete a project (D in CRUD)
router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
    .then(count => {
        if(count >0) {
            const unit = count > 1 ? 'projects' : 'project'; 
            res.status(200).json({ message: `${count} ${unit} deleted!`})
        } else {
            res.status(404).json({ message: 'Project not found!'})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// 

// Exporting my router, so my server can use  
module.exports = router; 