// const dotenv =require('dotenv').config();
const express = require('express'); //import package
const app = express();  
const path = require('path');
const bodyParser = require ('body-parser');

app.use(bodyParser.json());
app.use(express.static('./app/public'));


//process.env.PATH
const port = process.env.PORT || 8080;



// set routes 
require ('./app/routing/apiRoutes')(app);
require ('./app/routing/htmlRoutes')(app);


app.listen(port, function(){
    console.log("Listening to port "+ port);
   
})

// install npms + npm init 