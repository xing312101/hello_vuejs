var express = require('express');
var router = express.Router();
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Xing312101 in Hello Vue.js',
    messeage: 'Hello'
 });
});

module.exports = router;
