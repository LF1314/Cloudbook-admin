<template>
    
 <div class="wraper">
 <div class="navto">
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item :to="{path:'classlist'}">分类列表</el-breadcrumb-item>
  <el-breadcrumb-item >编辑分类</el-breadcrumb-item>
  </el-breadcrumb>
 </div>
   <h3>
       修改分类
   </h3>
   <div class="userinfo">
       <div class="userimg">
      <div>
           
         <img :src="datas.icon" alt="icon" class="iconimg">
          <i>原本图片</i>
      </div>
        

        <div>
             <pic v-model="datas.icon">
         </pic>
         <span>上传新图片</span>
        </div>
        
       </div>
       <div class="item item1">
            <span>类名：</span>
            <el-input type="text" placeholder="类名" v-model="datas.title"> </el-input>
       </div>
       <div class="item item2">
           <span>索引：</span>
           <el-input type="text" placeholder="索引" v-model="datas.index"></el-input>
       </div>
      
      
         <div>
           <el-button type="success" class="btn" >
               提交 
           </el-button>
 
      
        </div>
</div>
 </div>
</template>
<script>
import pic from "../pic/pic";
export default {
  name: "changeclass",
  data() {
    return {
      typeid: "",
      datas: {
        index: "",
        icon: "",
        title: ""
      }
    };
  },
  components: {
    pic
  },
  created() {
    console.log(this.$route.query.id);
    this.typeid = this.$route.query.id;
    this.gettype();
  },
  methods: {
    gettype() {
      this.$axios.get(`/category/${this.typeid}`).then(res => {
        console.log(res.data);
        this.datas = res.data;
        console.log(this.datas);
      });
    }
  }
};
</script>

<style scope>
.userimg {
  display: flex;
  justify-content: space-around;
}
.userimg div {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.iconimg {
  width: 100px;
}
.wraper {
  padding-left: 10px;
}
.navto {
  height: 20px;
  padding: 10px;
  font-weight: 400;
  line-height: 30px;
  border-bottom: 1px solid #f4f4f4;
}
.item {
  margin-top: 20px;
}
.item span {
  display: inline-block;
  width: 100px;
  line-height: 100%;
  height: 100%;
}
.item1 {
  width: 300px;
}
.item2 {
  width: 200px;
}
.userinfo {
  padding: 40px;
  width: 400px;
  border: 1px solid #f4f4f9;
  margin: 0 auto;
}
.btn {
  width: 200px;

  margin: 10px auto 0;
}
</style>
