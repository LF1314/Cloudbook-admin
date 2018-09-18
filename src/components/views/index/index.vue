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
   <div class="lunbotu">
     <div class="lunbotuss">
        <lunbotu v-model="imgurls"></lunbotu>
     </div>
     <div class="wenzi">
       <p>最近更新书籍轮播图</p>
     </div>
   </div>
 </div>
    
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "index",
  components: {
    lunbotu: () => import("../pic/lunbotu")
  },
  data() {
    return {
      imgurls: [],
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
    // this.$axios.get("/swiper", { pn: 1, size: 7 }).then(res => {
    //   this.imgurls = res.data;
    // });
    this.getallswiper();
  },
  methods: {
    //获取所有的轮播图
    getallswiper() {
      let allswiper = [];
      let pn = 1;
      let _this = this;
      function getsw(pn) {
        _this.$axios.get("/swiper", { pn: pn, size: 10 }).then(res => {
          if (res.data.length == 0) {
            _this.imgurls = allswiper;
            console.log(_this.imgurls);
          } else {
            allswiper = [...allswiper, ...res.data];
            pn++;
            getsw(pn);
          }
        });
      }
      getsw(pn);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.wenzi {
  float: right;
  font-size: 18px;
  width: 500px;
}
.wenzi p {
  text-align: center;

  background: linear-gradient(to bottom, #fff 0%, rgb(95, 89, 153) 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.lunbotuss {
  width: 500px;
  float: right;
  margin-top: 40px;
}
.wraper {
  padding: 10px;
  background-color: rgb(243, 228, 243);
  overflow: hidden;
}
.user {
  float: left;
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

