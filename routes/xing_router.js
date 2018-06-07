// xing router in express
// Author: Lee, Yu-Xing (李俞興)
// version: 0.0.0
// created at: 2018年6月7日 (JUN. 07, 2017)
// 將app需要include的route放置同一個檔案處理

var indexRouter = require('./index');
var usersRouter = require('./users');

function XingRouter(app) {
    this.app = app;
}

XingRouter.prototype.listen_routes = function() {

    this.app.use('/', indexRouter);
    this.app.use('/users', usersRouter);
}

module.exports = XingRouter;