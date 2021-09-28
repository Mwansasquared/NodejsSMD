const db = require('../services/create_tables');
const express = require('express');
const router = express.Router();

function insertData(ID, fullname, NRC, Gender, Class, Issued, Expire, Nationality) {

    server.query('INSERT INTO Drivers (ID, fullname, NRC, Gender, Class, Issued, Expire, Nationality) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', function(err,result) {
        if(err) throw err
    });
}
/* Login user 
router.post('/registration', function (req, res, next) {const username = req.body.username;
    let loginResult = login(username, req.body.password);if (loginResult) {
        console.log('Driver successfully added.');
    }
    else {
        console.log('Some details are missing.');
    }
});*/
module.exports = {
    insertData
}