const express = require("express");
const app = express();
const port = 3000;
const path = require('path');


/**
 * Routes Definitions
 */

//app.use(express.static(__dirname + '/public')); 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
//GET /style.css and images
app.use(express.static(path.join(__dirname, "./public/")));


var homeRouter = require('./routes/home');
app.use('/', homeRouter);

const registerRouter = require('./routes/registration');
app.use('/registration', registerRouter);

const readTagRouter = require('./routes/read-tag');
app.use('/read-tag', readTagRouter);

const userDataRouter = require('./routes/user-data');
app.use('/user-data', userDataRouter);

/**
 * Port listening
 */
app.listen(port, () => {
  console.log("Server Started...");
});
