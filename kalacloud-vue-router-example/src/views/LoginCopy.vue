<template>
    <div class="wxLogin">
      <span class="title">微信扫一扫登录</span>
      <div class="main_wx">
        <wxlogin
          v-if="state.weChat.appid && state.weChat.redirect_uri"
          :appid="state.weChat.appid"
          scope="snsapi_login"
          :redirect_uri="state.weChat.redirect_uri"
          :href="state.weChat.href"
          :state="state.weChat.state"
          :style="state.weChat.style"
        ></wxlogin>
      </div>
      <p>
        请使用微信扫描二维码登录
      </p>
    </div>
  </template>
   
  <script setup lang="ts">
  import { reactive, onMounted } from 'vue'
  import api from '@api/weChat/index'
  interface State {
    weChat: {
      appid: string;
      redirect_uri: string;
      state: string;
      style: stirng;
      href: string;
    }
  }
  const state = reactive<State>({
    weChat: {
      appid: '', // 是开发者在微信开房平台提交申请后，获得appid和一个秘钥
      redirect_uri: '', // 这个是扫码后要跳转的页面，这个路径要urlEncode转码的，转码地址为  https://tool.chinaz.com/tools/urlencode.aspx 注意，要跳转的地址必须在申请的域名下面。
      state: Math.ceil(Math.random() * 1000),
      style: '' // 代表二维码的样式，有black和white可选，
      href: '' // 自定义样式链接
    }
  });
   
  // 获取微信appid和回调地址redirect_uri，指定内嵌的路由地址weChatLogin
  const getWeChatUrl = () => {
    api.wachatQrUrl().then((res: any) => {
      if (res && res.code == 200) {
        state.weChat.appid = res.data.appId
        state.weChat.redirect_uri = res.data.wxCallbackUrl + 'weChatLogin'
      }
    })
  }
   
  // 页面挂载
  onMounted(() => {
    getWeChatUrl();
  })
  </script>