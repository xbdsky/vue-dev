<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { googleTokenLogin, googleAuthCodeLogin } from 'vue3-google-login'
import wxlogin from 'vue-wxlogin'

interface State {
  weChat: {
    appid: string;
    redirect_uri: string;
    state: string;
    style: stirng;
    href: string;
  }
}

const GOOGLE_CLIENT_ID = '952412227455-dlvo9588dbdbeevfdnurqi791f2j1peh.apps.googleusercontent.com'

const data = ref()

const isShow = ref(false);

const APPID = 'wxe8213f696c7ac4ea'
const hrefUrl = 'https://team-linker.com'

const state = reactive<State>({
  weChat: {
    appid: APPID,
    redirect_uri: encodeURIComponent(hrefUrl),
    state: Math.ceil(Math.random() * 1000),
    style: '',
    href: 'data:text/css;base64,LmltcG93ZXJCb3ggLnRpdGxlIHsNCiAgZGlzcGxheTogbm9uZTsNCn0NCi5pbXBvd2VyQm94IC5zdGF0dXMuc3RhdHVzX2Jyb3dzZXIgew0KICBkaXNwbGF5OiBub25lOw0KfQ0KLmltcG93ZXJCb3ggLnFyY29kZSB7DQogIGJvcmRlcjogbm9uZTsNCiAgd2lkdGg6IDIwMHB4Ow0KICBoZWlnaHQ6IDIwMHB4Ow0KfQ0KLmltcG93ZXJCb3ggLnN0YXR1c3sNCiAgZGlzcGxheTogbm9uZQ0KfQ=='
  }
})

const handleGoogleAccessTokenLogin = () => {
  googleTokenLogin({
    clientId: GOOGLE_CLIENT_ID
  }).then((response) => {
    data.value = response
  })
}

const handleGoogleAuthCodeLogin = () => {
  googleAuthCodeLogin({
    clientId: GOOGLE_CLIENT_ID
  }).then((response) => {
    data.value = response
  })
}

// 获取微信appid和回调地址redirect_uri，指定内嵌的路由地址weChatLogin
const getWeChatUrl = () => {
  /*api.wachatQrUrl().then((res: any) => {
    if (res && res.code == 200) {
      state.weChat.appid = res.data.appId
      state.weChat.redirect_uri = res.data.wxCallbackUrl + 'weChatLogin'
    }
  })*/
}

// 跳转微信登录二维码授权页面
const handLoginByWx = () => {
  // 重定向地址重定到当前页面，在路径获取code
  const hrefUrl = window.location.href
  // 判断是否已存在code
  window.location.href = `https://open.weixin.qq.com/connect/qrconnect?appid=APPID&redirect_uri=${encodeURIComponent(hrefUrl)}&response_type=code&scope=snsapi_login`
}

const openPl = () => {
  isShow.value = true;
}

// 页面挂载
onMounted(() => {
  //getWeChatUrl();
  //setWxerwma();
})

// 实例微信js对象
const setWxerwma = () => {
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.src = 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'
  const wxElement = document.body.appendChild(s)
  wxElement.onload = function () {
    var obj = new WxLogin({
      id: '', // 需要显示的容器id
      appid: '', // 公众号appid wx*******
      scope: 'snsapi_login', // 网页默认即可
      redirect_uri: encodeURIComponent(''), // 授权成功后回调的url
      state: Math.ceil(Math.random() * 1000), // 可设置为简单的随机数加session用来校验
      style: 'black', // 提供"black"、"white"可选。二维码的样式
      href: '' // 外部css文件url，需要https
    })
  }
}
</script>

<template>
  <div>
    <!-- 使用 Google 渲染預設按鈕 -->
    <!-- <GoogleLogin :callback="callback" /> -->

    <!-- 使用 Google 渲染預設按鈕及 One Tap prompt -->
    <!-- <GoogleLogin :callback="callback" prompt /> -->

    <!-- 使用 Google 渲染預設按鈕及 One Tap prompt 並自動登入 -->
    <!-- <GoogleLogin :callback="callback" prompt auto-login/> -->

    <!-- 使用 GoogleLogin 並在預設插槽內添加自定義按鈕 -->
    <!-- <GoogleLogin :callback="callback">
      <button>使用 Google 進行登入</button>
    </GoogleLogin> -->

    <!-- 使用自定義按鈕登入後回傳 Access Token -->
    <!-- <button
      type="button"
      @click="handleGoogleAccessTokenLogin"
    >使用 Google 進行登入</button>-->

    <!-- 使用自定義按鈕登入後回傳 Auth Code -->
    <button
      type="button"
      @click="handleGoogleAuthCodeLogin"
    >使用 Google 進行登入</button>

    <p>
      {{ data }}
    </p>
  </div>

  <!--微信授权登录按钮 -->
  <img src="/assets/images/weixin.png" /><a style="line-height: 60px;height: 60px; margin: 0 5px;" type="text" @click="openPl">微信扫码登录</a>

  <div class="wxLogin" v-if="isShow">
    <wxlogin
        :appid="state.weChat.appid"
        scope="snsapi_login"
        :redirect_uri="state.weChat.redirect_uri"
        :href="state.weChat.href"
        :state="state.weChat.state"
        :style="state.weChat.style"
      ></wxlogin>
  </div>

  <!-- state.weChat.appid && state.weChat.redirect_uri ||  -->

  <!--<wxlogin scope="snsapi_login" appid="wxe8213f696c7ac4ea" :redirect_uri="redirect_uri" state="2"  href="data:text/css;base64,LmltcG93ZXJCb3ggLnRpdGxlIHsKIGRpc3BsYXk6IG5vbmU7Cn0KLmltcG93ZXJCb3ggLnN0YXR1cy5zdGF0dXNfYnJvd3NlciB7CiBkaXNwbGF5OiBub25lOwp9Ci5pbXBvd2VyQm94IC5xcmNvZGUgewogYm9yZGVyOiBub25lOwogd2lkdGg6IDIwMHB4OwogaGVpZ2h0OiAyMDBweDsKfQouaW1wb3dlckJveCAuc3RhdHVzewogZGlzcGxheTogbm9uZQp9Ci5wYW5lbENvbnRlbnQgLmluZm97CiBkaXNwbGF5OiBub25lCn0=">
  </wxlogin>-->

  <!-- <wxlogin :appid="appid" :scope="'snsapi_login'" :theme="'black'" :redirect_uri="redirect_uri" href='data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIwMHB4O2hlaWdodDoyMDBweH0NCi5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjAwcHh9DQouc3RhdHVzX2ljb24ge2Rpc3BsYXk6IG5vbmV9DQouaW1wb3dlckJveCAuc3RhdHVzIHt0ZXh0LWFsaWduOiBjZW50ZXI7fQ0KLmltcG93ZXJCb3ggLnRpdGxlIHtkaXNwbGF5OiBub25lfQ0KaWZyYW1lIHtoZWlnaHQ6IDMyMnB4O30NCg==' rel="external nofollow"></wxlogin> -->

  <!-- <wxlogin
      :appid="appid"
      :scope="'snsapi_login'"
      :theme="'black'"
      :redirect_uri="redirect_uri"
      :href='bast64css'
      rel="external nofollow"
      >
  </wxlogin> -->
</template>

<style scoped>
p {
  margin-top: 12px;
  word-break: break-all;
}
</style>