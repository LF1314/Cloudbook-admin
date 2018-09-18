// 修改个人信息
<template>
<div>
   <h3>
       修改个人信息
   </h3>
   <div class="userinfo" v-if="!ischangepass">
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
   <div class="changepassword">
     <el-switch
  v-model="ischangepass"
   active-text="修改密码"
    inactive-text="修改个人信息"
 >
</el-switch>
<div v-if="ischangepass" class="changepasswordwraper">
   <el-input placeholder="旧密码" v-model="oldpassword" class="itempass"></el-input>
   <el-input placeholder="新密码" v-model="newpassword" class="itempass"></el-input>
   <!-- <el-button @click="changemypassword">修改密码</el-button> -->
   <el-button  type="danger" @click="submit">修改密码</el-button>
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
      ischangepass: false,
      oldpassword: "",
      newpassword: "",
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
            this.$router.push("adminlist");
          }, 1000);
        }
      });
    },

    changemypassword() {
      this.$axios
        .put("/user/password", {
          password: this.oldpassword,
          new_password: this.newpassword
        })
        .then(res => {
          if (res.code == 200) {
            this.$message.success({
              message: "密码修改成功正在返回登录页>>>"
            });
            setTimeout(() => {
              this.$router.push("/");
            }, 2000);
          }
        });
    },
    submit() {
      if (this.oldpassword != this.$store.state.password) {
        this.$message.error("旧密码输入有误！");
      } else if (this.newpassword.length < 5) {
        this.$message.error("新密码格式不对 ！");
      } else {
        this.$confirm("修改密码想清楚哦！, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.changemypassword();
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    }
  }
};
</script>


<style scoped>
.changepasswordwraper {
  width: 300px;
  line-height: 30px;
  position: absolute;
  top: 80px;
  right: 480px;
  padding: 30px;
  border: 2px dashed #ddddd5;
  border-radius: 30px;
}
.itempass {
  margin-bottom: 20px;
}
.changepassword {
  position: absolute;
  top: 150px;
  right: 100px;
}
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
  border: 3px dashed #d5dfdf;
  border-radius: 30px;
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
































