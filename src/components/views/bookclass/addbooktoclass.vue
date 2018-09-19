//添加书籍到分类
<template>
   <div>
       <div>
           <h4>添加书籍到分类</h4>
       </div>
       <div class="addboooktoclass">
            <el-select v-model="booktitle" placeholder="请选择对应的书籍">
            <el-option v-for="(item,index) in books" :key="index" :value="item.title"></el-option>
            </el-select>
            <el-select v-model="typetitle" placeholder="请选择对应的分类">
            <el-option v-for="(item,index) in types" :key="index" :value="item.title"></el-option>
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
      booktitle: "",
      typetitle: ""
    };
  },
  methods: {
    handlebook() {
      let bookid = "";
      let typeid = "";
      this.books.forEach(ele => {
        if (this.booktitle == ele.title) {
          bookid = ele._id;
        }
      });
      this.types.forEach(ele => {
        if (ele.title == this.typetitle) {
          typeid = ele._id;
        }
      });
      this.$axios.post(`/category/${typeid}/book/${bookid}`).then(res => {
        if (res.code == 200) {
          this.$message.success({ message: "修改成功！" });
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
