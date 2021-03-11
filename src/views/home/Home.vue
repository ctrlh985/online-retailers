<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="left" class="position-img"><img src="~assets/img/common/location.svg"></div>
      <div slot="center">Ctrl商城</div>
      <div slot="right" class="position-img"><img src="~assets/img/common/search.svg"></div>
    </nav-bar>
    <tab-ctrl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabCtrl1"
              class="tab-ctrl" v-show="isTabFixed"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-ctrl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabCtrl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabCtrl from "components/content/tabCtrl/TabCtrl";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backtop/BackTop";

  import {getHomeMultiData, getHomeGoods} from "network/home";

  import {debounce} from "common/utils";

  export default {
    name: "Home",
    components: {
      NavBar,
      TabCtrl,
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed: {
      // 利用计算属性动态显示商品列表
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    //打印home是否被销毁
    destroyed() {
      console.log('home destroyed');
    },
    //再次回来时设置当前位置
    activated() {
      // console.log('activated');
      //调用scroll对象中的scrollTo函数去到指定位置
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      //刷新一次防止出现不能下拉
      this.$refs.scroll.refresh()
    },
    //离开home时保存当前位置
    deactivated() {
      // console.log('deactivated');
      //从scroll对象中获取当前的y坐标，保存在saveY变量中
      this.saveY = this.$refs.scroll.getScrollY()
    },
    created() {
      //请求首页数据
      this.getHomeMultiData();
      //请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted() {
      //监听事件总线发送的事件
      const refresh = debounce(this.$refs.scroll.refresh,50);
      this.$bus.$on('itemImgLoad',() => {
        refresh()
      })
    },
    methods: {

      // 事件监听相关方法
      tabClick(index) {
        // console.log(index);
        //通过switch判断当前属于什么类型
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break
        }
        //解决tabCtrl选择不一致的问题
        this.$refs.tabCtrl1.currentIndex = index
        this.$refs.tabCtrl2.currentIndex = index
      },
      //返回顶部函数
      backClick() {
        // console.log('backCClick');
        //通过this.$refs.scroll获取组件对象
        this.$refs.scroll.scrollTo(0, 0)
      },
      //自定义滚动事件，判断是否显示回顶部按钮
      contentScroll(position) {
        //将当前滚动位置的y坐标与1000比较，并将返回的boolean赋值给isShowBackTop
        this.isShowBackTop = (-position.y > 1000)
        // console.log(-position.y)
        this.isTabFixed = (-position.y) > this.tabOffsetTop

      },
      //下拉加载更多
      loadMore() {
        // console.log('下拉加载更多');
        this.getHomeGoods(this.currentType)
      },

      swiperImgLoad() {
        // console.log(this.$refs.tabCtrl2.$el.offsetTop);
        //获取tabCtrl2的offsetTop
        this.tabOffsetTop = this.$refs.tabCtrl2.$el.offsetTop
      },


      //以下为网络请求
      //将发送网络请求的函数封装起来，方便后期方法复用
      getHomeMultiData() {
        getHomeMultiData().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        // console.log(res);
        //动态获取页码，在传入类型的page中加1
        // console.log(this.goods[type].page);
        //将页码加1
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>

  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    /*background-color: var(--color-tint);*/
    font-weight: bold;
    /*开启固定定位*/
    /*网页原生滚动的时候为了让它固定，而使用fixed定位，而现在使用的是better-scroll局部滚动则不需要*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  /*利用定位设置scroll滚动窗口的高度*/
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .tab-ctrl {
    position: relative;
    z-index: 9;
    top: -1px;
  }
  .position-img {
    margin-top: 3px;
  }

  /*利用计算设置scroll滚动窗口的高度*/
  /*.content {*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 59px;*/
  /*}*/
</style>
