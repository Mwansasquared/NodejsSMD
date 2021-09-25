const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('read-tag', { title: 'Read tag: SMART DRIVERS LICENSE' });
});
module.exports = router;