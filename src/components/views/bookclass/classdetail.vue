
<template>
<div>
 <div class="navto">
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item :to="{path:'classlist'}">分类列表</el-breadcrumb-item>
  <el-breadcrumb-item >{{title}}</el-breadcrumb-item>
  </el-breadcrumb>
 </div>
 
  <el-table
    :data="booksdata"
    style="width: 100%"
   >
    <el-table-column
     
      label="头像"
      width="180">
      <template slot-scope="scope">
          <img :src="scope.row.img" alt="书籍封面" class="bookimg">
      </template>
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="书名">
    </el-table-column>
      <el-table-column
      label="操作">
      <template slot-scope="scope">
          <el-button type="success"  @click="$selfmethod.getbookdetail(scope.row._id)">查看详情</el-button>
          <el-button icon="el-icon-delete" type="waring">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


</div>
    
</template>

<script>
export default {
  name: "classdetail",
  data() {
    return {
      typeid: "",
      booksdata: [],

      title: ""
    };
  },

  methods: {
    getdata() {
      this.$axios
        .get(`/category/${this.typeid}/books`, { pn: 1, size: 99 })
        .then(res => {
          this.booksdata = res.data.books;
        });
    }
  },
  created() {
    this.typeid = this.$route.query.id;
    this.getdata();
  }
};
</script>

<style>
.navto {
  height: 20px;
  padding: 10px;
  font-weight: 400;
  line-height: 30px;
}
.bookimg {
  height: 80px;
}
</style>




























