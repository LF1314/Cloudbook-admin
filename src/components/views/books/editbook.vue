
// 修改图书
<template>
<div>
  <div class="eliconarrowright">
  <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: 'index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: 'booklist'}">书籍列表</el-breadcrumb-item>
        <el-breadcrumb-item >编辑书籍</el-breadcrumb-item>
  </el-breadcrumb>
  </div>
<div class="booeditwraper">

    <h4>修改图书</h4>
    <el-form :model="bookdata" status-icon  label-width="100px" class="demo-ruleForm">
  <el-form-item label="作者">
    <el-input   v-model="bookdata.author"></el-input>
  </el-form-item>
  <el-form-item label="索引">
    <el-input type="text"  v-model="bookdata.index"></el-input>
  </el-form-item>
  <el-form-item label="typeid"  >
    <el-input :disabled="true" v-model="bookdata.type"></el-input>
  </el-form-item>
   <el-form-item label="书籍id" >
    <el-input :disabled="true"  v-model="bookdata.book_id"></el-input>
  </el-form-item>

  <el-form-item label="描述" >
    <el-input type="textarea" v-model="bookdata.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="editbook">修改</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form>
<div class="bookimgs">
    <pic v-model="bookdata.img"></pic>
    <i>书籍封面 </i>
</div>
</div>
     
</div>

</template>


<script>
import pic from "../pic/pic";
export default {
  name: "editbook",
  components: {
    pic
  },
  data() {
    return {
      bookid: "",
      bookdata: {
        book_id: "",
        index: "",
        desc: "",
        author: "",
        img: "",
        type: ""
      }
    };
  },
  methods: {
    editbook() {
      this.$axios
        .put("/book", this.bookdata, {
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          if (res.code == 200) {
            this.$message.success({ message: "修改成功！" });
            setTimeout(() => {
              this.$router.push("booklist");
            });
          } else {
            this.$message.error("修改失败！");
          }
        });
    }
  },
  created() {
    this.bookid = this.$route.query.id;
    // console.log(this.bookid);

    this.$axios.get(`/book/${this.bookid}`).then(res => {
      console.log(res.data);
      this.bookdata = res.data;
      this.bookdata.book_id = this.bookid;
      //   console.log(this.bookdata);
    });
  }
};
</script>

<style scoped>
.booeditwraper {
  width: 500px;
  padding: 20px;
}
.eliconarrowright {
  margin: 10px;
  border-bottom: 2px dashed #f4f4f4;
  padding-bottom: 10px;
}
.bookimgs {
  position: absolute;
  right: 200px;
  top: 200px;
  text-align: center;
}
</style>

























