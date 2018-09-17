// 封装自己的上传图片的组件如下

<template>
    <div class="labelwraper">
        <label  class="labelss">
            <input type="file" style="display:none" @change="upimg">
            <i class="el-icon-plus"></i>
            <img :src="imgurl" alt="" v-if="imgurl" class="labelss">
        </label>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "uploadCom",
  data() {
    return {
      imgurl: "",
      token: ""
    };
  },
  methods: {
    upimg(e) {
      console.log(e);
      let file = e.target.files[0];
      let form = new FormData();
      form.append("file", file);
      form.append("token", this.token);
      axios.post("https://upload-z1.qiniup.com", form).then(res => {
        this.imgurl = res.data.url;
        this.$emit("getimg", this.imgurl);
      });
    },
    gettoekn() {
      axios.get("http://upload.yaojunrong.com/getToken").then(res => {
        this.token = res.data.data;
      });
    }
  },
  created() {
    this.gettoekn();
  }
};
</script>
<style scoped>
.labelss {
  display: block;
  border: 1px dashed #f2f2f2;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
}
.labelss:hover {
  border: 1px dashed #d1cfcf;
}
.el-icon-plus {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #d1cfcf;
}
</style>
