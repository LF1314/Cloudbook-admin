<template>
<div class="swperwraper">
    <div class="breadhead">
 <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>轮播图列表</el-breadcrumb-item>
 
</el-breadcrumb>
     
    </div>
    <el-table
    :data="swperData"
    stripe
    style="width: 100%">
    <el-table-column
      label="封面"
      width="180">
      <template slot-scope="scope">
          <img :src="scope.row.img" alt="封面" class="swperimg">
      </template>
    </el-table-column>
    <el-table-column
      prop="title"
      label="类名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="book.author"
      label="作者">
    </el-table-column>
  </el-table>


</div>
    
</template>

<script>
export default {
  name: "swperlist",
  data() {
    return {
      swperData: [],
      pn: 1
    };
  },
  created() {
    this.$axios.get("/swiper", { pn: this.pn, size: 5 }).then(res => {
      console.log(res.data);
      this.swperData = res.data;
    });
  }
};
</script>


<style scope>
.swperimg {
  width: 150px;
}
.breadhead {
  height: 20px;
  padding: 10px;
  font-weight: 400;
  line-height: 30px;
  border-bottom: 1px solid #f3f3f3;
}
</style>
