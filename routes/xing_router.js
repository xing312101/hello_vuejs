// xing router in express
// Author: Lee, Yu-Xing (李俞興)
// version: 0.0.0
// created at: 2018年6月7日 (JUN. 07, 2017)
// 將app需要include的route放置同一個檔案處理

var indexRouter = require('./index');
var startVueRouter = require('./vue')

function XingRouter(app) {
    this.app = app;
}

XingRouter.prototype.listen_routes = function() {

    this.app.use('/', indexRouter);
}


XingRouter.prototype.listen_routes = function() {

    this.app.use('/basic', startVueRouter);
}

module.exports = XingRouter;