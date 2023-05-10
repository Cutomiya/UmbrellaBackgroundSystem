<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

const handleCommand = (command: string | number | object) => {
  ElMessage(`click on item ${command}`)
}
</script>

<template>
  <div class="header">
    <a href="/" style="padding-left:20px">
      <img class="logo" src="../../common/images/logo.png" alt="">
      <span class="title">雨伞管理系统</span>
    </a>
    <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      欢迎您：23232<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="a">修改密码</el-dropdown-item>
        <el-dropdown-item command="b">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
</template>

<style lang="less" scoped>
.logo{
  // border-radius: 5px;
  vertical-align: middle;
  width: 30px;
  margin-bottom: 5px;
}
.title{
  position: absolute;
  color: #fff;
  padding-left:10px;
  font-size: 20px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.el-dropdown {
  float:right;
  margin-right: 10px;
  margin-top: 15px;

}
</style>
