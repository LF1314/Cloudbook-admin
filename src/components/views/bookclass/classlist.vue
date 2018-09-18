<template>
<div>
<div style=" padding-bottom: 70px;">
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
      width="140"
      >
      <template slot-scope="scope">
          <img :src="scope.row.icon" alt="封面" class="iconimg">
      </template>
    </el-table-column>
    <el-table-column
      prop="title"
      label="类名"
      width="260">
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
         <i class="el-icon-delete"></i> <el-button type="danger" @click="delteclass(scope.row._id)">删除</el-button>
         <i class="el-icon-edit"></i> <el-button type="warning" @click="cometodetail(scope.row._id,changeclass)">编辑</el-button>
   
      </template>
    </el-table-column>
  </el-table>
</template>

</div>

<div class="block">
  <el-pagination
    :page-size='size'
    layout="prev, pager, next"
    @current-change='current'
    :total="15">
  </el-pagination>
</div>
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
      pn: 1,
      size: 6
    };
  },

  methods: {
    //获取分类
    getdata(pns) {
      this.$axios.get("/category", { pn: pns, size: this.size }).then(res => {
        console.log(res);
        this.classData = res.data;
      });
    },
    //查看详情&&修改分类
    cometodetail(id, rout) {
      this.$router.push({ path: rout, query: { id: id } });
    },
    //删除分类
    delteclass(id) {
      this.$axios.delete(`/category/${id}`).then(res => {
        if (res.code == 200) {
          this.$message.success({ message: "删除成功！" });
          this.getdata();
        }
      });
    },
    current(e) {
      this.getdata(e);
    }
  },
  created() {
    this.getdata(this.pn);
  }
};
</script>

<style>
.iconimg {
  height: 50px;
  width: 50px;
  border-radius: 10%;
  background-origin: border-box;
}
.navto {
  height: 20px;
  padding: 10px;

  font-weight: 400;
  line-height: 30px;
}
.block {
  position: fixed;
  bottom: 20px;
  right: 0;
}
.el-icon-delete,
.el-icon-edit {
  font-size: 18px;
}
</style>



