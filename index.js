const express = require("express");
const app = express();
const port = 3000;
const path = require('path');

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'pug');
app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));

//app.use('/static', express.static(path.join(__dirname, '/public')));
// In your html, note absolute path
//href='./css/style.css'

var homeRouter = require('./routes/home');
app.use('/', homeRouter);

//const navbarRouter = require('./routes/navbar');
//app.use('/navbar', navbarRouter);

const registerRouter = require('./routes/registration');
app.use('/registration', registerRouter);

const readTagRouter = require('./routes/read-tag');
app.use('/read-tag', readTagRouter);

const userDataRouter = require('./routes/user-data');
app.use('/user-data', userDataRouter);

//app.get("/", (req, res) => {
  //res.send("Hello Mwansa!");
//});

app.listen(port, () => {
  console.log("Server Started...");
});