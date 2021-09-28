const { response } = require('express');
var mysql = require('mysql');

/* do not put password or any sensitive info here, done only for demo */
var server = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'node_rfid_project'
});


function sql_query(sql){
  server.connect(function(err) {
    var sql_response;
    if (!err){
      server.query(sql, function (err, result) {  
        if (!err){
          // weird... seems like all is well, we have some response
          sql_response = {
            "error": false,
            "data": result
          }
          console.log(sql_response);
          return sql_response;
        }else{
          // Seems like query execution failed
          sql_response = {
            "error": true,
            "code": err.code,
            "num": err.errno,
            "msg": err.sqlMessage,
            "state": err.sqlState
          };
          console.log(sql_response);
          return sql_response;
        }
      });
    }else{
      // seems like DB server connection failed
      sql_response = {
        "error": true,
        "code": err.code,
        "num": err.errno,
        "msg": err.sqlMessage,
        "state": err.sqlState
      };
      console.log(sql_response);
      return sql_response;
    }
  });
}
let create_table_sql = "CREATE TABLE Drivers (ID INT(11) NOT NULL, fullname VARCHAR(255) NOT NULL, NRC VARCHAR(255) NOT NULL, Gender VARCHAR(255) NOT NULL, Class VARCHAR(255) NOT NULL, Issued VARCHAR(255) NOT NULL, Expire VARCHAR(255) NOT NULL, Nationality VARCHAR(255) NOT NULL, `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` DATETIME on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`ID`), INDEX `idx_NRC` (`NRC`)) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;";

//let create_table = sql_query(create_table_sql);
//console.log(create_table)

// BUG: I don't understand why create_table is not returning any value when I console
//let insert_data_sql = "INSERT INTO Drivers (ID, fullname, NRC, Gender, Class, Issued, Expire, Nationality) VALUES ('17110793', 'Mwansa', '76555/16/1', 'Male', 'B', '2021-07-25', '2021-07-27', 'ZT');";
//let insert_data = sql_query(insert_data_sql);
//console.log(insert_data);
function insertData(ID, fullname, NRC, Gender, Class, Issued, Expire, Nationality) {

  server.query('INSERT INTO Drivers (ID, fullname, NRC, Gender, Class, Issued, Expire, Nationality) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', function(err,result) {
	  if(err) throw err
  });
}
// BUG: I don't understand why insert_data is not returning any value when I console

module.exports = {
  sql_query
}