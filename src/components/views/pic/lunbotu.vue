//封装属于自己的轮播图
<template>
  <el-carousel :interval="3000" type="card" height="130px" v-model="lunbotu">
    <el-carousel-item v-for="(item,index) in lunbotu" :key="index">
      <!-- <h3>{{ item }}</h3> -->
      <img :src="item.img" alt="" class="imgurlsss">
      <p class="itepp">{{item.title}}</p>
    </el-carousel-item>
  </el-carousel>
</template>
<script >
export default {
  name: "lunbotu",
  props: {
    value: {
      type: Array
    }
  },
  data() {
    return {
      lunbotu: this.value
    };
  },
  watch: {
    value(val) {
      this.lunbotu = val;
      this.$emit("input", this.lunbotu);
    }
  }
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.imgurlsss {
  display: block;
  height: 80%;
  margin: 0 auto;
}
.itepp {
  text-align: center;
  height: 20%;
  color: #666;
  font-size: 15px;
}
</style>