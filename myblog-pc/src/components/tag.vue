<template>
  <div class="tag">
    <el-card class="box-card">
      <div slot="header" class="d-flex align-items-center">
        <img class="card-icon" src="/images/biaoqian.png" />
        <span>文章分类</span>
      </div>
      <div class="text item">
        <el-tag
          size="mini"
          v-for="category in cateList"
          :key="category.cate_id"
          class="tag-item"
          type="success"
		      @click="tag(category.cate_id)"
        >
          {{ category.cate_name }}
        </el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "tag",
  computed: {
    ...mapState(["cateList"]),
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    tag(cateId) {
    //  console.log("aaa"+cateId);
       this.$router.push("/cateId/" + cateId);
     },   
  },
};
</script>

<style scoped>
.box-card .item:hover {
  color: #409eff;
  cursor: pointer;
}

.box-card span {
  font-weight: bold;
}

.card-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.tag-item {
  margin-right: 10px;
}
.tagBtn{
	text-decoration: none;
}
</style>