<template>
 <div class="wraper">

   <div class="user">
      <h3>personmessage</h3>
      <div class="userimgs">
      <img :src="userinfo.avatar" alt="头像">
    </div>
    <div class="username">
      <p><span>用户名：</span>{{userinfo.username}}</p>
    </div>
    <div class="username">
      <p><span>昵称：</span>{{userinfo.nickname}}</p>
    </div>
    <div class="userdesc">
      <p><span>签名：</span>{{userinfo.desc}}</p>
    </div>
   </div>
 
 </div>
    
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "index",
  data() {
    return {
      userinfo: {
        username: "",
        desc: "",
        nickname: "",
        avatar: ""
      }
    };
  },
  created() {
    this.userinfo = this.$store.state.userinfo;
    console.log(this.userinfo);
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.wraper {
  padding: 10px;
  background-color: rgb(243, 228, 243);
}
.user {
  width: 300px;
  margin: 50px;
  border: 1px dashed #f2f3f3;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 10px;
}
.userimgs img {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 30px;
}
.username {
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  color: #333;
  margin-top: 5px;
  text-align: center;
}
.userdesc {
  height: 80px;
  line-height: 40px;
  color: #666;
  font-size: 16px;
  text-align: center;
}
</style>

