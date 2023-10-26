import { createRouter,createWebHashHistory } from "vue-router";

const routes = [
    {
      path:'/home',
      name:Home,
      component:Home
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/detail',
      component:Detail
    },
    {
      path:'/',
      redirect:'/home'
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  let code = null
  if (to.name === '指定你项目中微信登陆页面的当前路由名称') {
    code = to.query.code || null
  }
  // 微信授权登陆
  if (code) {
    let params = {
      code,
      state:'',
    }
    // 调用后端接口将参数code传给后端，让后端根据code，appid，AppSecret等相关参数去微信平台换取access_token
    api.wechatLogin(params).then(res => {
      if (res.code == 200) {
        //返回参数如果绑定微信返回token正常存储登录未绑定账号返回unionid绑定当然也可以以微信信息为主题自动生成账号
        // 登录成功，并提示,跳转到用户主页面
        Message({
          type: 'success',
          message: '登录成功'
        })
        router.push({ path: '跳转指定页面' })
      }
    })
  } else {
    next()
  }
})

export default router