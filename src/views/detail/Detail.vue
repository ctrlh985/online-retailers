<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content"
            :probe-type="3"
            @scroll="contentScroll"
            ref="scroll">
      <DetailSwiper :top-images="topImages"></DetailSwiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailGoodsInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    //详情页底部导航栏
    <detail-button-bar @addCart="addToCart" @addShoucang="addToShouCang"/>
   <back-top v-show="isShowBackTop" @click.native="backClick"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childcomps/DetailNavBar";
  import DetailSwiper from "./childcomps/DetailSwiper";
  import DetailBaseInfo from "./childcomps/DetailBaseInfo";
  import detailShopInfo from "./childcomps/detailShopInfo";
  import DetailGoodsInfo from "./childcomps/DetailGoodsInfo";
  import DetailParamInfo from "./childcomps/DetailParamInfo";
  import DetailCommentInfo from "./childcomps/DetailCommentInfo";
  import BackTop from "components/content/backtop/BackTop";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import DetailButtonBar from "./childcomps/DetailButtonBar";
  import {getDetail,getRecommend,Goods,Shop,GoodsParam,} from "network/detail";
  import {debounce} from "../../common/utils";
  import {mapActions} from 'vuex'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: null,
        //商品信息
        goods: {},
        //店铺信息
        shop: {},
        //商品详情页
        detailGoodsInfo: {},
        //商品参数
        paramInfo: {},
        //商品评论
        commentInfo: {},
        //商品推荐信息
        recommends: [],
        //详情页Y轴的高度，保存在数组中
        themeTopYs: [],
        isShowBackTop: false,
        getThemeTopY:null,
        currentIndex: 0
      }
    },
    created() {
      //将home里点击的商品id获取
      this.iid = this.$route.params.iid;
      //发送网络请求获取商品详细数据
      getDetail(this.iid).then(res => {
        // console.log(res);
        const data = res.result;
        //获取商品轮播图片
        this.topImages = data.itemInfo.topImages;
        //获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        //获取店铺信息，保存在shop对象中
        this.shop = new Shop(data.shopInfo);
        //获取商品介绍，保存在goodsInfo变量中
        this.detailGoodsInfo = data.detailInfo
        //请求商品尺码信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //请求评论信息,
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })
      //请求推荐商品数据
      getRecommend().then(res => {
        // console.log(res);
        this.recommends = res.data.list;
      })
      //给getThemeTopY赋值（对给this.getThemeTopY赋值的操作进行防抖）
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        //存多一个元素到数组中，用于滚动页面的时候判切换标题
        this.themeTopYs.push(Number.MAX_VALUE)
        // console.log(this.themeTopYs);
      })

    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      detailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      BackTop,
      GoodsList,
      Scroll,
      DetailButtonBar,
    },
    methods: {
      ...mapActions(['addCart','addSC']),
      //图片加载
      imageLoad() {
        this.$refs.scroll.refresh();

        //调用getThemeTopY,获取指定位置
        this.getThemeTopY()

        //在图片加载完成之后，再获取标题跳转的位置保存在数组中，但是这存在问题
        // this.themeTopYs = []
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // this.themeTopYs.push(Number.MAX_VALUE)
        // console.log(this.themeTopYs);
      },
      //点击标题跳转到指定位置
      titleClick(index) {
        // console.log(index);
        //滚动指定的位置，参数一为x轴坐标，参数二为y轴坐标，参数三为滚动花费的时间
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],1000)
      },
      //滚动页面，切换主题
      contentScroll(position) {
        // console.log(position);
        const positionY = -position.y
        //是否显示回到顶部
        this.isShowBackTop = positionY > 1000
        let  length = this.themeTopYs.length
        for (let i = 0 ;i < length;i++){
          // console.log(i);
          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i]) && positionY <= this.themeTopYs[i+1]) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }

          //普通方法
          // if(this.currentIndex !== i && ((i < length-1 && positionY >this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY > this.themeTopYs[i]))) {
          //   // console.log(i);
          //   this.currentIndex = i;
          //   console.log(this.currentIndex);
          //   this.$refs.nav.currentIndex = this.currentIndex
          // }
        }
      },
      //回顶部
      backClick() {
        this.$refs.scroll.scrollTo(0,0)
      },
      //添加购物车
      addToCart() {
        //1.获取购物车需要的商品信息
        let product = {};
        product.iid = this.iid
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.select = false
        product.shop = this.shop.name
        // console.log(product);
        //方式一：以mutation的方式完成添加购物车的功能
        // this.$store.commit('addCart',product)
        //方式二：以actions的方式完成添加购物车功能
        // this.$store.dispatch('addCart',product)
        this.addCart(product).then(res => {
          // console.log(this.$toast);
          this.$toast.show(res,1500)
        })
      },
      addToShouCang() {
        let shoucang = {}
        shoucang.id = this.goods.iid
        console.log('---');
        this.addSC(shoucang).then(res => {
          this.$toast.show(res,1500)
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #ffffff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }
  .content {
    height: calc(100% - 44px - 49px);
  }

</style>
