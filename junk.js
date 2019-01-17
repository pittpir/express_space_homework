
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

// PORT
const port = 3000;
let data = require ("./models/marsMissions.js");


//let data = "<h1>SwampGator</h1>"; 
//let http = require('http');
//let ejs = require('ejs');

//var names = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5'];
//var title = 'EJS template with Node.JS';



app.get('/', (req,res) => {
  //res.send('<h1>Hello</h1>');
  //res.render('pages/index.ejs',{title : title, names : names})
  res.render('pages/index.ejs', { data });
})

app.get('/raw', (req,res) => {
  res.send(data);
})

/*
let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', {people: people});


var server = http.createServer(function(req, res){
    res.end(ejs.render(html));
});
*/
//var names = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5'];
//var title = 'EJS template with Node.JS';

/*
var fs = require('fs');
var templateString = fs.readFileSync('./index.ejs', 'utf-8');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    //res.end(ejs.renderFile(__dirname + '/index.ejs', {title : title, names : names}));
    res.end(ejs.render(templateString, {title : title, names : names}));
});
*/
//var templateString = fs.readFileSync('template.ejs', 'utf-8');

//let template = ejs.compile(str, options);
//template(data);
/*
// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server
const marsMissions = [
  {
    name: "Curiosity",
    launchDate: "26 Nov 2011",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Opportunity",
    launchDate: "8 Jul 2003",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Spirit",
    launchDate: "10 Jun 2003",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Sojourner",
    launchDate: "4 Dec 1996",
    operator: "NASA",
    missionType: "Rover",
    img: ""
  },
  {
    name: "Rosetta",
    launchDate: "2 Mar 2004",
    operator: "ESA",
    missionType: "Gravity Assist",
    img: ""
  }
];
*/


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
//server.listen(port);
app.listen(port);

/*
// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})
*/
//module.exports = app;






/*
<%- votes -%>
*/



/*
  <% %> and <%- %> and <%= %>

  <% These will run script server side - There is no output - The user will not see this %> 

  <%- These will inject javascript value into your html, unsanitized - you can pass html this way. %>

  <%= These tags will inject the javascript value into your html, sanitized - html tags will appear as strings %>
*/


/*
<title><%= title %></title>


  <% if (names.length) { %>
  <ul> <% names.forEach(function(name){ %>
    <li><%= name %></li> <% }) %>
  </ul> <% } %>
  */
