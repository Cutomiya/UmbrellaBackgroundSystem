<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import { logoutUser } from "@/api/login"
import { useRouter } from 'vue-router'

const router = useRouter()

let user = JSON.parse(localStorage.getItem('manager-user'))
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
//关闭弹窗
const handleClose = (done: () => void) => {
  vFormRef.value.resetForm()
  done()
}
//打开弹窗
const updatePwd = () => {
  dialogVisible.value = true
}
//退出登录
const logout = () => {
  let token = localStorage.getItem('manager-token')
  logoutUser(token).then(res => {
    let resp = res.data
    if (resp.flag) {
      localStorage.removeItem('manager-token')
      localStorage.removeItem('manager-user')
      router.push('/login')
    } else {
      ElMessage.warning(resp.message)
    }
  })
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
    <a href="/" style="padding-left:20px">
      <img class="logo" src="../../common/images/logo.png" alt="">
      <span class="title">雨伞管理系统</span>
    </a>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        欢迎您：{{ user.name }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">修改密码</el-dropdown-item>
          <el-dropdown-item command="b">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dialog v-model="dialogVisible" title="修改密码" width="30%" :before-close="handleClose">
      <div>
        <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
        </v-form-render>
        <el-button class="btn" type="primary" @click="submitForm">Submit</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
.btn {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

:deep(.el-dialog__body) {
  padding: 0px 30px 8px 10px !important;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

.logo {
  // border-radius: 5px;
  vertical-align: middle;
  width: 30px;
  margin-bottom: 5px;
}

.title {
  position: absolute;
  color: #fff;
  padding-left: 10px;
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
  float: right;
  margin-right: 10px;
  margin-top: 15px;

}
</style>
