<template>
  <el-breadcrumb :separator-icon="ArrowRight" v-show="$route.path!='/home'&&$route.path!='/setting'">
    <span class="line">|</span>
    <el-breadcrumb-item>雨伞管理系统</el-breadcrumb-item>
    <el-breadcrumb-item>系统管理</el-breadcrumb-item>
    <!-- <el-breadcrumb-item v-show="$route.path=='/user'">用户管理</el-breadcrumb-item> -->
    <!-- <el-breadcrumb-item v-show="$route.path=='/umbrella'">雨伞管理</el-breadcrumb-item> -->
    <el-breadcrumb-item>{{ $route.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style lang="less" scoped>
.el-breadcrumb{
  height: 10px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  margin-bottom: 10px;
  background-color: rgba(16, 16, 17, 0.5);
  :deep(.el-breadcrumb__inner){
    color: #fff;
  }
  :deep(.el-breadcrumb__inner:hover){
    color: #fff;
  }
}
.line{
  position: absolute;
  color: rgba(81, 161, 253,0);
  font-weight:bolder;
  border-left: 3px solid #51a1fd;
  left: 14px;
}
</style>