// 修改个人信息
<template>
<div>
   <h3>
       修改个人信息
   </h3>
   <div class="userinfo">
       <div class="userimg">
         <pic v-model="userinfo.avatar"></pic>
       </div>
       <div class="item">
            <span>用户名：</span>
            <el-input type="text" placeholder="用户名" :disabled="true" v-model="userinfo.username"> </el-input>
       </div>
       <div class="item">
           <span>昵称：</span>
           <el-input type="text" placeholder="昵称" v-model="userinfo.nickname"></el-input>
       </div>
          <div class="item"><span>email：</span>
             <el-input type="email" v-model="userinfo.email" placeholder="@qq.com"></el-input>
          </div>
            <div class="item"><span>描述：</span><el-input type="textarea" v-model="userinfo.desc"></el-input>
            </div>
   <div class="btn">
           <el-button type="success" @click="editadminmessage">
               修改
           </el-button>
           <el-button type="waring">
               重置
           </el-button>
   </div>     
   </div>  
</div>   
</template>

<script>
import { Message } from "element-ui";
import pic from "../pic/pic";
export default {
  name: "editadmin",
  data() {
    return {
      userinfo: {
        avatar: "",
        username: "",
        nickname: "",
        email: "",
        desc: ""
      }
    };
  },
  created() {
    this.userinfo = this.$store.state.userinfo;
  },
  components: {
    pic
  },
  methods: {
    editadminmessage() {
      this.$axios.put("/user/userInfo", this.userinfo).then(res => {
        if (res.code == 200) {
          this.$message({
            showClose: true,
            message: "修改成功！",
            type: "success"
          });
          this.$store.commit("SETUSSERINFO", this.userinfo);
          setTimeout(() => {
            this.$router.push();
          });
        }
      });
    }
  }
};
</script>


<style scoped>
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
































