const router = require('koa-router')()
const user = require('../controllers/user')

router.post('/login', user.login);

router.post('/checkLogin', user.checkLogin);

router.post('/insertUser',user.insertUser);

router.post('/getInfo',user.getInfo);
module.exports = router
