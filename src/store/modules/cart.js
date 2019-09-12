import Vue from 'vue'
import {getAll} from "../../api"
import * as types from '../mutation-types'

const state = {
  cartList:JSON.parse(localStorage.getItem('cartList'))||[] //存放所有的商品
};

const getters = {
  count:(state)=>state.cartList.reduce((prev,next)=>prev+next.bookCount,0)
}

const mutations = {
  [types.ADD_CART](state, book) {
    //默认有一个参数state （代表vuex中的state中的数据）
    //book是添加的一本书，如果有这本书累加的数量，如果没有数量为1，放到cartList中
    //标准的网站购物车是什么样子的？
    //1、登录之前：
        //1)将数据保存在浏览器中
        //2)登录之后，购物车页面会直接读取缓存中的数据，并且把登录账户的后台数据库购物车数据与这些数据进行合并，在提交至后台数据库
    //2、登陆之后：
        //1)每一次添加购物车都会，直接提交至后台数据库
    //3、现在淘宝都是：点击加入购物车，需要先登录，应该就是登陆之后才可以加入购物车（直接放进数据库购物车列表）
    let product = state.cartList.find(item => item.bookId === book.bookId);
    if (product) {
      product.bookCount += 1;//只是书添加了一本数据没有刷新，还要更新数组
      state.cartList = [...state.cartList];//用新数组替换掉老数组
      localStorage.setItem('cartList',JSON.stringify(state.cartList));
    } else {
      book.bookCount = 1;
      //将原有数据改变或者可以替换
      state.cartList = [...state.cartList, book]//用新数组替换掉老数组
      localStorage.setItem('cartList',JSON.stringify(state.cartList));
    }
  },
  [types.INCREASE](state,book) {
    book.bookCount += 1;
    state.cartList = [...state.cartList]
  },
  [types.DECREASE](state,book) {
    book.bookCount -= 1;
    state.cartList = [...state.cartList]
  }
};

export default {
  state,
  mutations,
  getters
}
