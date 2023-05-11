<script setup lang="ts">
import {
  HomeFilled,
  Menu as IconMenu,
  Tools,
  UserFilled,
  GoodsFilled
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="navbar">
    <el-menu active-text-color="#51a1fd" background-color="#3f454a" class="el-menu-vertical-demo" :default-active="$route.path" :router="true"
      text-color="#fff" @open="handleOpen" @close="handleClose">
      <el-menu-item index="/home">
        <el-icon><HomeFilled /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><icon-menu /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user">
            <el-icon><UserFilled /></el-icon>
            用户管理</el-menu-item>
          <el-menu-item index="/umbrella">
            <el-icon><GoodsFilled /></el-icon>
            雨伞管理</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="/setting">
        <el-icon><Tools /></el-icon>
        <span>设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.el-menu{
  border-right:none;
}
:deep( .el-menu-item-group__title){
  padding:0 !important;
}
</style>
