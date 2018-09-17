<template>
  <div class="uploadimg">
        <!-- 使用form表单上传图片 -->
     <form action="https://upload-z1.qiniup.com" method="post" enctype="multipart/form-data">
        <input type="file" name="file" >
        <input type="text" v-model="token" name="token">
        <button>
            上传
        </button>
     </form>

        <!-- 使用axios上传图片 -->
        <div class="input">
            <input type="file" @change="upimgs">
            <div>
                <img :src="imgurl" alt="" class="myimgss">
            </div>
            <!-- <el-button type="success" @click="uploadimgs">上传图片</el-button> -->
        </div>
        <!-- 自己封装上传图片的组件 -->
       <div class="zujian">
           <p>组件图片</p>
           <uploadCom @getimg="getimgurl"></uploadCom>
       </div>

       <!-- 自己封装选择框 -->
       <div class="checkbox">
           <radio></radio>
       </div>
  </div>

</template>
<script>
import axios from "axios";
export default {
  name: "uploadimg",
  components: {
    uploadCom: () => import("./upload-Com"),
    radio: () => import("./radio")
  },
  data() {
    return {
      imgurl: "",
      token: ""
    };
  },
  created() {
    this.gettoekn();
  },
  methods: {
    gettoekn() {
      axios.get("http://upload.yaojunrong.com/getToken").then(res => {
        this.token = res.data.data;
      });
    },
    //   通过axios上传图片
    upimgs(e) {
      console.log(e);
      let file = e.target.files[0];
      let from = new FormData();
      from.append("file", file);
      from.append("token", this.token);
      axios
        .post("https://upload-z1.qiniup.com", from, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          console.log(res);
          this.imgurl = res.data.url;
        });
    },
    getimgurl(msg) {
      this.imgurl = msg;
    }
  }
};
</script>

<style scoped>
.uploadimg {
  padding: 40px;
}
.zujian {
  padding-top: 100px;
}
.input {
  padding-top: 40px;
}
.myimgss {
  width: 100px;
  height: 100px;
}
</style>
