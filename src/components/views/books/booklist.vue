<template>
<div style="padding:20px">
    <div>
        <h3>书籍列表</h3>
    </div>
    <template>
  <el-table
    :data="bookData"
    style="width: 100%">
    <el-table-column
     
      prop="index"
      width="100"
      label="index">
    </el-table-column>
     <el-table-column
      width="150"
      label="封面">
      <template slot-scope="scope">
          <img :src="scope.row.img" alt="封面" class="bookimg">
      </template>
    </el-table-column>
    <el-table-column
      prop="title"
      label="书名"
      width="260">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="200">
    </el-table-column>
     <el-table-column
      label="操作"
      >
      <template slot-scope="scope">
          <i class="el-icon-edit"></i>
          <el-button type="info" @click="jumtochange(scope.row._id)">
              编辑
          </el-button>

      </template>
    </el-table-column>
  
  </el-table>
</template>

<div class="booklist">
  <el-pagination
    :page-size='size'
    layout="prev, pager, next"
    @current-change='mycurrent'
    :total="30">
  </el-pagination>
</div>
</div>
    
</template>
<script>
export default {
  name: "booklist",
  data() {
    return {
      size: 5,
      bookData: [],
      pn: 1
    };
  },
  methods: {
    getbooks(pns) {
      this.$axios.get("/book", { pn: pns, size: this.size }).then(res => {
        this.bookData = res.data;
        console.log(res);
      });
    },
    jumtochange(id) {
      this.$router.push({ path: "editbook", query: { id } });
    },
    mycurrent(e) {
      this.getbooks(e);
    }
  },
  created() {
    this.getbooks(this.pn);
  }
};
</script>


<style >
.bookimg {
  height: 60px;
}
.el-icon-edit {
  font-size: 20px;
}
.booklist {
  position: absolute;
  bottom: 20p;
  right: 10px;
}
</style>
