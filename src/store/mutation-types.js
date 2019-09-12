//1、页面获取产品
export const GET_HOME_LIST = "GET_HOME_LIST"



//2、加入购物车的功能

//添加购物车(添加商品)
export const ADD_CART = "ADD_CART"
//删除购物车（要求传入id）
export const REMOVE_CART="REMOVE_CART"
//更改商品数量（{id:,1/-1}）
export const CHANGE_COUNT="CHANGE_COUNT"
//清空购物车(把状态清空)
export const CLEAR_CART="CLEAR_CART"
//计数器
export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"
