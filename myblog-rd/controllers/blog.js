const blogModel = require("../models/blogModel");

module.exports = {
  listBlogs: async (ctx) => {
    // 查数据库
    let cateId = ctx.query.cateId;
    let blogs = [];
    if(cateId){
      console.log('cateId = '+cateId);
      blogs = await blogModel.getBlogs(cateId);
    }
    else{
      blogs = await blogModel.getBlogs();
    }
    let categories = await blogModel.getCategories();
    ctx.body = {
      state: "success",
      blogs,
      categories,
    };
  },
  getBlog: async (ctx) => {
    let blogId = ctx.query.blogId;
    // 查数据库
    let res = await blogModel.getBlogById(blogId);
    let comm = await blogModel.getBlogComment(blogId);
    ctx.body = {
      state: "success",
      blog: res[0],
      comment: comm,
    };
  },
  getCategories: async (ctx) => {
    let categories = await blogModel.getCategories();
    ctx.body = {
      state: "success",
      categories,
    };
  },
  postBlog: async (ctx) => {
    try {
      // 1. 接数据
      let blog = ctx.request.body;
      blog.user_id = 1;
      // 2. 存数据
      let res = await blogModel.saveBlog(blog);
      console.log(res.affectedRows);
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
      console.log(err);
    }
  },
  detail: async (ctx) => {
    // 1. 接数据
    let blogId = ctx.params.blogId;
    // 2. 查文章
    let res = await blogModel.getBlogById(blogId)
    // 3. 查文章评论
    let comments = await blogModel.getCommentsByBlogId(blogId)

    let username = ctx.session.username;
    if(res.length > 0){
      await ctx.render('blog-detail', {
        blog: res[0],
        comments,
        username
      });
    }
  },
};
