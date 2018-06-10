var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vuejs/start_vue', { 
    title: 'Xing312101 Start VueJS.',
 });
});

module.exports = router;
