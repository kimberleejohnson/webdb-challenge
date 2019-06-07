// Requiring my dependencies 
const express = require('express'); 
const helmet = require('helmet'); 

// Setting up my routers 
// const projectsRouter = require('./projects/projects-router.js'); 
// const actionsRouter = require('./actions/actions-router.js');

// Declaring my server
const server = express(); 

// Telling my server to use my dependencies 
server.use(helmet()); 
server.use(express.json());

// Telling my server to use my routers 
// server.use('/projects', projectsRouter); 
// server.use('/actions', actionsRouter);

module.exports = server; 