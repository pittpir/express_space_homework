

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
app.set('view engine', 'ejs');

module.exports = app;
//module.exports = app.listen(3000);
// PORT
const port = 3000;
let data = require ("./models/marsMissions.js");

app.get('/missions', (req,res) => {
  //res.send('<h1>Hello</h1>');
  //res.render('pages/index.ejs',{title : title, names : names})
  res.render('pages/index.ejs', { data });
})

let me = "/cow";

/*
data.map(function (data1,index) {
  createGet("/missions/" + data1.name, index);
})

function createGet (me,index) {
app.get(me, (req,res) => {
  let data1 = data[index];
  res.render('pages/show.ejs', { data1 });
})
}
*/

app.get('/missions/:index', (req,res) => {
  let data1 = data[req.params.index];
  res.render('pages/show.ejs', { data1 });
})

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



