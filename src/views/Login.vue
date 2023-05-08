<script setup lang="ts">
import { ref } from 'vue'
// const box1 = ref<any>(null)
let isMove = ref(false)
let word = ref('SING UP')
function sign () {
  // console.log('54')
}
function move () {
  isMove.value = !isMove.value
  if (isMove.value) {
    word.value = 'SIGN IN'
  } else {
    word.value = 'SIGN UP'
  }
}
</script>

<template>
  <div class="contain">
    <div class="box">
      <button class="over" @click="move" :class="{move2: isMove}">{{ word }}</button>
      <div :class='{box1: true, move1: isMove, boxContain: true}'>
        <h2>Sign In</h2>
        <input type="text" placeholder="用户名">
        <input type="password" placeholder="密码">
        <span style="font-size: 12px; color: #7c7c7c; cursor: pointer; margin-top:10px;">忘记密码？</span>
        <button @click="sign">SIGN IN</button>
      </div>
      <div :class='{box2: true, move1: isMove, boxContain: true}'>
        <h2>Sign Up</h2>
        <input type="text" placeholder="用户名">
        <input type="password" placeholder="新密码">
        <input type="password" placeholder="确认密码">
        <button @click="sign">SIGN UP</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.contain {
  width: 100vw;
  height: 100vh;
  background-image: url('../common/images/bj.jpg');
  background-size: cover;
  position: relative;
  .box {
    width: 760px;
    height: 450px;
    // background-color: aqua;
    box-shadow: 0px 10px 20px 1px #2d323f;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    overflow: hidden;
    transform: translate(-50%, -50%);

    .box1 {
      right: 0px;
    }
    .box2{
      left:-50%;
    }
    .boxContain{
      width: 50%;
      height: 100%;
      background-color: rgb(230, 230, 230);
      position: absolute;
      transition: all 0.5s ease;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
    .move1{
      transform: translateX(100%);
    }
    .right{
      transform: translateX(100%);
    }
    input{
      width: 300px;
      height: 40px;
      border: none;
      margin: 10px 40px;
      font-size: 16px;
      padding:0px 10px;
    }
    h2{
      margin:16px;
      font-weight: 300;
      color: #474747;
      user-select: none;
      font-size: 24px;
    }
    button{
      border: none;
      width: 160px;
      height: 40px;
      // padding:10px 60px;
      text-align: center;
      border-radius: 20px;
      background-image: linear-gradient(to right,rgb(21, 78, 151), rgb(99, 156, 241));
      color: #fff;
      // background-color: aqua;
      margin:20px;
      cursor: pointer;
      transition: all 0.5s ease;
    }
    .over{
      float: left;
      position: absolute;
      left:12%;
      top:40%;
      // transform: translate(-50%, -50%);
      z-index: 99;
    }
    .move2{
      transform: translateX(240%);
    }
  }
}
</style>