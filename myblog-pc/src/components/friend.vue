<template>
  <div class="friend">
    <el-card class="box-card">
      <div slot="header" class="d-flex align-items-center">
        <img class="card-icon" src="/images/lianjie.png" />
        <span>友链</span>
      </div>
      <div class="item">
        <a href="#">黄金鹏的博客</a>
      </div>
      <div class="item">
        <a href="#">李淑霞的博客</a>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "friend",
};
</script>

<style scoped>
.box-card .item a {
  text-decoration: none;
  /*color: #F56C6C;*/
}
.box-card span {
  font-weight: bold;
}
.card-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>