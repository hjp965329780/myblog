<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="d-flex"
      mode="horizontal"
      router
      type="flex"
    >
      <div class="d-flex mr-auto">
        <el-menu-item index="/user" v-if="userName">{{userName}}</el-menu-item>
        <el-menu-item index="/login" v-else>登录</el-menu-item>
        <el-menu-item index="/signin">注册</el-menu-item>
      </div>
      <el-menu-item index="/home"> 首页</el-menu-item>
      <el-menu-item index="/archive">待定</el-menu-item>
      <el-menu-item index="/about"> 关于</el-menu-item>
      <!-- <el-submenu index="">
        <template slot="title">{{ $t("header.language") }}</template>
        <el-menu-item @click="toggleLang('zh')">{{
          $t("header.chinaese")
        }}</el-menu-item>
        <el-menu-item @click="toggleLang('en')">{{
          $t("header.english")
        }}</el-menu-item>
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed:{
    ...mapState(["myToken","userName"]),
  },
  data() {
    return {
      activeIndex: "/home",
    };
  },
  created() {
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    toggleLang(lang) {
      if (lang === "zh") {
        localStorage.setItem("locale", "zh");
        this.$i18n.locale = localStorage.getItem("locale");
        this.$message({
          message: "切换为中文！",
          type: "success",
        });
      } else if (lang === "en") {
        localStorage.setItem("locale", "en");
        this.$i18n.locale = localStorage.getItem("locale");
        this.$message({
          message: "Switch to English!",
          type: "success",
        });
      }
    },
    // getToken() {
    //   this.myToken = localStorage.getItem("mytoken");
    //   if (this.myToken) {
    //     this.flag = true;
    //     this.userName = this.myToken.name;
    //     console.log(this.name);
    //   }
    // },
  },
};
</script>

<style scoped>
.nav{
  text-decoration: none;
}
</style>