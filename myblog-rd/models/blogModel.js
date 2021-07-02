const db = require('./db')

module.exports = {
    getBlogs(cateId) {
        let sql = `
        SELECT blog.blog_id as blogId, blog.title, blog.content, blog.post_time as postTime, blog.read_count as readCount, usr.username, category.cate_name as cateName
        FROM t_blog blog, t_user usr, t_category category
        WHERE blog.user_id = usr.user_id and blog.cate_id = category.cate_id
    `;
        if (cateId) {
            sql += ' and blog.cate_id=' + cateId
        }
        return db.query(sql);
    },
    getCategories() {
        return db.query(`
            select cate_id as cateId, cate_name as cateName from t_category
        `);
    },
    getBlogById(blogId) {
        return db.query(`
            select * from t_blog where blog_id=?
        `, [blogId]);
    },
    getBlogComment(blogId) {
        return db.query(`
        select comm.* , usr.username
        from t_comment comm, t_user usr
        where comm.user_id=usr.user_id and comm.blog_id=? order by comm.create_time desc
    `, [blogId]);
    },
    getCategories() {
        return db.query('select * from t_category');
    },
    saveBlog(blog) {
        return db.query('insert into t_blog set ?', blog);
    }
}