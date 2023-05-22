<template>
  <div class="box">
    <el-table :data="pageData" style="width: 100%">
      <el-table-column fixed prop="id" label="用户id" />
      <el-table-column prop="username" label="用户名" width="160" />
      <el-table-column prop="password" label="用户密码" width="280" />
      <el-table-column prop="createTime" label="创建时间" width="220" />
      <el-table-column prop="updateTime" label="更新时间" width="220" />
      <el-table-column fixed="right" label="操作" width="100">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">编辑</el-button>
          <el-button link type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination 
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10, 20, 30]"
      background layout="sizes, prev, pager, next, jumper" 
      :total="totalSize" 
      style="margin-top:10px;" 
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<!-- http://10.200.140.225:11120 -->
<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue'
import { getUserIfo } from '@/api/user'
onMounted(() => {
  getIfo()
})
let currentPage = ref(1) //当前页数
let pageSize = ref(5) //一页多少条
let totalSize = ref(25) //数据总数
let pageData = reactive([
  {}
])
const getIfo = () => {
  getUserIfo(currentPage.value, pageSize.value).then((res) => {
    // console.log(res.data)
    // console.log('342')
    // totalSize = res.data.total
    pageData.length = 0
    console.log(pageData.length)
    Object.assign(pageData, res.data.data)
    // console.log(pageData)
  })
}
const handleClick = () => {
  console.log('click')
}
const handleSizeChange = (val: number) => { //一页多少条数据
  // console.log(`${val} items per page`)
  pageSize.value = val
  getIfo()
}
const handleCurrentChange = (val: number) => { //当前第几页
  // console.log(`current page: ${val}`)
  currentPage.value = val
  getIfo()
}
</script>

<style lang="less" scoped>
@col: rgba(40, 49, 58);
.box{
  display: flex;
  flex-direction: column;
  align-items: center;
  :deep(.el-table){
    --el-table-bg-color: @col;
    --el-table-tr-bg-color:rgba(0, 0, 0, 0);
    --el-table-header-bg-color:@col;
    --el-table-text-color:white;
    --el-table-row-hover-bg-color:rgb(34, 42, 48);
    --el-table-border-color:rgba(32, 32, 32, 0.5);
    border-radius: 5px;
  }
  :deep(.el-table-fixed-column--right){
    background-color: @col;
  }
  :deep(.el-table-fixed-column--left){
    background-color: @col;
  }
  :deep(.el-table thead){
    color: white;
  }
  :deep(.el-pager li.is-active){
    background-color:#3e83d3;
  }
  :deep(.el-pager li){
    background-color:@col;
    color: white;
  }
  :deep(.el-pagination.is-background .btn-prev){
    background-color:@col;
    color: white;
  }
  :deep(.el-pagination.is-background .btn-next){
    background-color:@col;
    color: white;
  }
  :deep(.el-input__wrapper){
    background-color:@col;
    box-shadow:0 0 0 1px rgb(34, 34, 34);
    .el-input__inner{
      color: white;
    }
  }
  :deep(.el-pagination__jump){
    color:white;
  }
}
</style>
