<template>
  <div class="wra">
  <div class="navto">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item >添加轮播图</el-breadcrumb-item>
        </el-breadcrumb>
 </div>

   <div class="inner">
 <el-form :model="form" label-width="80px">
    <el-form-item label="轮播图名">
    <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="选择图书">
    <el-select v-model="form.booktitle" placeholder="请选择图书">
      <el-option v-for="(item,index) in books" :key="index"
        :value="item.title">{{item.title}}</el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="索引">
    <el-input-number v-model="form.index" ></el-input-number>
    </el-form-item>

  <el-form-item label="添加封面">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <template>
    <div v-show="form.delivery" class="imgpic ">
      <pic v-model="form.img"></pic>
    </div>
  </template>
  <el-form-item>
    <el-button type="primary" @click="submit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>

   </div>
     

  </div>
    
</template>
<script>
import pic from "../pic/pic";
export default {
  name: "addswper",
  data() {
    return {
      books: [],
      titles: [],
      form: {
        title: "",
        img: "",
        index: 1,
        book: {},
        booktitle: "",
        delivery: false
      }
    };
  },
  components: {
    pic
  },
  methods: {
    getbooks() {
      this.$axios.get("/book").then(res => {
        this.books = res.data;
        console.log(this.books);
      });
    },
    submit() {
      this.books.forEach(item => {
        if (item.title == this.form.booktitle) {
          this.form.book = item;
          this.$axios.post("/swiper", this.form).then(res => {
            if (res.code === 200) {
              this.$router.push({ path: "swperlist" });
            } else {
              this.$message.error("添加失败！");
            }
          });
        }
      });
      console.log(this.form);
    }
  },
  mounted() {
    this.getbooks();
  }
};
</script>

<style>
.inner {
  width: 500px;
  padding: 20px;
  margin-top: 30px;
  margin-left: 40px;
  border: 3px dashed #f4f4f4;
  border-radius: 4px;
  border-radius: 10px;
}
.navto {
  height: 20px;
  padding: 10px;
  font-weight: 400;
  line-height: 30px;
  border-bottom: 2px solid #f3f3f3;
}
.imgpic {
  transform: translate3d(200px, 0, 0);
  margin-bottom: 10px;
}
</style>
