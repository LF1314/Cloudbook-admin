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
      prop="index"
      label="排序"
      width="100">
    </el-table-column>
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
        <el-button type="text" @click="delswiper(scope.row._id)">
          删除
        </el-button>
          <el-button type="success" @click="changeswper(scope.row.book.title,scope.row._id)">
          修改
        </el-button>
      </template>
    </el-table-column>
  </el-table>

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
  name: "swperlist",
  data() {
    return {
      count: 0,
      swperData: [],
      pn: 1,
      size: 5
    };
  },
  created() {
    this.getswper(this.pn);
    this.$selfmethod.getallswiper();
    this.count = this.$store.state.allswipers.length;
  },
  methods: {
    delswiper(id) {
      let ids = [id];
      this.$axios.post(`/swiper/delete`, { ids }).then(res => {
        if (res.code == 200) {
          this.$message.success({ message: "删除成功！！" });
          this.getswper(1);
        }
      });
    },
    getswper(pns) {
      this.$axios.get("/swiper", { pn: pns, size: 5 }).then(res => {
        console.log(res);
        this.swperData = res.data;
        if (res.data.length == 0) {
          this.$message.error("到底了！！");
        }
      });
    },
    prepage(e) {},
    current(e) {
      // console.log(e);
      this.getswper(e);
    },
    changeswper(booktitle, swperid) {
      this.$router.push({
        path: "editswper",
        query: { booktitle: booktitle, swiperid: swperid }
      });
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
  padding-bottom: 70px;
}
.block {
  position: absolute;
  bottom: 20px;
  right: 0;
}
</style>
