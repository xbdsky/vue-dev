<script>
import { ref } from 'vue'
import { googleTokenLogin, googleAuthCodeLogin } from 'vue3-google-login'
import wxlogin from 'vue-wxlogin';

const GOOGLE_CLIENT_ID = '952412227455-dlvo9588dbdbeevfdnurqi791f2j1peh.apps.googleusercontent.com'

const data = ref()

const appid = 'wxe8213f696c7ac4ea'
const redirect_uri = 'https://team-linker.com'

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

export default {
  components: { wxlogin },
  setup() {
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

    <!--<wxlogin scope="snsapi_login" appid="wxe8213f696c7ac4ea" :redirect_uri="redirect_uri" state="2"  href="data:text/css;base64,LmltcG93ZXJCb3ggLnRpdGxlIHsKIGRpc3BsYXk6IG5vbmU7Cn0KLmltcG93ZXJCb3ggLnN0YXR1cy5zdGF0dXNfYnJvd3NlciB7CiBkaXNwbGF5OiBub25lOwp9Ci5pbXBvd2VyQm94IC5xcmNvZGUgewogYm9yZGVyOiBub25lOwogd2lkdGg6IDIwMHB4OwogaGVpZ2h0OiAyMDBweDsKfQouaW1wb3dlckJveCAuc3RhdHVzewogZGlzcGxheTogbm9uZQp9Ci5wYW5lbENvbnRlbnQgLmluZm97CiBkaXNwbGF5OiBub25lCn0=">
    </wxlogin>-->

    <wxlogin :appid="appid" :scope="'snsapi_login'" :theme="'black'" :redirect_uri="redirect_uri" href='data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIwMHB4O2hlaWdodDoyMDBweH0NCi5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjAwcHh9DQouc3RhdHVzX2ljb24ge2Rpc3BsYXk6IG5vbmV9DQouaW1wb3dlckJveCAuc3RhdHVzIHt0ZXh0LWFsaWduOiBjZW50ZXI7fQ0KLmltcG93ZXJCb3ggLnRpdGxlIHtkaXNwbGF5OiBub25lfQ0KaWZyYW1lIHtoZWlnaHQ6IDMyMnB4O30NCg==' rel="external nofollow"></wxlogin>

  </div>
</template>

<style scoped>
p {
  margin-top: 12px;
  word-break: break-all;
}
</style>