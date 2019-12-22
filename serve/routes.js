const USER = require('./model/user')

const apiPrefix = '/api/v1/';



module.exports = function (app) {
    app.get('/', function (req, res, next) {
        res.locals.title = 'express demo';
        res.render('index');
    });
    app.get('/user', function (req, res, next) {
        res.render('index', {title: 'aaa'});
    });
    app.post(apiPrefix + 'register', USER.register);//注册
    app.post(apiPrefix + 'login', USER.login);//登录

};





