const express = require("express");
const app = express();
const port = 3000;
const path = require('path');

/**
 *  App Configuration
 */
//app.use(express.static(__dirname + '/public'));
/* //GET /style.css and images
 */
app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
//app.use(express.static('public'));

/**
 * Routes Definitions
 */
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
