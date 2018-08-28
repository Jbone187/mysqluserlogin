let express = require('express');

let bodyParser = require('body-parser');

let create = require('./create');

let login = require('./login');

let app = express();


/*------------------Routing Started ------------------------*/


app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())

app.use(express.static('public'));


app.post('/create',create);

app.post('/login',login);

/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){

    console.log("Node is Running on Port 3000");

});
