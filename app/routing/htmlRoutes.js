// 2 routes

//A GET Route to /survey which should display the survey page.
//A default, catch-all route that leads to home.html which displays the home page.

//Create thevariable path
// var path = require('path');

//Export the module containing all the routing calls to make it 
//avaialble to the server



var path = require('path');

module.exports = function (app){
  app.get("/", function (req, res, next) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  })
  app.get("/survey", function (req, res, next) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
  })
  app.get("*", function (req, res, next) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  })
}

