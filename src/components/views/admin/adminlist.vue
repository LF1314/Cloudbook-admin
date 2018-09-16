
<template>

<div class="userlist">
 <div class="navto">
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>用户列表</el-breadcrumb-item>
  </el-breadcrumb>
 </div>
  <el-table
    :data="userlist"
    border
    style="width: 100%">
    <el-table-column
      prop="username"
      label="用户名"
      width="130">
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="昵称"
      width="130">
    </el-table-column>
    <el-table-column
      prop="desc"
      label="描述">
    </el-table-column>
    <el-table-column
      label="头像">
      <template slot-scope="scope">
        <img :src="scope.row.avatar" alt="头像" class="userlistimg">
      </template>
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
      <el-button type="success">查看详情</el-button>
      <el-button type="warning">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


</div>
    
</template>
<script>
export default {
  name: "adminlist",
  data() {
    return {
      userlist: []
    };
  },
  created() {
    this.$axios.get("/user").then(res => {
      console.log(res.data);
      if (res.code == 401) {
        this.$message({
          showClose: true,
          message: "状态失效，请重新登录！",
          type: "warning"
        });
        setTimeout(() => {
          this.$router.push("/");
        }, 2000);
      }
      this.userlist = res.data;
    });
  }
};
</script>

<style>
.userlistimg {
  width: 80px;
}
.navto {
  height: 20px;
  padding: 10px;
  font-weight: 400;
  line-height: 30px;
}
</style>



















