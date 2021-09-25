const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('registration', { title: 'Registration : SMART DRIVERS LICENSE' });
});
module.exports = router;