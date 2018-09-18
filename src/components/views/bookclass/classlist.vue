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
    :total="count">
  </el-pagination>
</div>
</div>
</template>
<script>
export default {
  name: "classlist",
  data() {
    return {
      count: 0,
      classdetail: "classdetail",
      changeclass: "changeclass",
      classData: [],
      pn: 1,
      size: 6
    };
  },
  methods: {
    //获取所有的分类
    getalltype() {
      // console.log("....");
      let pn = 1;
      let _this = this;
      let typearr = [];
      function gettype(pn) {
        _this.$axios.get("/category", { pn: pn, size: 10 }).then(res => {
          if (res.data.length == 0) {
            _this.count = typearr.length;
            console.log(_this.count);
            _this.$store.commit("GETALLTYPES", typearr);
          } else {
            typearr = [...typearr, ...res.data];
            pn++;
            gettype(pn);
          }
        });
      }
      gettype(pn);
    },
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
      if (e - 1 != 0) {
        let a = (e - 1) * this.size;
        this.classData = this.$store.state.alltypes.slice(a, a + this.size);
      } else {
        this.classData = this.$store.state.alltypes.slice(e - 1, e + 5);
      }
    }
  },
  created() {
    this.getdata(this.pn);
    this.getalltype(this.pn);
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



