import Vue from 'vue'
import {getAll} from "../../api"
import * as types from '../mutation-types'


const state = {
  homeList:{
    sliders:[],
    hotBooks:[],
    // loading:false,
  },
};
//2、getters
const getters = {
  homeList: state => state.homeList,
};
const mutations = {
  [types.GET_HOME_LIST](state, [product1,product2]) {
    state.homeList.sliders = product1;
    state.homeList.hotBooks = product2;
  }
}

export default {
  state,
  mutations,
  getters
}
