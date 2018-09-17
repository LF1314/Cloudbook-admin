<template>
<div class="loginwraper">
    <div class="logintitle">
       <h2>
 cloud后台管理登录界面</h2>
    </div>
    <el-form :model="ruleForm" :rules="rule"  class="demo-ruleForm" ref="ruleForm">
            <el-form-item label="用户名:" prop="username" > 
                <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
                <el-form-item label="密码:" prop="password">
                <el-input v-model="ruleForm.password" type='password' placeholder="请输入密码"></el-input>
            </el-form-item>

            <el-button @click.native="submitForm('ruleForm')" class="loginbtn" type="primary">
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
    const checkusername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        return callback();
      }
    };
    const checkpassword = (rule, value, callback) => {
      if (value && value.length >= 5) {
        return callback();
      } else {
        return callback(new Error("密码不是我想要滴"));
      }
    };
    return {
      userdata: {},
      ruleForm: {
        username: "",
        password: ""
      },
      rule: {
        username: [{ validator: checkusername, trigger: "blur" }],
        password: [{ validator: checkpassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(from) {
      this.$refs[from].validate(valid => {
        if (valid) {
          this.handlelogin();
        } else {
          this.$message.error("用户信息有误");
          return false;
        }
      });
    },
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
          }, 1000);
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
  margin-top: 40px;
}
* {
  margin: 0;
  padding: 0;
}
.loginwraper {
  background-color: #a7a7c4;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.demo-ruleForm {
  width: 400px;
  border: 1px solid #f3f3f3;
  margin: 20px auto;
  padding: 20px;
  border-radius: 5px;
  background-color: rgb(252, 237, 237);
}
.loginbtn {
  width: 100%;
  box-sizing: border-box;
}
</style>
