<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import {useRouter} from 'vue-router'
import { login, getUserInfo } from '@/api/login'
const ruleFormRef1 = ref<FormInstance>()
const ruleFormRef2 = ref<FormInstance>()

const router=useRouter()

const checkNewName = (_rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入用户名'))
  }
  setTimeout(() => {
    if (value.toString().length < 3) {
      callback(new Error('用户名不可少于三个字符'))
    } else if (value.toString().length > 12){
      callback(new Error('用户名不可多于十二个字符'))
    } else {
      // console.log(value.length)
      callback()
    }
  }, 1000)
}
const validateNewPass1 = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请重新输入密码'))
  } else if (value.toString().length < 6) {
    callback(new Error('密码不可少于6位'))
  } else {
    callback()
  }
}
const validateNewPass2 = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请重新输入密码'))
  } else if (value !== ruleFormNew.newPassword1) {
    callback(new Error("两次输入的密码不一致!"))
  } else {
    callback()
  }
}
const ruleFormNew = reactive({
  newPassword1: '',
  newPassword2: '',
  newName: '',
})
const rulesNew = reactive<FormRules>({
  newPassword1: [{ validator: validateNewPass1, trigger: 'blur' }],
  newPassword2: [{ validator: validateNewPass2, trigger: 'blur' }],
  newName: [{ validator: checkNewName, trigger: 'blur' }],
})

const submitForm1 = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      login(ruleForm.Name, ruleForm.Password).then(res => {
        let resp = res.data
        if (resp.flag) {
              getUserInfo(resp.data.token).then(res => {
                let resUser = res.data
                if (resUser.flag) {
                  localStorage.setItem(
                    'manager-user',
                    JSON.stringify(resUser.data)
                  )
                  localStorage.setItem('manager-token', resp.data.token)
                  router.push('layout')
                } else {
                  // this.$message({
                  //   message: resUser.message,
                  //   type: 'warning'
                  // })
                  return false
                }
              })
            } else {
              // this.$message({
              //   message: resp.message,
              //   type: 'warning'
              // })
              return false
            }
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
const resetForm = (formEl1: FormInstance | undefined, formEl2: FormInstance | undefined) => {
  // console.log(formEl1, formEl2);
  isMove.value = !isMove.value
  if (isMove.value) {
    word.value = 'SIGN IN'
  } else {
    word.value = 'SIGN UP'
  }
  if (!formEl1) return
  formEl1.resetFields()
  if (!formEl2) return
  formEl2.resetFields()
}
// 右边的表格
const checkName = (_rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入用户名'))
  }
  setTimeout(() => {
    if (value.toString().length < 3) {
      callback(new Error('用户名不可少于三个字符'))
    } else if (value.toString().length > 12){
      callback(new Error('用户名不可多于十二个字符'))
    } else {
      // console.log(value.length)
      callback()
    }
  }, 1000)
}
const validatePass = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请重新输入密码'))
  } else if (value.toString().length < 6) {
    callback(new Error('密码不可少于6位'))
  } else {
    callback()
  }
}
const ruleForm = reactive({
  Password: '',
  Name: '',
})
const rules = reactive<FormRules>({
  Password: [{ validator: validatePass, trigger: 'blur' }],
  Name: [{ validator: checkName, trigger: 'blur' }],
})

let isMove = ref(false)
let word = ref('SING UP')
</script>

<template>
  <div class="contain">
    <div class="box">
      <button class="over" @click="resetForm(ruleFormRef1, ruleFormRef2)" :class="{move2: isMove}">{{ word }}</button>
      <div :class='{box1: true, move1: isMove, boxContain: true}'>
        <h2>Sign In</h2>
        <!-- <input type="text" placeholder="用户名" v-model="form.name">
        <input type="password" placeholder="密码" v-model="form.password"> -->
        <el-form
          ref="ruleFormRef1"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm">
          <el-form-item label="用户名" prop="Name" size="large">
            <el-input v-model.number="ruleForm.Name"/>
          </el-form-item>
          <el-form-item label="密码" prop="Password" size="large">
            <el-input v-model="ruleForm.Password" type="password" autocomplete="off" />
          </el-form-item>
        </el-form>
        <span style="font-size: 12px; color: #7c7c7c; cursor: pointer;">忘记密码？</span>
        <button @click="submitForm1(ruleFormRef1)">SIGN IN</button>
      </div>
      <div :class='{box2: true, move1: isMove, boxContain: true}'>
        <h2>Sign Up</h2>
        <el-form
          ref="ruleFormRef2"
          :model="ruleFormNew"
          status-icon
          :rules="rulesNew"
          label-width="120px"
          class="demo-ruleForm">
          <el-form-item label="用户名" prop="newName" size="large">
            <el-input v-model="ruleFormNew.newName" />
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword1" size="large">
            <el-input v-model="ruleFormNew.newPassword1" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item label="确认密码" prop="newPassword2" size="large">
            <el-input
              v-model="ruleFormNew.newPassword2"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
        </el-form>
        <button>SIGN UP</button>
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
    background: linear-gradient(to top, rgba(230, 230, 230,0) 60%, rgba(255, 255, 255, 0.8) 100%);
    .box1 {
      right: 0px;
    }
    .box2{
      left:-50%;
    }
    .boxContain{
      width: 50%;
      height: 100%;
      box-sizing: border-box;
      background-color: rgb(240, 240, 240);
      position: absolute;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
    .demo-ruleForm{
      padding-right:50px;
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
      background-image: linear-gradient(to right,rgb(21, 78, 151), rgb(98, 161, 255));
      color: #fff;
      // background-color: aqua;
      margin:20px;
      cursor: pointer;
      transition: all 0.3s ease;
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