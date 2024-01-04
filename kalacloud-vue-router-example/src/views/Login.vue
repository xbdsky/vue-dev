<template>
    <div>
      <div id="qrcode-container"></div>
      <button @click="checkLoginStatus">检查登录状态</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    mounted() {
      this.loadSDK();
    },
    methods: {
      loadSDK() {
        const script = document.createElement('script');
        script.src = 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js';
        script.onload = this.initSDK;
        document.body.appendChild(script);
      },
      initSDK() {
        const obj = new WxLogin({
          self_redirect: false,
          id: "qrcode-container",
          appid: "wxe8213f696c7ac4ea",
          scope: "snsapi_login",
          redirect_uri: encodeURIComponent('https://team-linker.com'),
          state: "8888",
          style: "",
          href: ""
        });
      },
      checkLoginStatus() {
        console.log("checkLoginStatus")
        // 发送请求检查登录状态
        axios.get('/checkLoginStatus')
          .then(response => {
            // 处理登录状态检查结果
            console.log( response )
          })
          .catch(error => {
            // 处理异常情况
            console.log( error )
          });
      }
    }
  };
  </script>
  