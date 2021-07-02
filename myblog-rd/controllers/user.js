var jwt = require('jsonwebtoken');
const userModel = require('../models/userModel')

let mySecretKey = "6723782389238923!@#$$%%^&^&";

module.exports = {
    login: async (ctx) => {
        // 1. 接数据
        let user = ctx.request.body;
        // 2. 验证
        // 3. 查数据库
        let res = await userModel.getByNameAndPwd(user.username, user.pass);
        if (res.length > 0) {
            // 登录成功，生成token
            let payload = {
                userId: res[0].user_id,
                username: res[0].username
            }
            // payload（存的信息）、
            let token = jwt.sign(payload, mySecretKey, { expiresIn: '2d' });
            ctx.body = {
                state: 'success',
                token,
                userName: user.username
            }
        } else {
            ctx.body = {
                state: 'fail'
            }
        }
    },
    checkLogin: async (ctx) => {
        try {
            let accessToken = ctx.header.authorization;
            jwt.verify(accessToken, mySecretKey);
            ctx.body = {
                state: 'success'
            }
        } catch (err) {
            ctx.status = 401;//401是返回给http的状态码，表示用户信息未认证
            ctx.body = {
                state: 'fail'
            }
        }
    },
    insertUser: async (ctx) => {
        try {
            // 1. 接数据
            let user = ctx.request.body;
            // console.log(user);
            // blog.user_id = 1;
            // 2. 存数据
            let res = await userModel.insertUser(user);
            // console.log(res.affectedRows);
            if (res.affectedRows > 0) {
                ctx.body = {
                    state: "success",
                };
            } else {
                ctx.body = {
                    state: "fail",
                };
            }
        } catch (err) {
            ctx.body = {
                state: "fail",
            };
        }
    },
    getInfo: async (ctx) => {
        let {username} = ctx.request.body;
        console.log(username);
        // 查数据库
        let res = await userModel.getUserByName(username);
        // console.log(res[0].username);
        ctx.body = {
            state: "success",
            username: res[0].username,
            tel: res[0].tel,
            time: res[0].create_time,
        };
    },
}