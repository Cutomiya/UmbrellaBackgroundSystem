<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
// import { logoutUser } from "@/api/login"
import { useRouter } from 'vue-router'

const router = useRouter()

// let user = JSON.parse(localStorage.getItem('manager-user'))
//t右上角弹窗事件
const handleCommand = (command: string | number | object) => {
  switch (command) {
    case 'a':
      updatePwd()
      break
    case 'b':
      logout()
      break
    default:
      break
  }
}
let dialogVisible = ref(false)
let dialogVisible2 = ref(false)
//反馈数据
let feedback = reactive({
  type: '',
  data: ''
})
//关闭弹窗
const handleClose = (done: () => void) => {
  vFormRef.value.resetForm()
  done()
}
const handleClose2 = (done: () => void) => {
  feedback.data = ''
  feedback.type = ''
  done()
}
//打开弹窗
const updatePwd = () => {
  dialogVisible.value = true
}
//退出登录
const logout = () => {
  let token = localStorage.getItem('manager-token')
  // logoutUser(token).then(res => {
  //   let resp = res.data
  //   if (resp.flag) {
  //     localStorage.removeItem('manager-token')
  //     localStorage.removeItem('manager-user')
  //     router.push('/login')
  //   } else {
  //     ElMessage.warning(resp.message)
  //   }
  // })
}
//提交反馈
const submitFeedback = () => {
  // console.log(feedback)
  dialogVisible2.value = false
}
const formJson = reactive({ "widgetList": [{ "type": "input", "icon": "text-field", "formItemFlag": true, "options": { "name": "input12931", "label": "旧密码", "labelAlign": "label-right-align", "type": "password", "defaultValue": "", "placeholder": "", "columnWidth": "200px", "size": "", "labelWidth": null, "labelHidden": false, "readonly": false, "disabled": false, "hidden": false, "clearable": true, "showPassword": false, "required": true, "validation": "noChinese", "validationHint": "", "customClass": [], "labelIconClass": null, "labelIconPosition": "rear", "labelTooltip": null, "minLength": 6, "maxLength": 12, "showWordLimit": true, "prefixIcon": "", "suffixIcon": "", "appendButton": false, "appendButtonDisabled": false, "buttonIcon": "el-icon-search", "onCreated": "", "onMounted": "", "onInput": "", "onChange": "", "onFocus": "", "onBlur": "", "onValidate": "  if (value === '') { //空值不校验\n    callback()\n    return\n  }\n  \n  if ((value.toString().length > 12) || (value.toString().length < 6)) {\n    callback(new Error('密码长度应为6~12位'))  //校验失败\n  } else {\n    callback();  //校验通过\n  }" }, "id": "input12931" }, { "type": "input", "icon": "text-field", "formItemFlag": true, "options": { "name": "input23031", "label": "新密码", "labelAlign": "label-right-align", "type": "password", "defaultValue": "", "placeholder": "请输入6~12位新密码", "columnWidth": "200px", "size": "", "labelWidth": null, "labelHidden": false, "readonly": false, "disabled": false, "hidden": false, "clearable": true, "showPassword": true, "required": true, "validation": "noChinese", "validationHint": "", "customClass": [], "labelIconClass": null, "labelIconPosition": "rear", "labelTooltip": null, "minLength": 6, "maxLength": 12, "showWordLimit": true, "prefixIcon": "", "suffixIcon": "", "appendButton": false, "appendButtonDisabled": false, "buttonIcon": "el-icon-search", "onCreated": "", "onMounted": "", "onInput": "", "onChange": "", "onFocus": "", "onBlur": "", "onValidate": "  if (value === '') { //空值不校验\n    callback()\n    return\n  }\n  \n  if ((value.toString().length > 12) || (value.toString().length < 6)) {\n    callback(new Error('密码长度应为6~12位'))  //校验失败\n  } else {\n    callback();  //校验通过\n  }" }, "id": "input23031" }], "formConfig": { "modelName": "formData", "refName": "vForm", "rulesName": "rules", "labelWidth": 100, "labelPosition": "left", "size": "", "labelAlign": "label-right-align", "cssCode": "", "customClass": [], "functions": "", "layoutType": "PC", "jsonVersion": 3, "onFormCreated": "", "onFormMounted": "", "onFormDataChange": "" } })
const formData = reactive({})
const optionData = reactive({})
const vFormRef = ref(null)

const submitForm = () => {
  vFormRef.value.getFormData().then(formData => {
    // Form Validation OK
    alert(JSON.stringify(formData))
  }).catch(error => {
    // Form Validation failed
    ElMessage.error(error)
  })
}
</script>

<template>
  <div class="header">
    <div style="padding-left:14px" class="topBox">
      <!-- <img class="logo" src="../../common/images/logo.png" alt=""> -->
      <i class="iconfont icon-yusan1" style="color: rgb(62, 131, 211); font-size:22px;"></i>
      <span class="title">
        <span class="title1">雨伞</span>
        <span class="title2">管理系统</span>
      </span>
    </div>
    <div style="float: right;">
      <span style="color: white;font-size: 10px;">有问题？</span>
      <span class="text" @click="dialogVisible2 = true">点击这里反馈！</span>
      <i class="iconfont icon-xinxiang"></i>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <!-- 欢迎您：{{ user.name }}<el-icon class="el-icon--right"><arrow-down /></el-icon> -->
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">修改密码</el-dropdown-item>
            <el-dropdown-item command="b">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <el-dialog v-model="dialogVisible" title="反馈" width="30%" :before-close="handleClose">
      <div>
        <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
        </v-form-render>
        <el-button class="btn" type="primary" @click="submitForm">Submit</el-button>
      </div>
    </el-dialog>
    <el-dialog v-model="dialogVisible2" title="反馈" width="30%" :before-close="handleClose2" class="feedBack">
      <el-alert title="请不要提交无关信息哦^_^" type="warning" center show-icon />
      <el-form-item label="反馈类型：" prop="resource">
        <el-radio-group v-model="feedback.type">
          <el-radio label="bug" />
          <el-radio label="建议" />
          <el-radio label="疑问" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="填写内容：" prop="desc">
        <el-input v-model="feedback.data" type="textarea" />
      </el-form-item>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="submitFeedback">
            提交
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
:deep(.feedBack){
  padding-left:15px !important;
}
.btn {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.el-alert {
  margin: 20px 0 0;
}

.el-alert:first-child {
  margin: 0;
}

.topBox {
  width: 200px;
  position: absolute;
}

.icon-xinxiang {
  color: rgb(62, 131, 211);
  margin: 0px 14px 0px 6px;
  cursor: pointer;
}

:deep(.el-dialog__body) {
  padding: 0px 30px 8px 10px !important;
}

.text {
  color: rgb(62, 131, 211);
  font-size: 10px;
  cursor: pointer;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

// .logo {
//   // border-radius: 5px;
//   vertical-align: middle;
//   width: 30px;
//   margin-bottom: 5px;
// }
.title {
  position: absolute;
  color: #fff;
  padding-left: 10px;
  font-size: 20px;

  .title1 {
    color: rgb(62, 131, 211);
  }
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
  float: right;
  margin-right: 10px;
  margin-top: 15px;
}
</style>
