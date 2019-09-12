<template>
  <div class="main">
    <div class="content" ref="scroll" >
      <p class="refresh" ref="refresh">释放刷新</p>
      <ul>
        <li  v-for="(book,index) in books" :key="index">
          <router-link  :to="{name:'detail',params:{bid:book.bookId}}" tag="div" class="imgDiv">
            <img v-lazy="book.bookCover">
          </router-link>

          <div class="bookInfo">
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}} </b>ID: {{book.bookId}}
            <div class="btn-list">
              <button @click.stop="addCart(book)">收藏</button>
              <button @click.stop="remove(book.bookId)">删除</button>

            </div>
          </div>
        </li>
      </ul>
      <div class="more" @click="more">
        <div v-show="hasMore">加载更多</div>
        <div v-show="!hasMore">别扯了，没有了</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {pagination, removeBook} from '../../api';
  import Loading from '../../base/Loading.vue'
  //  import loading from "../loading.gif"
  import * as Types from '../../store/mutation-types'


  export default {
    data() {
      //offset:代表偏移量   hasMore：代表更多
      return {books: [], offset: 0, hasMore: true, isLoaded: false/*, loading: true*/}
    },
    //挂载之前
    created() {
      this.getData();
    },
    //挂载完成之后
    mounted() {
      //1、获取需要下拉的dom元素
      let scroll = this.$refs.scroll;
      //2、获取dom元素的上偏移量
      let top = scroll.offsetTop;
      //3、dom元素移动的距离
      let distance;
      //4、做一个标识，不拖拽的时候isMove=false
      let isMove = false;
      //做下拉刷新
      scroll.addEventListener('touchstart', (e) => {
          //**也就是说，如果滚动了元素，就不能下拉**
          if (scroll.scrollTop !== 0 || scroll.offsetTop !== top) return;
          //5、获取触摸点的初始纵坐标
          let start = e.touches[0].pageY;
          //6、获取刷新提示的内容
          let refreshText = this.$refs.refresh;
          console.log(refreshText);

          let move = (e) => {
            clearInterval(this.timer1);
            clearInterval(this.timer2);
            clearInterval(this.timer3);
            isMove = true;
            let current = e.touches[0].pageY;
            distance = current - start;//移动的距离
            if (distance > 0) {
              scroll.style.top = (distance + top) / 2 + 'px';
              refreshText.innerText = "释放刷新"
            } else {//防止上拉触发不应该的事件
              scroll.removeEventListener('touchmove', move);
              scroll.removeEventListener('touchend', end);
            }
          };

          let end = (e) => {
            scroll.removeEventListener('touchmove', move);
//              scroll.removeEventListener('touchend', end);
            console.log("isMove:" + isMove);
            if (!isMove) return;
            clearInterval(this.timer1);
            clearInterval(this.timer2);
            clearInterval(this.timer3);

            //是dom元素回到原来位置
            this.timer1 = setInterval(() => { // 一共distance 每次-1

              if (distance <= 0) {
//                console.log("timer2");
                clearInterval(this.timer1);
                clearInterval(this.timer2);
                distance = 0;
                scroll.style.top = top + 'px';
              }

              if (distance < 60 && distance > 0) {
                console.log(refreshText.innerText);
                distance -= 1;
                scroll.style.top = (top + distance) / 2 + 'px';
                console.log("keyisongshoule");
              }

              if (distance <= 70 && distance >= 60) {
                clearInterval(this.timer1);
                clearInterval(this.timer2);
                clearInterval(this.timer3);
                scroll.style.top = (top + distance) / 2 + 'px';
                refreshText.innerText = "正在刷新......."

                this.timer3 = setTimeout(() => {
                  clearInterval(this.timer2);
                  this.books = [];
                  //offset设置为初始值
                  this.offset = 0;
                  this.hasMore = true;
                  this.getData();
                  refreshText.innerText = "刷新成功"
                  scroll.removeEventListener('touchmove', move);
                  scroll.removeEventListener('touchend', end);


                  //这个定时器怎么清除，这个定时器的福定时器
                  this.timer2 = setInterval(() => {
//                    console.log(1);
                    distance -= 1;
                    scroll.style.top = (top + distance) / 2 + 'px';
                    if (distance <= 0) {
                      console.log("timer2");
                      clearInterval(this.timer2);
                      distance = 0;
                      scroll.style.top = top + 'px';
                    }
                  })
                }, 1000)
              }

              if (distance > 70) {
                distance -= 5;
                scroll.style.top = (top + distance) / 2 + 'px';
                console.log("keyisongshoule");
              }
            }, 1);

          };

          scroll.addEventListener('touchmove', move);
          scroll.addEventListener('touchend', end);
        }, false);
    },

    methods: {
      async getData() {
        //如果还有更多且没有加载
        if (this.hasMore/*&&!this.isLoaded*/) {
//          this.isLoaded = true;//这个起什么作用了
          let {books, hasMore} = await pagination(this.offset);//books是后来获取的5条数据
          this.books = [...this.books, ...books];

          this.hasMore = hasMore;
          this.offset = this.books.length;//维护偏移量
//          this.isLoaded = false;
          console.log(this.offset);
        }
      },

      loadMore() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll;
//          console.log(this.$refs.scroll);
//        console.log(scrollTop);
          if (scrollTop + clientHeight + 20 > scrollHeight) {
            this.getData();
            // console.log(this);
//            this.more()
          }
        }, 10);//节流
      },
      more() {
        this.getData();
      },

      //实际上就是前台通过一个接口获取到一个函数方法，前台在函数中传入一个id，后台删除这个id对应的数据
      async remove(id) {
        await removeBook(id);//删除某一项
        //从后台删除之后，要删除前台数据，刷新实现，或者从新获取一下
        //但是最好的方法是在后台删除一遍，再从前台删除一遍
        this.books = this.books.filter((item) => (item.bookId != id))
      },

      addCart(book) {
        this.$store.commit(Types.ADD_CART, book);
//        console.log(this.$store.state.cartList);
      }
      ,
    }
    ,
    computed: {}
    ,
    components: {}
  }
</script>
<style scoped lang="less">
  .main {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 50px;
    right: 0;
    overflow-y: scroll;
  }

  .content {
    background-color: white;
    position: absolute;
    top: -30px;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-y: scroll;
  }

  .content .refresh {
    width: 100%;
    height: 30px;
    border: none;
    margin: 0;
    text-align: center;
    line-height: 30px;
    background-color: orangered;
  }

  .content ul {
    padding: 10px;
  }

  .content ul li {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
  }

  img {
    width: 130px;
    height: 150px;
    border: 1px solid blue;
  }
  .bookInfo{
    padding:  0 10px;
  }

  .content h4 {
    font-size: 20px;
    line-height: 35px;
  }

  .content p {
    color: #2a2a2a;
    line-height: 25px;
  }

  .content b {
    color: red;
    margin-right:30px ;
  }

  .content button {
    display: block;
    width: 60px;
    height: 25px;
    background: orangered;
    color: #fff;
    border: none;
    border-radius: 15px;
    outline: none;
  }

  .more {
    margin: 10px;
    background: #2afedd;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
  }

  .btn-list {
    display: flex;
    margin-top: 5px;
    button{
      margin-right: 8px;
    }
    /*justify-content: space-around;*/
  }

  #load {
    width: 100%;
    height: 100px;
    position: relative;
    top: -50px;
  }

  /*.btn-list{*/
  /*display: flex;*/
  /*justify-content: center;*/
  /*}*/
</style>

