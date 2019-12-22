const config = require('../config')
const db = require('../db')

const userTable = 'user'


let USER = {
    // 登录
    login: (req, res, next) => {
        db.select(userTable, req.body).then(function (data) {
            if (data.length > 0) {
                res.json(config.success(data[0]))
            } else {
                res.json(config.errMsg(1001, '用户不存在或账号密码有误'))
            }
        }, config.errCallback(res))
    },
    // 注册用户
    register: (req, res, next) => {
        db.findOrCreate(userTable, req.body, {username: req.body.username}).then(function (result) {
            if (!result) {
                res.json(config.errMsg(1002, '用户名已存在'))
            } else {
                res.json(config.success())
            }
        }, config.errCallback(res))
    },


}

module.exports = USER
