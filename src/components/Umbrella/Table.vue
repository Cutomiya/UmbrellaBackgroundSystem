<template>
  <div class="box">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="date" label="用户id" />
      <el-table-column prop="name" label="用户名" width="160" />
      <el-table-column prop="state" label="用户密码" width="280" />
      <el-table-column prop="city" label="创建时间" width="220" />
      <el-table-column prop="address" label="更新时间" width="220" />
      <el-table-column fixed="right" label="操作" width="110">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">编辑</el-button>
          <el-button link type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination 
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      background layout=" prev, pager, next, jumper" 
      :total="1000" 
      style="margin-top:10px;" 
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let currentPage = ref(1)
let pageSize = ref(10)
const handleClick = () => {
  console.log('click')
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style lang="less" scoped>
@col: rgba(16, 16, 17, 0.5);
.box{
  display: flex;
  flex-direction: column;
  align-items: center;
  :deep(.el-table){
    --el-table-bg-color: @col;
    --el-table-bg-color: rgba(0, 0, 0, 0.5);
    --el-table-tr-bg-color:rgba(0, 0, 0, 0);
    --el-table-header-bg-color:rgba(0, 0, 0, 0.2);
    --el-table-text-color:white;
    --el-table-row-hover-bg-color:rgba(0, 0, 0, 0.2);
    --el-table-row-hover-bg-color:rgba(0, 0, 0, 0.2);
    --el-table-border-color:rgba(219, 219, 219, 0);
    border-radius: 5px;
  }
  :deep(.el-table-fixed-column--right){
    background-color: rgba(0, 0, 0, 0);
  }
  :deep(.el-table-fixed-column--left){
    background-color: rgba(0, 0, 0, 0);
  }
  :deep(.el-table thead){
    color: white;
  }
}
</style>
