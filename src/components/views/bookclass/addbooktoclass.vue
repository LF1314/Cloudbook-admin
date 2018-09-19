//添加书籍到分类
<template>
   <div>
       <div>
           <h4>添加书籍到分类</h4>
       </div>
       <div class="addboooktoclass">
            <el-select v-model="bookid" placeholder="请选择对应的书籍">
            <el-option v-for="(item,index) in books" :key="index" :label="item.title" :value="item._id"></el-option>
            </el-select>
            <el-select v-model="typeid" placeholder="请选择对应的分类">
            <el-option v-for="(item,index) in types" :key="index" :label="item.title" :value="item._id"></el-option>
            </el-select>
            <el-button type="primary" @click="handlebook">提交</el-button>
       </div>
   </div>
</template>
<script>
export default {
  name: "addbooktoclass",
  data() {
    return {
      books: [],
      types: [],
      bookid: "",
      typeid: ""
    };
  },
  methods: {
    handlebook() {
      this.$axios
        .post(`/category/${this.typeid}/book/${this.bookid}`)
        .then(res => {
          if (res.code == 200) {
            this.$message.success({ message: "修改成功！" });
            this.$router.push("classlist");
          }
        });
    }
  },
  created() {
    this.$selfmethod.getbooks();
    this.$selfmethod.getallswiper();
    this.types = this.$store.state.alltypes;
    this.books = this.$store.state.allbooks;
  }
};
</script>

<style scoped>
.addboooktoclass {
  width: 300px;
  margin-top: 60px;
  line-height: 80px;
  padding: 10px;
  border: 2px dashed #f5f4f4;
  border-radius: 20px;
  margin-left: 60px;
}
</style>
