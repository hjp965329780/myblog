const db = require('./db')

module.exports = {
    getByNameAndPwd(username, pass){
        return db.query('select * from t_user where username=? and pass=?', [username, pass]);
    },
    insertUser(user){
        return db.query('insert into t_user set ?', user);
    },
    getUserByName(username) {
        return db.query(`
            select * from t_user where username=?
        `, [username]);
    },
}