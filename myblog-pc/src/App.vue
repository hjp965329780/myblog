<template>
  <div class="app">
    <f-header
      :loginFlag="this.loginFlag"
      :class="{ navBarWrap: navBarFixed }"
    ></f-header>
    <el-row type="flex" justify="center" id="content">
      <el-col :xs="20" :md="20" :style="{ minHeight: minHeight + 'px' }">
        <router-view :key="this.$route.path"></router-view>
      </el-col>
    </el-row>
    <f-footer></f-footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      myToken: {},
      userName: "",
      minHeight: 0,
      navBarFixed: false,
      loginFlag: false,
    };
  },
  created() {
    // this.getToken();
  },
  components: {},
  methods: {
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 50) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
  },
  mounted() {
    let that = this;
    that.minHeight = document.documentElement.clientHeight;
    window.addEventListener("scroll", that.watchScroll);
    window.onresize = function () {
      that.minHeight = document.documentElement.clientHeight;
    };
  },
  // getToken() {
  //   this.myToken = localStorage.getItem("mytoken");
  //   if (this.myToken) {
  //     this.loginFlag = true;
  //     this.userName = this.myToken.name;
  //   }
  // },
};
</script>

<style scoped>
.app {
  font-family: "microsoft yahei";
}
#content {
  background-color: #f9f9f9;
  padding: 30px 0;
}
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}
</style>
