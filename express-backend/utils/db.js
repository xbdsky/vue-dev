const mysql = require('mysql');
const config = require('../config');
const pool = mysql.createPool(config.mysql);

pool.on('connection', (connection) => {
  // console.log('取得连接');
});

pool.on('release', (connection) => {
  // console.log('释放了连接');
});

pool.on("error", (err) => {
  console.error(err);
});

const getConnection = (res) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        // not connected!
        console.error(err);
        if (res) {
          res.send( {
            code: "000001",
            msg: "对不起，您还未获得授权",
          });
        }
        reject(err)
      } else {
        resolve(connection)
      }
    });
  });
};

const execQuery = (options, connection, release = true) => {
  return new Promise((resolve, reject) => {
    connection.query(options, function (error, result, field) {
      if (release) {
        // 可以手动选择不 release，复用 connection，在事务结束再 release
        connection.release();
      }

      if (error) {
        // Handle error after the release.
        reject(error)
      } else {
        resolve({
          result,
          field,
        })
      }
    });
  })
};

/**
 * 执行 mysql 查询语句
 * @param {*} options 支持 sql string 和 options 两种形式调用，如果要传参数，必须使用 options 对象，options.sql 是 sql 语句，options.values 是参数数组。
 * @param {*} connection 如果传入 connect 直接使用
 * @param {boolean} release 执行 query 后，是否自动 release
 */
const query = (options, connection, release) => {
  if (connection) {
    return execQuery(options, connection, release)
  } else {
    return getConnection().then(connection => {
      return execQuery(options, connection, release)
    })
  }
};

const execTransaction = (connection, task) => {
  return new Promise((resolve, reject) => {
    connection.beginTransaction(function(err) {
      if (err) {
        reject(err)
      }
      task.then(resp => {
        connection.commit(function(err) {
            if (err) {
              connection.rollback(function() {
                reject(err)
              });
            } else {
              resolve(resp)
            }
        });
      }, err => {
        connection.rollback(function() {
          reject(err)
        });
      }).catch(err => {
        connection.rollback(function() {
            reject(err)
        });
      })
    });
  }).finally(() => {
    connection.release();
  })
};

module.exports.getConnection = getConnection;
module.exports.query = query;
module.exports.execTransaction = execTransaction;
