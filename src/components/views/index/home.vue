<template>
<div class="shouyewraper">
     <div class="header">
        <h3>管理员中心</h3>
    <div class="usermessage">
      <el-dropdown>
      <div>
        <img :src="avatar" alt="" class="userim">
        <span class="el-dropdown-link">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="usein">用户信息</el-dropdown-item>
        <el-dropdown-item @click.native="loginout">注销登陆</el-dropdown-item>
        
      </el-dropdown-menu>
    </el-dropdown>

    </div>
     


     </div>
  <div class="nav-bar">
      <el-menu
               router
              default-active="2"
              class="el-menu-vertical-demo el-menu"
              background-color="#456789"
              text-color="#fff"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>管理员</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">管理员管理</template>
                  <el-menu-item index="" :route="{path:'/home/adminlist'}">管理员列表</el-menu-item>
                  <el-menu-item index="addadmin">添加管理员</el-menu-item>
                </el-menu-item-group>
              
              </el-submenu>
              <el-submenu index="2">
                  <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>书籍管理</span>
                  </template>
                  <el-menu-item-group>
                  <template slot="title">图书管理</template>
                  <el-menu-item index="booklist">书籍列表</el-menu-item>
                  <el-menu-item index="addbook">添加图书</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                  <template slot="title">
                      <i class="el-icon-document"></i>
                <span slot="title">轮播图管理</span>
                  </template>
                  <el-menu-item-group>
                  <template slot="title">轮播图管理</template>
                  <el-menu-item index="swperlist">轮播图列表</el-menu-item>
                  <el-menu-item  index="addswper">添加轮播图</el-menu-item>
                </el-menu-item-group>
              </el-submenu>


                <el-submenu index="4">
                  <template slot="title">
                      <i class="el-icon-setting"></i>
                <span>分类管理</span>
                  </template>
                    <el-menu-item-group>
                  <template slot="title">分类管理</template>
                  <el-menu-item index="classlist">分类列表</el-menu-item>
                  <el-menu-item index="addclass">添加分类</el-menu-item>
                </el-menu-item-group>
          </el-submenu>

              <!-- <el-submenu index="5">
                  <template slot="title">
                      <i class="el-icon-setting"></i>
                <span>用户管理</span>
                  </template>
                    <el-menu-item-group>
                  <template slot="title">用户管理</template>
                  <el-menu-item index="">用户列表</el-menu-item>
                  <el-menu-item index="">33</el-menu-item>
                </el-menu-item-group>
              </el-submenu> -->

       </el-menu>

  </div>
     <div class="main">
         <router-view>
         </router-view>
     </div>
</div>
    
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      avatar: ""
    };
  },
  created() {
    this.avatar = this.$store.state.userinfo.avatar;
  },
  methods: {
    loginout() {
      this.$axios.get("/logout").then(res => {
        console.log(res);
        if (res.code == 400) {
          this.$router.push({ path: "/" });
        }
      });
      console.log("...");
    },
    usein() {
      this.$router.push({ path: "index" });
    }
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.el-menu {
  border-right: none;
}
.header {
  position: relative;
  height: 60px;
  line-height: 60px;
  margin-left: 200px;
  border-bottom: 2px solid #f3f3f3;
  text-align: center;
  background-color: rgb(230, 240, 238);
}
.userim {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
}
.usermessage {
  position: fixed;
  top: 0;
  right: 40px;
  display: inline-block;
}
.main {
  margin-left: 200px;
}
.nav-bar {
  position: fixed;
  width: 200px;
  padding-top: 20px;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-color: #456789;
}
</style>

