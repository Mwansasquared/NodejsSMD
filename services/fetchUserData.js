const db = require('../services/db');

async function getMultiple(){
  const data = await db.query('SELECT ID, fullname, NRC, Gender, Class, Issued, Expire, Nationality FROM Drivers');
  const meta = {page: 1};

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}