import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
Router.prototype.animate1 = 0;
//代码分割
const _import = file => () => import("../components/" + file + ".vue");

export default new Router({
  routes: [
    {
      path: '/',
      // name: '首页',
      component: _import("Layout/index"),
      redirect: "/home",
      children: [
        {path: 'home', component: _import('Home/index'), name: '首页', meta: {title: "首页"},}
      ]
    },

    {
      path: '/list',
      // name: '列表',
      component: _import("Layout/index"),
      // redirect: "/",
      children: [
        {path: '/', component: _import('List/index'), name: '列表', meta: {title: "列表"}}
      ]
    },

    {
      path: '/cart',
      // name: '购物车',
      component: _import("Layout/index"),
      // redirect: "/",
      children: [
        {path: '/', component: _import('Cart/index'), name: '购物车', meta: {title: "购物车"}}
      ]
    },

    {
      path: '/add',
      // name: '添加',
      component: _import("Layout/index"),
      redirect: "/",
      children: [
        {path: '/', component: _import('Add/index'), name: '添加', meta: {title: "添加"}}
      ]
    },

    {
      path: '/family',
      name: 'family',
      meta: {
        slide: 3,
        title: "分类"
      },
      component: _import("Home/Family/index"),
    },

    {
      path: '/detail/:bid',
      name: 'detail',
      meta: {
        slide: 1,
        title: "详情页"
      },
      component: _import("Detail/index"),
    },

    {
      path:"*",
      redirect:"/home"
    }
  ]
})
