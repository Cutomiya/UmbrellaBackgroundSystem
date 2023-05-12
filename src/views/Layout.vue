<script setup lang="ts">
import Header from '../components/Layout/Header.vue'
import Navbar from '../components/Layout/Navbar.vue'
import Main from '../components/Layout/Main.vue'
</script>

<template>
  <div class="contain">
  </div>
  <Header></Header>
  <Navbar></Navbar>
  <Main></Main>
</template>

<style lang="less" scoped>
.contain {
  height: 100vh;
  width: 100bw;
  background: url('../common/images/bj2.jpg')no-repeat center center fixed;
}

.header {
  position: absolute;
  line-height: 50px;
  background-color: #0e0f10;
  left: 0px;
  right: 0px;
  top: 0px;
  height: 50px;
  user-select: none;
}

.navbar {
  position: absolute;
  width: 200px;
  background-color: rgba(16, 16, 17, 0.8);
  left: 0px;
  bottom: 0px;
  top: 50px;
  overflow-y: auto;
}

.main {
  position: absolute;
  // background-color: #1e2020;
  left: 200px;
  right: 0px;
  bottom: 0px;
  top: 50px;
  padding: 8px;
  overflow-y: auto;
}</style>
