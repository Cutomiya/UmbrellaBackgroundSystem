<script setup lang="ts">
import * as echarts from 'echarts'
import { reactive, ref, onMounted } from 'vue'
onMounted(() => {
  initTotalBox()
})
let initTotalBox = () => {
  let total1 = echarts.init(document.getElementById("total1"))
  let total2 = echarts.init(document.getElementById("total2"))
  let total3 = echarts.init(document.getElementById("total3"))
  let total4 = echarts.init(document.getElementById("total4"))
  total1.setOption({
    title: {
      text: '25%',
      left: 'center',
      top: 'center',
      textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
      }
    },
    series: [
      {
        type: 'pie',
        avoidLabelOverlap: false,
        hoverAnimation: false,
        labelLine: {
          show: false
        },
        color: ['#ccc', '#3e83d3'],
        data: [
          {
            value: 335,
            name: '未注册用户数'
          },
          {
            value: 234,
            name: '注册用户数'
          }
        ],
        radius: ['80%', '100%']
      }
    ]
  })
  total2.setOption({
    title: {
      text: '15%',
      left: 'center',
      top: 'center',
      textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
      }
    },
    series: [
      {
        type: 'pie',
        avoidLabelOverlap: false,
        hoverAnimation: false,
        labelLine: {
          show: false
        },
        color: ['#ccc', '#3e83d3'],
        data: [
          {
            value: 335,
            name: '借出'
          },
          {
            value: 14,
            name: '还能借'
          }
        ],
        radius: ['80%', '100%']
      }
    ]
  })
  total3.setOption({
    title: {
      text: '25%',
      left: 'center',
      top: 'center',
      textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
      }
    },
    series: [
      {
        type: 'pie',
        avoidLabelOverlap: false,
        hoverAnimation: false,
        labelLine: {
          show: false
        },
        color: ['#ccc', '#3e83d3'],
        data: [
          {
            value: 335,
            name: '之前借出'
          },
          {
            value: 234,
            name: '今日借出'
          }
        ],
        radius: ['80%', '100%']
      }
    ]
  })
  total4.setOption({
    title: {
      text: '25%',
      left: 'center',
      top: 'center',
      textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
      }
    },
    series: [
      {
        type: 'pie',
        avoidLabelOverlap: false,
        hoverAnimation: false,
        labelLine: {
          show: false
        },
        color: ['#ccc', '#3e83d3'],
        data: [
          {
            value: 35,
            name: '未归还'
          },
          {
            value: 234,
            name: '已归还'
          }
        ],
        radius: ['80%', '100%']
      }
    ]
  })
}
</script>

<template>
  <span class="title">实时基础数据</span>
  <div class="totalBox">
    <div class="box" style="margin-right: 15px;">
      <div class="smallbox">
        <div id="total1" style="width: 50px; height: 50px"></div>
        <div class="text"><span style="font-size: 10px;">用户总数</span><span style="font-size: 22px;">432423</span></div>
      </div>
      <i class="iconfont icon-user-large"></i>
    </div>
    <div class="box" style="margin-right: 15px;">
      <div class="smallbox">
        <div id="total2" style="width: 50px; height: 50px"></div>
        <div class="text"><span style="font-size: 10px;">雨伞总数</span><span style="font-size: 22px;">4342</span></div>
      </div>
      <i class="iconfont icon-umbrella"></i>
    </div>
    <div class="box" style="margin-right: 15px;">
      <div class="smallbox">
        <div id="total3" style="width: 50px; height: 50px"></div>
        <div class="text"><span style="font-size: 10px;">今日借出</span><span style="font-size: 22px;">432</span></div>
      </div>
      <i class="iconfont icon-cloud-showers-heavy"></i>
    </div>
    <div class="box">
      <div class="smallbox">
        <div id="total4" style="width: 50px; height: 50px"></div>
        <div class="text"><span style="font-size: 10px;">今日归还</span><span style="font-size: 22px;">321</span></div>
      </div>
      <i class="iconfont icon-fan"></i>
    </div>
  </div>
</template>

<style lang="less" scoped>
.title {
  color: #fff;
  user-select: none;
  margin-bottom: 15px;
  display: block;
  font-size: 20px;
}

.totalBox {
  width: 100%;
  display: flex;

  .box {
    background: linear-gradient(to top, rgba(73, 90, 110, 0.8) 20%, rgba(29, 40, 48, 0.8) 100%);
    box-shadow: 0px 4px 8px 0px #2d323f;
    height: 80px;
    border-radius: 5px;
    flex: 1;
    color: #fff;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    box-sizing: border-box;
    align-items: center;

    .smallbox {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .text {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
      }
    }

    i {
      font-size: 42px;
      color: #d7e3f1;
    }
  }
}
</style>
