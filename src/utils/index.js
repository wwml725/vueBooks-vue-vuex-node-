//下拉刷新
export function DropDownRefresh(scroll) {
  let top = scroll.offsetTop;
  //3、dom元素移动的距离
  let distance;
  //4、做一个标识，不拖拽的时候isMove=false
  let isMove = false;
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
}

