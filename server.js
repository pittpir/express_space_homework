// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// DEPENDENCIES
const express = require('express');
const app = express();
module.exports = app;
app.set('view engine', 'ejs');
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));

// PORT
const port = 3000;
let data = require ("./models/marsMissions.js");

//middleware portion
app.use(function (req, res, next) {
  let newDate = new Date(Date.now());
  console.log(`${newDate.toDateString()} ${newDate.toTimeString()}`);
  console.log("Home page hit by: " + req.connection.remoteAddress);
  next()
})

app.get('/', (req,res) => {
  res.render('missions/index', {
    data: data,
    page: 'list',   //file called list.ejs
    cssPath: '/css/style.css'  //point to the style sheet
  })
});

app.get('/missions/:id', (req,res) => {
  res.render('missions/index', {
    data: data[req.params.id],
    page: 'show',   //file called list.ejs
    cssPath: '/css/style.css'  //point to the style sheet
  })
});

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})
