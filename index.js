// Requiring my server, from the file where I will build it 
const server = require('./server.js'); 

const port = 4000; 
server.listen(port, function() {
    console.log(`=== Web API listening on localhost:${port} ===\n`);
}); 