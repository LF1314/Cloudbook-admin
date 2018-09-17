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
      width="230">
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
          <el-button type="success" @click="jumtochange(scope.row._id)">
              编辑
          </el-button>

      </template>
    </el-table-column>
  
  </el-table>
</template>

</div>
    
</template>
<script>
export default {
  name: "booklist",
  data() {
    return {
      bookData: []
    };
  },
  methods: {
    getbooks() {
      this.$axios.get("/book").then(res => {
        this.bookData = res.data;
        console.log(res.data);
      });
    },
    jumtochange(id) {
      this.$router.push({ path: "editbook", query: { id } });
    }
  },
  created() {
    this.getbooks();
  }
};
</script>


<style>
.bookimg {
  height: 60px;
}
</style>
