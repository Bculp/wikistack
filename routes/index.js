var express = require('express');
var router = express.Router();
var app = express();
module.exports = router;

router.get('/', function (req, res) {
  res.render('index', {})
})
