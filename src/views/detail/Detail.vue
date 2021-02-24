<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <DetailSwiper :top-images="topImages"></DetailSwiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailGoodsInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommends"/>
    </scroll>
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
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";

  import {getDetail,getRecommend,Goods,Shop,GoodsParam,} from "network/detail";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: null,
        goods: {},
        shop: {},
        detailGoodsInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: []
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
        //获取商品尺码信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //获取评论信息,
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })

      //发送网络请求获取推荐商品数据
      getRecommend().then(res => {
        console.log(res);
        this.recommends = res.data.list;
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
      GoodsList,
      Scroll
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
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
    height: calc(100% - 44px);
  }
  /*.content {*/
  /*  position: absolute;*/
  /*  top: 44px;*/
  /*  bottom: 49px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  overflow: hidden;*/
  /*}*/
</style>
