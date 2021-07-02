import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myToken: localStorage.getItem('myToken') ? localStorage.getItem('myToken') : '',
    userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : '',
    cateList: [],
  },
  getters: {

  },
  mutations: {
    changeLogin (state, user) {  //这里的state对应上面状态state
      state.myToken = user.myToken;
      state.userName =user.userName;
      localStorage.setItem('myToken', user.myToken);
      localStorage.setItem('userName', user.userName);
    },
    moveToken(state){
      state.myToken = '';
      state.userName = '';
      localStorage.removeItem('myToken');
      localStorage.removeItem('userName');
    },
    getCateList(state,cateList){
      state.cateList = cateList;
    }
    // getToken() {
    //   this.state.myToken = localStorage.getItem('mytoken');
    //   this.state.userName = localStorage.getItem('userName');
    //   if (this.state.myToken) {
    //     this.state.flag = true;
    //   }
    // },
    // addToken(token, userName) {
    //   console.log(token);
    //   console.log(userName);
    //   localStorage.setItem('mytoken', token);
    //   localStorage.setItem('userName', userName);
    //   this.state.myToken = localStorage.getItem('mytoken');
    //   this.state.userName = localStorage.getItem('userName');
    //   if (this.state.myToken) {
    //     this.state.flag = true;
    //   }
    // },
  },
  actions: {

  },
  modules: {
  }
})
