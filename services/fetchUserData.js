const db = require('../services/create_tables');

async function getMultiple(){
  const data = db.sql_query('SELECT ID, fullname, NRC, Gender, Class, Issued, Expire, Nationality FROM Drivers');
  const meta = {page: 1};

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}