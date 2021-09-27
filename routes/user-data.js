const express = require('express');
const router = express.Router();
const quotes = require('../services/fetchUserData');

/*router.get('/', function(req, res, next) {
    res.render('user-data', { title: 'User Data : SMART DRIVERS LICENSE' });
});
*/
/* GET drivers list. */
router.get('/', async function(req, res, next) {
    try {
      res.render('user-data',{ title: 'User Data : SMART DRIVERS LICENSE' }, await quotes.getMultiple());
    } catch (err) {
      console.error(`Error while getting details `, err.message);
      next(err);
    }
  });
module.exports = router;