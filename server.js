// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes
const express = require('express');
let projectData = {
}

// Start up an instance of app
app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'
app.get('/all', (req, res) => {
    res.send(projectData);
});

// Post Route
app.post('/', (req, res) => {
    projectData.push(req.body);
    res.send(req.body);
});

app.use(express.static('website'));

const port = 8000;
app.listen(port, () => console.log(`Server is listening to ${port}`));