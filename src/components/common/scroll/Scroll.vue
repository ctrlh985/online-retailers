<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      //自定义监听位置，由开发者决定
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        //定义一个变量接收BScroll对象
        scroll: null
      }
    },
    mounted() {
      //1.创建BScroll对象
      //这里需要注意的是，获取wrapper尽可能不使用document.querySelector，
      //因为它获取的值不明确
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      //监听滚动位置
      if (this.probeType ===2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          // console.log(position);
          //将监听的位置传递个父组件
          this.$emit('scroll',position)
        })
      }
      //监听上拉加载
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          // console.log('上拉加载更多');
          this.$emit('pullingUp')
        })
      }

    },
  methods: {
      //将滚动到指定位置封装成为函数
      scrollTo(x,y,time=500) {
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
    //下拉加载
    finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      // console.log('---');
      this.scroll && this.scroll.refresh()
    },
    //获取当前位置
    getScrollY() {
        return this.scroll ? this.scroll.y : 0
    }
  }
  }
</script>

<style scoped>

</style>
