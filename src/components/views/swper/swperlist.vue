<template>
<div class="swperwraper">
    <div class="breadhead">
 <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: 'index' }">首页</el-breadcrumb-item>
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
     <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button type="info">
          查看详情
        </el-button>
          <el-button type="success">
          修改
        </el-button>
      </template>
    </el-table-column>
  </el-table>

<div class="block">

  <el-pagination
    layout="prev, pager, next"
    @current-change='current'
    :total="100">
  </el-pagination>
</div>
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
    this.getswper(this.pn);
  },
  methods: {
    getswper(pns) {
      this.$axios.get("/swiper", { pn: pns, size: 5 }).then(res => {
        // console.log(res.data);
        this.swperData = res.data;
        if (res.data.length == 0) {
          this.$message.error("到底了！！！！");
        }
      });
    },
    prepage(e) {},
    current(e) {
      // console.log(e);
      this.getswper(e);
    }
  }
};
</script>


<style scope>
.swperimg {
  height: 50px;
  width: 50px;
}
.breadhead {
  height: 20px;
  padding: 10px;
  font-weight: 400;
  line-height: 30px;
  border-bottom: 1px solid #f3f3f3;
}
.swperwraper {
  position: relative;
  padding-bottom: 70px;
}
.block {
  position: absolute;
  bottom: 20px;
  right: 0;
}
</style>
