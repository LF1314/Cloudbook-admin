<template>
  <div class="wra">
  <div class="navto">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item >添加轮播图</el-breadcrumb-item>
        </el-breadcrumb>
 </div>

   <div class="inner">
 <el-form :model="form" label-width="80px">
    <el-form-item label="轮播图名">
    <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="选择图书">
    <el-select v-model="typeid" placeholder="请选择分类" @change="getclassbook">
      <el-option v-for="(item,index) in types" :key="index"
        :label="item.title"
        :value="item._id"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="索引">
    <el-input-number v-model="form.index" ></el-input-number>
    </el-form-item>
    <!-- 选的书籍信息 -->

   <template>
       <div v-if="ishow" class="bookdetail">
           <div>
               <img :src="form.book.img" alt="">
           </div>
           <div>
               <span>书名：{{form.book.title}}</span>
               <span> 作者：{{form.book.author}}</span>
           </div>
       </div>
   </template>
  <el-form-item label="添加封面">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <template>
    <div v-show="form.delivery" class="imgpic ">
      <pic v-model="form.img"></pic>
    </div>
  </template>
  <el-form-item>
    <el-button type="primary" @click="submit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
 <!-- 对话框 -->
  <div>
       <el-dialog title="选择书籍" :visible.sync="dialogTableVisible" width="70%">
            <el-table :data="books">
                <el-table-column property="title" label="书名" width="230"></el-table-column>
                <el-table-column property="author" label="作者" width="200"></el-table-column>
                <el-table-column label="封面"> 
                    <template slot-scope="scope">
                    <img :src="scope.row.img" alt="封面" class="imgssw">
                 </template>
                </el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <el-button type="primary" @click="addbooks(scope.row._id)">添加</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                :pager-count="11"
                :page-size="5"
                @current-change = 'current'
                layout="prev, pager, next"
                :total="count">
        </el-pagination>
        </el-dialog>
  </div>

   </div>
     

  </div>
    
</template>
<script>
import pic from "../pic/pic";
export default {
  name: "addswper",

  data() {
    return {
      dialogTableVisible: false,
      ishow: false,
      count: 0,
      typeid: "",
      allbooks: [],
      types: [],
      books: [],
      form: {
        title: "",
        img: "",
        index: 1,
        book: {},
        delivery: false
      }
    };
  },
  components: {
    pic
  },
  methods: {
    current(e) {
      if (e - 1 != 0) {
        let a = (e - 1) * 5;
        this.books = this.allbooks.slice(a, a + 5);
      } else {
        this.books = this.allbooks.slice(e - 1, e + 4);
      }
    },
    submit() {
      this.$axios.post("/swiper", this.form).then(res => {
        if (res.code === 200) {
          this.$message.success({ message: res.msg });
          this.$router.push({ path: "swperlist" });
        } else {
          this.$message.error("添加失败！");
        }
      });
    },
    getclassbook() {
      this.$axios
        .get(`/category/${this.typeid}/books`, { pn: 1, size: 999 })
        .then(res => {
          this.allbooks = res.data.books;
          this.books = res.data.books.slice(0, 5);
          console.log(this.allbooks);
          this.count = res.data.books.length;
          this.dialogTableVisible = true;
        });
    },
    addbooks(id) {
      this.$axios.get(`/book/${id}`).then(res => {
        this.form.book = res.data;
        this.ishow = true;
        this.dialogTableVisible = false;
      });
    }
  },
  mounted() {
    this.$selfmethod.getalltype();
    this.types = this.$store.state.alltypes;
    // console.log(this.types);
  }
};
</script>
<style>
.imgssw {
  height: 60px;
}
.inner {
  width: 500px;
  padding: 20px;
  margin-top: 30px;
  margin-left: 40px;
  border: 3px dashed #f4f4f4;
  border-radius: 4px;
  border-radius: 10px;
}
.navto {
  height: 20px;
  padding: 10px;
  font-weight: 400;
  line-height: 30px;
  border-bottom: 2px solid #f3f3f3;
}
.imgpic {
  transform: translate3d(200px, 0, 0);
  margin-bottom: 10px;
}
.bookdetail {
  display: flex;
  border: 1px solid #cebfbf;
  border-radius: 10px;
  padding: 20px;
}
.bookdetail div img {
  height: 100px;
}
.bookdetail div:nth-of-type(2) {
  display: flex;
  flex-direction: column;
  line-height: 20px;
  font-size: 14px;
  margin-left: 20px;
  color: #666;
}
</style>
