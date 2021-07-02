const mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "MyNewPass2021!",
  database: "myblog",
});


// 配置数据库连接池
// var pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "myblog",
// });

module.exports = {
  query: function (sql, params) {
    return new Promise(function (resolve, reject) {
      pool.getConnection(function (err, connection) {
        if (err) reject(err); // not connected!
        connection.query(sql, params, function (error, results, fields) {
          connection.release();
          if (error) reject(error);
          resolve(results);
        });
      });
    });
  }
};
