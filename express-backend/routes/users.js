var express = require('express');
var router = express.Router();
const indexSQL = require('../sql');
const dbUtils = require('../utils/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', (req, res, next) => {
  dbUtils.query({
    sql: indexSQL.QueryAll,
  }).then(({ result }) => {
    if (result) {
      res.send({
        code: '0',
        data: result,
      });
    } else {
      res.send({
        code: '003001',
        data: [],
      });
    }
  });
});

module.exports = router;
