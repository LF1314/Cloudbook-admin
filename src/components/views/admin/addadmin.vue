<template>

<div>
   <h3>
       添加管理员
   </h3>
   <div class="userinfo">
       <div class="userimg">
         <pic v-model="infoData.avatar"></pic>

       </div>
       <div class="item">
            <span>用户名：</span>
            <el-input type="text" placeholder="请输入用户名" v-model="infoData.username"> </el-input>
       </div>
       <div class="item">
           <span>昵称：</span>
           <el-input type="text" placeholder="请输入昵称" v-model="infoData.nickname"></el-input>
       </div>
          <div class="item"><span>email：</span>
             <el-input type="email" v-model="infoData.email" placeholder="@qq.com"></el-input>
          </div>
        <div class="item">
            <span>密码：</span>
            <el-input type="password" v-model="infoData.password"></el-input>
        </div>
       <div class="item">
           <span>确认密码：</span>
           <el-input type="password" v-model='curentpasswod'></el-input>
           </div>
            <div class="item"><span>描述：</span><el-input type="textarea" v-model="infoData.desc"></el-input></div>
   <div class="btn">
       
           <el-button type="success" @click="addadmin">
               提交 
           </el-button>

           <el-button type="waring">
               重置
           </el-button>
   </div>
      
   </div>

   
</div>
    
</template>


<script>
import pic from "../pic/pic";
export default {
  data() {
    return {
      curentpasswod:'',
      infoData: {
        avatar: "",
        username: "",
        nickname: "",
        desc: "",
        password: "",
        email: ""
      }
    };
  },
  components: {
    pic
  },
  methods: {
    addadmin() {
      if(this.curentpasswod == this.infoData.password)
    {
        this.$axios.post("/user", this.infoData).then(res => {
        if (res.code == 200) {
          this.$message({
            showClose: true,
            message: "注册成功！",
            type: "success"
          });
          setTimeout(() => {
            this.$router.push({ path: "adminlist" });
          },1000);
        }
      });
    }
    else{    
       this.$message.error('两次输入的密码不一样哦！')
       this.curentpasswod = ''   

    }
    }
  }
};
</script>

<style>
.btn {
  text-align: center;
  width: 100%;
}
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
</style>