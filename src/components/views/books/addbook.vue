<template>

<div>
   <h3>
       添加书籍
   </h3>
   <div class="userinfo">
       <div class="userimg">
         <pic v-model="books.img">
         </pic>
       </div>
       <div class="item">
            <span>书名：</span>
            <el-input type="text" placeholder="请输入书名" v-model="books.desc"> </el-input>
       </div>
       <div class="item">
           <span>作者：</span>
           <el-input type="text" placeholder="请输入作者名" v-model="books.author"></el-input>
       </div>
        <div class="item" style="padding-left:126px">
          <el-select v-model="typetitle" placeholder="请选择分类">
             <el-option v-for="(item,index) in alltypes" :key = 'index'
              :value="item.title"
             >
             </el-option>
          </el-select>
       </div>
          <div class="item">
            <span>URL：</span>
            <el-input type="text" placeholder="请输入链接" v-model="books.url"> </el-input>
       </div>
           <el-button type="success" class="btn11" @click="addbook">
               提交 
           </el-button>
   </div>
</div>
    
</template>
<script>
import pic from "../pic/pic";
export default {
  name: "addbook",
  data() {
    return {
      alltypes: [],
      typetitle: "",
      books: {
        desc: "",
        img: "",
        author: "",
        typeId: "",
        url: ""
      }
    };
  },
  components: {
    pic
  },
  methods: {
    addbook() {
      this.alltypes.forEach(item => {
        if (item.title == this.typetitle) {
          this.books.typeId = item._id;
          console.log(this.books);
          this.$axios.post('/book',this.books).then(res=>{
            if(res.code == 200){
              this.$message.success({message:"添加成功！"})
              this.$router.push('booklist')
            }
          })
        }
      });
    }
  },
  created() {
    this.$selfmethod.getalltype();
    this.alltypes = this.$store.state.alltypes;
  }
};
</script>


<style>
.userimg {
  display: inline-block;
}
.userinfo {
  padding: 30px;
  width: 500px;
  border: 1px solid #f4f9f9;
  border-radius: 3px;
  margin-left: 100px;
  margin-top: 40px;
}
.item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}
.item span {
  display: inline-block;
  width: 170px;
  text-align: right;
  font-size: 15px;
  color: #666;
}
.btn11 {
  margin-top: 10px;
  box-sizing: border-box;
  width: 75%;
  margin-left: 25%;
}
</style>





















