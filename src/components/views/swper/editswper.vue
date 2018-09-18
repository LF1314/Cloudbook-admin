
<template>
   <div>
       <div class="swiperheader">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: 'index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: 'swperlist' }">轮播图列表</el-breadcrumb-item>
             <el-breadcrumb-item >修改轮播图</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <div class="headerswper">
         <h3>
             change 轮播
         </h3>
        </div>
        <div class="eidtswper">
            <el-form label-position=right label-width="140px" :model="swperdata">
              <el-form-item label="轮播图title">
                        <el-input v-model="swperdata.title"></el-input>
              </el-form-item>
               <el-form-item label="轮播图对应的书籍"> 
                  <el-select v-model="booktitle" placeholder="请选择图书">
                            <el-option v-for="(item,index) in books" :key="index"
                             :value="item.title">{{item.title}}</el-option>
                  </el-select>
               </el-form-item>
              <el-form-item label="索引">
                        <el-input v-model="swperdata.index" class="suoyin"></el-input>
              </el-form-item> 
               <el-button type="primary" class="cahngeswiperbtn" @click="editswiper">
                        修改
               </el-button>
            </el-form>
         
        </div>
        <div class="swiperimg">
        <pic v-model ='swperdata.img'> </pic>
        <i>封面</i>
        </div>
   </div>
</template>

<script>
import pic from "../pic/pic";
export default {
  name: "editswper",
  data() {
    return {
      books: [],
      booktitle: "",
      swiperid: "",
      swperdata: {
        title: "",
        index: "",
        book: "",
        img: ""
      }
    };
  },
  components: {
    pic
  },
  methods: {
    //获取所有的书籍
    getbooks() {
      let pn = 1;
      let allbook = [];
      let _this = this;
      function getallbook(pn) {
        _this.$axios.get("/book", { pn: pn, size: 10 }).then(res => {
          if (res.data.length == 0) {
            _this.books = allbook;
            _this.$store.commit("GETALLBOOKS", _this.books);
            console.log(_this.books);
          } else {
            allbook = [...allbook, ...res.data];
            pn++;
            getallbook(pn);
          }
        });
      }
      getallbook(pn);
    },
    //获取轮播图信息，
    getswiper(id) {
      this.$axios.get(`/swiper/${id}`).then(res => {
        console.log(res.data);
        this.swperdata = res.data;
      });
    },
    //修改轮播图方法
    editswiper() {
      this.books.forEach((item, index) => {
        if (item.title == this.booktitle) {
          this.swperdata.book = item._id;
        }
      });
      console.log(this.swperdata);
      this.$axios.put(`/swiper/${this.swiperid}`, this.swperdata).then(res => {
        if (res.code == 200) {
          this.$message.success({ message: "轮播图修改成功！" });
          this.$router.push("swperlist");
        } else {
          this.$message.error("修改失败！");
        }
      });
    }
  },
  created() {
    this.getbooks();
    this.swiperid = this.$route.query.swiperid;
    this.booktitle = this.$route.query.booktitle;
    this.getswiper(this.swiperid);
  }
};
</script>
 

<style scoped>
.swiperheader {
  padding: 10px;
  border-bottom: 2px dashed #f5f5f5;
}
.eidtswper {
  width: 400px;
  margin-top: 50px;
  margin-left: 60px;
}
.swiperimg {
  position: absolute;
  top: 170px;
  right: 300px;
  text-align: center;
}
.suoyin {
  width: 100px;
}
.cahngeswiperbtn {
  margin-left: 138px;
}
</style>














