<template>
<div class="loginwraper">
    <div class="logintitle">
       <h2>
 cloud后台管理登录界面</h2>
    </div>
    <el-form :model="ruleForm" class="demo-ruleForm">
            <el-form-item label="用户名:" prop="username" > 
                <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
                <el-form-item label="密码:" prop="password">
                <el-input v-model="ruleForm.password" type='password' placeholder="请输入密码"></el-input>
            </el-form-item>

            <el-button @click="handlelogin" class="loginbtn" type="primary">
                登录
            </el-button>

    </el-form>

</div>
    
</template>


<script>
import { Message } from "element-ui";

export default {
  name: "login",
  data() {
    return {
      userdata: {},
      ruleForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handlelogin() {
      this.$axios.post("/login", this.ruleForm).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.$store.state.userinfo = res.data;

          this.$message({
            showClose: true,
            message: "登录成功！",
            type: "success"
          });
          setTimeout(() => {
            this.$router.push({ path: "/home" });
          }, 2000);
        }
      });
    }
  }
};
</script>
<style>
.logintitle {
  font-size: 16px;
  font-weight: 400;
}
.loginwraper {
  text-align: center;
}
.demo-ruleForm {
  width: 400px;
  border: 1px solid #f3f3f3;
  margin: 20px auto;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
}
.loginbtn {
  width: 100%;
  box-sizing: border-box;
}
</style>
