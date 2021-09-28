const express = require('express');
const router = express.Router();
app = express();
const db = require('../services/create_tables');
//const postToDb = require('../services/postToDB');


router.get('/', function(req, res, next) {
    res.render('register', { title: 'Registration : SMART DRIVERS LICENSE' });
});
/*
function insertData(ID, fullname, NRC, Gender, Class, Issued, Expire, Nationality) {

    server.query('INSERT INTO Drivers (ID, fullname, NRC, Gender, Class, Issued, Expire, Nationality) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', function(err,result) {
        if(err) throw err
    });
}*/

router.post('registration', function(req, res) {
    
    inputData ={
        ID: req.body.ID,
        fullname: req.body.fullname,
        NRC: req.body.NRC,
        Gender: req.body.Gender,
        Class: req.body.Class,
        Issued: req.body.Issued,
        Expire: req.body.Expire,
        Nationality: req.body.Nationality
    }
    function insertData(ID, fullname, NRC, Gender, Class, Issued, Expire, Nationality) {

        server.query('INSERT INTO registration SET ?', function(err,result) {
            if(err) throw err;
            else{
                var msg ="Details successfully saved";
                res.render('registration',{alertMsg:msg});    
            }
        });
    }
    //var sql = 'INSERT INTO registration SET ?';
   //db.query(sql, inputData, function (err, data) {
     // if (err) throw err;
      //else{
        //var msg ="Details successfully saved";
        //res.render('registration',{alertMsg:msg});    
     // }
    //});
    }    
);

module.exports = router;