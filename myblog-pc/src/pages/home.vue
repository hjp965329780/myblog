<template>
  <div class="home">
    <el-row id="artList" type="flex" justify="space-around">
      <el-col :span="16" >
        <el-row class="art-item" v-for="blog in blogList" :key="blog.blogId">
          <el-card shadow="hover">
            <h5>
              <router-link to="/article" tag="span" class="art-title">{{
                blog.title
              }}</router-link>
            </h5>
            <el-row
              class="art-info d-flex align-items-center justify-content-start"
            >
              <div class="art-time">
                <i class="el-icon-time"></i>{{ blog.postTime }}
              </div>
              <div class="d-flex align-items-center">
                <img class="tag" src="/images/tag.png" />：
                <el-tag size="mini">{{ blog.cateName }}</el-tag>
              </div>
            </el-row>
            <el-row class="art-body">
              <div class="side-img hidden-sm-and-down">
                <img class="art-banner" src="/images/vue.jpg" />
              </div>
              <div class="side-abstract">
                <div class="art-abstract">
                  {{ blog.content }}
                </div>
                <div class="art-more">
                  <router-link to="/article" tag="span">
                    <el-button plain>阅读全文</el-button>
                  </router-link>
                  <div class="view">
                    <i class="el-icon-view"></i>{{ blog.readCount }}
                  </div>
                </div>
              </div>
            </el-row>
          </el-card>
          <img class="star" src="/images/star.png" />
        </el-row>

        <!-- <div class="block pagination">
          <el-pagination
            background="#f9f9f9"
            layout="prev, pager, next"
            :total="total"
            @current-change="current_change"
          >
          </el-pagination>
        </div> -->
      </el-col>
      <el-col :span="6" class="hidden-sm-and-down" id="side">
        <div class="item">
          <tag></tag>
        </div>
        <div class="item">
          <friend></friend>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import friend from "../components/friend";
import tag from "../components/tag";
import { mapState, mapMutations } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapState(["cateList"]),
  },
  components: {
    friend,
    tag,
  },
  data() {
    return {
      blogList: [],
      
    };
  },
//   mounted:function() {
//  this.countNum();
//    },
  created() {
    this.loadBlogsData();
	  this.countNum();
  },
  methods: {
    ...mapMutations(["getCateList"]),
    loadBlogsData() {
      let cateId = this.$route.params.cateId;
	  // console.log(cateId);
      this.$http
        .request({
          url: "/blog/list",
          params: {
            cateId,
          },
        })
        .then((res) => {
          let { state, blogs, categories } = res.data;
          this.blogList = blogs;
          // console.log("num"+this.blogList.length)
          //   console.log(this.blogList);
          this.getCateList(categories);
          // console.log(this.cateList);
        });
    },
    countNum() {
      this.total = this.blogList.length;
	    // console.log(this.total);
    },
    postBlog() {
      this.$router.push("/blog/post");
      // let myToken = localStorage.getItem("mytoken");
      // if (myToken) {
      //   this.$router.push("/blog/post");
      // } else {
      //   alert("请先登录");
      //   this.$router.push("/user/login");
      // }
    },
  },
};
</script>

<style scoped>
#side .item {
  margin-bottom: 30px;
}

.art-item {
  margin-bottom: 30px;
  position: relative;
}

.art-item .star {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  right: 0;
}

img.tag {
  width: 16px;
  height: 16px;
}

.art-title {
  border-left: 3px solid #f56c6c;
  padding-left: 5px;
  cursor: pointer;
}

.art-title:hover {
  padding-left: 10px;
  color: #409eff;
}

.art-time {
  margin-right: 20px;
}

.art-body {
  display: flex;
  padding: 10px 0;
}

.side-img {
  height: 150px;
  width: 270px;
  overflow: hidden;
  margin-right: 10px;
}

img.art-banner {
  width: 100%;
  height: 100%;
  transition: all 0.6s;
}

img.art-banner:hover {
  transform: scale(1.4);
}

.side-abstract {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.art-abstract {
  flex: 1;
  color: #aaa;
}

.art-more {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.art-more .view {
  color: #aaa;
}
h5 {
  font-size: 18px;
}
.pagination {
  background-color: #f9f9f9;
}
</style>