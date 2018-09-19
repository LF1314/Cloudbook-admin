<template>
    <div class="bookdetailwraper">
        <div class="detailheader">
            <h3>书籍详情页</h3>
        </div>
        <div >
        <el-card :body-style="{ padding: '0px' }" shadow="hover" > 
           <div class="boosdetailss">
                <img  class="image" :src="bookdata.img">
            <div style="padding: 14px;" >
                <div class="bookdetails">
                    <p class="item1"><span>作者：</span><span>{{bookdata.author}}</span></p>
                    <p class="item2"><span>标题：</span><span>{{bookdata.title}}</span></p>
                    <p class="item3"><span>喜欢人数：</span><span>{{bookdata.looknums}}</span></p>
                    <p class="item4"><span>描述：</span><span>{{bookdata.desc}}</span></p>
                </div>
                <div class="bottom clearfix">
                       <el-button type="danger" icon="el-icon-delete" circle @click="delbook"></el-button>
                       <el-button type="success" icon="el-icon-edit" >编辑</el-button>
                </div>
            </div>
           </div>
       </el-card>
        </div>
    </div>
</template>
<script>
export default {
  name: "bookdetail",
  data() {
    return {
      bookid: "",
      bookdata: {
        img: "",
        author: "",
        desc: "",
        looknums: "",
        title: ""
      }
    };
  },
  methods: {
    delbook() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios.delete(`/book/${this.bookid}`).then(res => {
            this.$message.success({ message: "删除成功" });
            this.$router.push("booklist");
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.bookid = this.$route.query.id;
    this.$axios.get(`/book/${this.bookid}`).then(res => {
      this.bookdata = res.data;
      console.log(this.bookdata);
    });
  }
};
</script>
<style scoped>
.bookdetailwraper {
  padding: 20px;
}
.item1 {
  font-size: 16px;
}
.item2 {
  font-size: 14px;
  color: #222;
}
.item3 {
  font-size: 14px;
  color: #333;
}
.item4 {
  font-size: 12px;
  color: #666;
}
.boosdetailss {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.bookdetails {
  line-height: 40px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  height: 70%;
  margin: 10px auto;
  border-radius: 20px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
