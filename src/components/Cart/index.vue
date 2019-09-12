<template>
        <ul class="cart-content">
          <router-link tag="li"  class="book" v-for="(l,index) in cart.cartList"  :key="index" :to="{name:'detail',params:{bid:l.bookId}}">
            <div class="imgDiv">
              <img :src="l.bookCover" alt="">
            </div>
            <div class="bookMsg">
              <h3>{{l.bookName}}</h3>
              <div class="count">
                <div>
                  <button class="btn-count" @click.stop="INCREASE(l)">+</button>
                  {{l.bookCount}}
                  <button class="btn-count" @click.stop="DECREASE(l)">-</button>
                </div>
                <div>
                  <span>单价：{{l.bookPrice}}</span>
                </div>
              </div>
              <p>小计：{{(l.bookCount * l.bookPrice).toFixed(2)}}</p>
              <button class="btn-remove">删除</button>
            </div>
          </router-link>
          <li class="bookCount">共计{{count}}本</li>
        </ul>
</template>
<script>

  //辅助函数 语法糖
  import {mapState, mapGetters} from 'vuex'
  //  console.log(mapGetters('cartList'));
  import * as types from '../../store/mutation-types'

  export default {
    data() {
      return {msg: 'hello'}
    },
    created() {

    },
    methods: {
      INCREASE(book) {
        this.$store.commit(types.INCREASE,book);
//        console.log(this.$store.state.cartList);
      },
      DECREASE(book) {
        this.$store.commit(types.DECREASE,book);
//        console.log(this.$store.state.cartList);
      },
    },
    computed: {
      ...mapState(["cart"]),
      ...mapGetters(["count"]),
    },
    components: {}
  }
</script>
<style scoped lang="less">
  .cart-content {
    width: 100%;
    /*height: 100%;*/
    overflow-y: scroll;

    .book {
      margin-bottom: 3px;
      border-top: 1px solid #cc1418;
      border-bottom: 1px solid #cc1418;
      box-sizing: content-box;
      width: 100%;
      height: 120px;
      display: flex;
      .imgDiv {
        width: 130px;
        height: 120px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .bookMsg {
        width: 100%;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .count {
          display: flex;

          .btn-count {
            width: 20px;
            height: 20px;
            border: none;
            background: #6dffb3;

          }
          p {
            margin-left: 20px;
          }
        }
        .btn-remove {
          width: 60px;
          height: 20px;
          border: 1px solid black;
          background: red;
        }
      }

    }

  }


</style>
