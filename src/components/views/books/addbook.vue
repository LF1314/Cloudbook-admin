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
        <div class="item">
           <span>分类id：</span>
           <el-input type="text" placeholder="请输入id" v-model="books.typeId"></el-input>
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
      this.$axios.post("/book", { data: this.books }).then(res => {
        if (res.code == 200) {
          console.log("chengong");
        }
      });
    }
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
  width: 150px;
  text-align: right;
}
.btn11 {
  margin-top: 10px;
  box-sizing: border-box;
  width: 75%;
  margin-left: 22%;
}
</style>





















