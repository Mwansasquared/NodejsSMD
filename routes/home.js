const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    //res.send("Home Router Test");
    res.render('home', { title: 'Home : SMART DRIVERS LICENSE' });
});
module.exports = router;