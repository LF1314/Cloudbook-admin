
<template>
    <div class="wrper">
       <div>
           <h4> 添加分类</h4>
       </div>
       <div class="message">
            <div class="item1">
             <el-input type="text" placeholder="输入类名" v-model="classdata.title"></el-input>
           </div>
           <div class="item2">
               <pic v-model="classdata.icon"></pic>
                <p><span>分类icon</span></p>
           </div>
         <div>
            <el-button type="info" class="btn" @click="addclass">
               提交
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
      classdata: {
        title: "",
        icon: ""
      }
    };
  },
  components: {
    pic
  },
  methods: {
    addclass() {
      this.$axios.post("/category", this.classdata).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.$router.push({ path: "classlist" });
        } else {
          this.$message.error("添加失败！");
        }
      });
    }
  }
};
</script>

<style scope>
.wrper {
  padding: 10px;
}
.message {
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 2px solid #f5f5f5;
  border-radius: 3px;
  padding: 20px;
  margin-left: 100px;
}
.message div {
  margin-top: 10px;
}
.item2 {
  font-size: 13px;
  color: #666;
}
.item2 p {
  width: 100px;
  text-align: center;
}
.btn {
  width: 100px;
}
</style>






























