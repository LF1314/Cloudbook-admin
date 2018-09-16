<template>
<div>
    <div class="navto">
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>分类列表</el-breadcrumb-item>
  </el-breadcrumb>
 </div>
   <template>
  <el-table
    :data="classData"
    border
    style="width: 100%">
     <el-table-column
      prop = 'index'
      label="索引"
      width="80">
    </el-table-column>
    <el-table-column 
      label="封面"
      width="120"
      >
      <template slot-scope="scope">
          <img :src="scope.row.icon" alt="封面" class="iconimg">
      </template>
    </el-table-column>
    <el-table-column
      prop="title"
      label="类名"
      width="180">
    </el-table-column>
    <el-table-column
     width="130"
      prop="books.length"
      label="书籍数量">
    </el-table-column>
     <el-table-column
      label="操作">
      <template slot-scope="scope">
          <el-button type="success" @click="cometodetail(scope.row._id,classdetail)">查看详情</el-button>
          <el-button type="waring">删除</el-button>
          <el-button type="wring" @click="cometodetail(scope.row._id,changeclass)">编辑</el-button>
          
          
      </template>
    </el-table-column>
  </el-table>
</template>
</div>
 
</template>



<script>
export default {
  name: "classlist",
  data() {
    return {
      classdetail: "classdetail",
      changeclass: "changeclass",
      classData: [],
      pn: 1
    };
  },

  methods: {
    getdata() {
      this.$axios.get("/category", { pn: this.pn, size: 9 }).then(res => {
        console.log(res.data);
        this.classData = res.data;
      });
    },
    cometodetail(id, rout) {
      this.$router.push({ path: rout, query: { id: id } });
    }
  },
  created() {
    this.getdata();
  }
};
</script>

<style>
.iconimg {
  height: 80px;
  background-origin: border-box;
}
.navto {
  height: 20px;
  padding: 10px;
  font-weight: 400;
  line-height: 30px;
}
</style>



