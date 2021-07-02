<template>
  <div>
    <el-form
      ref="loginForm"
      label-width="80px"
      class="login-box"
    >
      <h3 class="login-title">个人中心</h3>
      <el-form-item class="info" label="账号" prop="username">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ this.username }}</span>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ this.tel }}</span>
      </el-form-item>
      <el-form-item label="创建时间" prop="time">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ this.time }}</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="exitLogin">退出登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState,mapMutations} from "vuex";
export default {
  name: "User",
  computed: {
    ...mapState(["myToken", "userName"]),
  },
  created() {
    this.getInfo();
  },
  data() {
    return {
      username: "",
      password: "",
      tel: "",
      time: "",

      // 对话框显示和隐藏
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations(["changeLogin", "moveToken"]),
    getInfo() {
      this.$http
        .request({
          method: "post",
          url: "/user/getInfo",
          data: {
            username: this.userName,
          },
        })
        .then((res) => {
          let {  username, tel, time } = res.data;
          this.username = username;
          this.tel = tel;
          this.time = time;
        });
    },
    exitLogin() {
        this.moveToken();
        this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 70px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>