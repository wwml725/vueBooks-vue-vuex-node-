<template>
  <div class="home">
    <div class="nav-bar">
      <!--<topbar></topbar> -->
      <div class="nav item1">
        <swiper id="navSwiper" class="navSwiper" :options="swiperOption1" ref="mySwiper1">
          <!-- slides -->
          <swiper-slide class="navSlider" :class="{'active': activeIndex === index}" v-for="(item,index) in navSlider"
                        :key="index" @click.native="changeActiveIndex(index)">{{item.title}}
          </swiper-slide>
        </swiper>
      </div>
      <div class="family item2" @click="toFamily">+</div>
    </div>
    <div class="content">
      <swiper id="pageSwiper" class="pageSwiper swiper-wrapper" :options="swiperOption2" ref="mySwiper2">
        <!-- slides -->
        <swiper-slide class="pageSlider" v-for="(item,index) in navSlider" :key="index">
          <!--  <div class="swiper-mask df-c" v-if="loading">
              <CircleLoading></CircleLoading>
            </div>
            <div v-else><PageContent1></PageContent1></div>-->
            <PageContent1 class="slider-content" :homeListDates="homeListDates" :loading="loading" ></PageContent1>

        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
  import topbar from "./topbar/index.vue"
  import CircleLoading from "../../base/CircleLoading/index.vue"
  import PageContent1 from "./Page/PageContent1/index.vue"

  //获取数据
  import {getAll} from "../../api"
  import * as types from '../../store/mutation-types'
  import {mapGetters, mapActions} from 'vuex'



  export default {
    created() {
      this.getData1()
    },
    data() {
      return {
        loading: true,
        navSlider: [
          {title: "推荐", content: "aaaaaaaaaaaa", loading: true},
          {title: "视频", content: "b", loading: true},
          {title: "热点", content: "c", loading: true},
          {title: "社会", content: "d", loading: true},
          {title: "娱乐", content: "e", loading: true},
          {title: "军事", content: "f", loading: true},
          {title: "科技", content: "g", loading: true},
          {title: "汽车", content: "h", loading: true},
          {title: "体育", content: "i", loading: true},
          {title: "财经", content: "j", loading: true},


        ],
        activeIndex: 0,
        swiperOption1: {
          slidesPerView: 5,
          freeMode: true,
        },
        swiperOption2: {
          watchSlidesProgress: true,//监听进度，活动的那个slider为0
          resistanceRatio: 0,//边缘抵抗力，数值越大抵抗力越差
        },
        pageDate:"",
      }
    },
    mounted() {
      this.swiper1.on(
        "init", function (e) {
          //初始化navSwiper,给navSwiper的元素设置样式，或者效果
          //1.获取导航一个slider的宽度
          var navSlideWidth = this.slides.eq(0).css('width'); //导航字数需要统一,每个导航宽度一致
          //2、设置整个nav的宽度
          var navWidth = 0
          for (let i = 0; i < this.slides.length; i++) {
            //所有slider的宽度
            navWidth += parseInt(this.slides.eq(i).css('width'))
          }
          console.log(navSlideWidth);
          console.log(this);
        }
      );
      this.swiper2.on(
        "transitionEnd", (e) => {
          this.changeActiveIndex(this.swiper2.activeIndex);

          console.log("transitionEnd");
        },
      );
    },
    methods: {
      //1、更改激活块儿的索引
      changeActiveIndex(index) {
        this.activeIndex = index;
        this.swiper2.slideTo(index, 0, false);//切换到第一个slide，速度为1秒
        this.makeActiveCenter();

      },
      //2、激活快居中
      makeActiveCenter() {
        let navSwiper = this.swiper1;
        let clientWidth = this.navClientWidth;
        let navSlideWidth = this.navSlideWidth;
        let lastSliderOffset = this.lastSliderOffset;
        let navWidth = 0
        for (let i = 0; i < this.swiper1.slides.length; i++) {
          //所有slider的宽度
          navWidth += parseInt(this.swiper1.slides.eq(i).css('width'))
        }
        let navActiveSlideLeft = this.swiper1.slides[this.activeIndex].offsetLeft //activeSlide距左边的距离

        /* console.log(navSwiper);
         console.log(clientWidth);
         console.log(navSlideWidth);
         console.log(lastSliderOffset);
         console.log(navWidth);
         console.log(navActiveSlideLeft);
 */
        if (navActiveSlideLeft < (clientWidth - parseInt(navSlideWidth)) / 2) {
          navSwiper.setTranslate(0)
        } else if (navActiveSlideLeft > navWidth - (parseInt(navSlideWidth) + clientWidth) / 2) {
          navSwiper.setTranslate(clientWidth - navWidth)//422
        } else {//上面设置一头一尾
          navSwiper.setTranslate((clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft)//navActiveSlideLeft:激活快相对于父元素的左边距的距离
        }
      },
      //3、跳转到分类页
      toFamily() {
        this.$router.push("/family")
      },

      //4、获取数据
      //这样一次发送了两个请求
      async getData1() {//发送请求获取数据放到store中
        let [sliders, hotBooks] = await getAll();
        this.$store.commit(types.GET_HOME_LIST, [sliders,hotBooks])
        this.loading=false;
      }
    },
    computed: {
      swiper1() {
        return this.$refs.mySwiper1.swiper
      },
      swiper2() {
        return this.$refs.mySwiper2.swiper
      },

      //获取dom元素，

      //1、获取导航的可视宽度
      navClientWidth() {
        return this.swiper1.width
      },
      //2、获取导航每一个slider的宽度
      navSlideWidth() {
        return this.swiper1.slides.eq(0).css('width');
      },
      //3、获取最后一个slider的偏移量
      lastSliderOffset() {
        return this.swiper1.slides[this.swiper1.slides.length - 1].offsetLeft
      }, //最后一个slide的位置


      /*
      * 数据处理
      * */
      ...mapGetters({
        homeListDates: 'homeList'
      })

    },
    components: {topbar, CircleLoading, PageContent1},
  }
</script>

<style scoped lang="less">
  .home {
    /*height:100%;*/
    /*width:100%;*/
    background-color: #3ff428;
    .nav-bar {
      display: flex;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #ffffff;
      .item1 {
        width: 90%;
        border: 1px solid red;
        box-sizing: border-box;
        .navSwiper {
          /*background-color: #f4f4f4;*/
          .navSlider {
            text-align: center;
            width: 100%;
          }
        }
      }
      .item2 {
        width:10%;
        height:30px;
        border: 1px solid red;
        box-sizing: border-box;

        color: red;
        font-size: 20px;
        line-height: 30px;
        background-color: #cdcdcd;


      }
    }

    .content {
      position: absolute;
      top:30px;
      left:0;
      right:0;
      bottom: 0;

      background-color: #f4f4f4;
      .pageSwiper {
        background-color: #ffffff;
        .pageSlider {
          /*width: 100%;*/
          /*height: 100%;*/
          /*background-color: #f4f4f4;*/
          overflow: scroll;
          .slider-content{
            /*height:100%;*/
            position: absolute;
            left:0;
            top:0;
            right:0;
            bottom: 0;
          }
        }
      }
    }
    .active {
      color: #cc0031;
    }
  }

  /*.swiper-mask {*/
    /*background-color: #f4f4f4;*/
  /*}*/
</style>
