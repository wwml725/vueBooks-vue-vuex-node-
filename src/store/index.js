import Vue from "vue"
import Vuex from "vuex"
// import logger from "vuex/dist/logger"
import home from "./modules/home.js"
import cart from "./modules/cart.js"

Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {//将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、
    home,
    cart
  },
  // strict: true,
  // plugins: [logger()]

})
export default store;
//////////
