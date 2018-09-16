<template>
<div class="shouyewraper">
     <div class="header">
        <h3>管理员中心</h3>
     </div>
     <div class="nav-bar">
           <el-menu
           router
      default-active="2"
      class="el-menu-vertical-demo"
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
        <el-menu-item-group title="分组2" >
          <el-menu-item index="">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index=''>
          <template slot="title">选项4</template>
          <el-menu-item index="">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
          <template slot="title">
                <i class="el-icon-menu"></i>
                <span>书籍管理</span>
          </template>
           <el-menu-item-group>
          <template slot="title">图书管理</template>
          <el-menu-item index="">书籍列表</el-menu-item>
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
          <el-menu-item  index="">添加轮播图</el-menu-item>
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
          <el-menu-item index="">添加分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

           <el-submenu index="5">
          <template slot="title">
               <i class="el-icon-setting"></i>
        <span>用户管理</span>
          </template>
            <el-menu-item-group>
          <template slot="title">用户管理</template>
          <el-menu-item index="">用户列表</el-menu-item>
          <el-menu-item index="">33</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

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
  name: "home"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.header {
  height: 60px;
  line-height: 60px;
  margin-left: 200px;
  border-bottom: 2px solid #f3f3f3;
  text-align: center;
}
.main {
  margin-left: 200px;
}
.nav-bar {
  position: fixed;
  width: 200px;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-color: #456789;
}
</style>

