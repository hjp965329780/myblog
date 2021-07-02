import axios from 'axios'
import app from '../main'

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "http://localhost:3000",
});


// 添加请求拦截器(每次发送请求前进入这个拦截器)
instance.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    // 在请求之前，为请求加上token
    const AUTH_TOKEN = localStorage.getItem('mytoken');
    config.headers["Authorization"] = AUTH_TOKEN;
    //config.headers["Authorization"] = "Bearer " + AUTH_TOKEN;//在前面拼一个"Bearer "不是必须的  
    //Bearer是送信人的意思  后端接的时候再多加一层验证一下
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    let {status} = error.response;
    if(status == 401){
        app.$router.push('/login');
    }
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
