<script setup lang="ts">
import Header from '../components/Layout/Header.vue'
import Navbar from '../components/Layout/Navbar.vue'
import Main from '../components/Layout/Main.vue'
</script>

<template>
  <Header></Header>
  <Navbar></Navbar>
  <Main></Main>
</template>

<style lang="less" scoped>
.header{
  position: absolute;
  line-height: 50px;
  background-color: #1a1c1f;
  left: 0px;
  right: 0px;
  top: 0px;
}
.navbar{
  position: absolute;
  width: 200px;
  background-color: #3f454a;
  left: 0px;
  bottom: 0px;
  top: 50px;
  overflow-y: auto;
}
.main{
  position: absolute;
  // background-color: #1e2020;
  left: 200px;
  right: 0px;
  bottom: 0px;
  top: 50px;
  padding: 5px;
  overflow-y: auto;
}
</style>
