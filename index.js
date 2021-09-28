const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * Routes Definitions
 */

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
//GET /style.css and images
app.use(express.static(path.join(__dirname, "./public/")));


var homeRouter = require('./routes/home');
app.use('/', homeRouter);

const registerRouter = require('./routes/registration');
app.use('/register', registerRouter);

const readTagRouter = require('./routes/read-tag');
app.use('/read-tag', readTagRouter);

const userDataRouter = require('./routes/user-data');
app.use('/user-data', userDataRouter);

module.exports = app;
/**
 * Port listening
 */
app.listen(port, () => {
  console.log("Server Started...");
});
