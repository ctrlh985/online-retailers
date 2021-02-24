<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="desc">{{detailInfo.desc}}</div>
    </div>
    <div class="info-key">
      <img src="~assets/img/detail/pull.svg">
      <span>{{detailInfo.detailImage[0].key}}</span>
    </div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" :key="index" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    methods: {
      imgLoad() {
        //判断所有图片是否加载完，加载完进行一次回调
        this.counter += 1;
        if (this.counter === this.imagesLength) {
          this.$emit('imageLoad')
        }
      }
    },
    //监听图片的个数
    watch: {
      detailInfo() {
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    padding: 30px 0;
    box-shadow: 0px 1px 5px rgba(0,0,0,.2) ;
  }
  .info-desc {
    font-size: 18px;
    color: cadetblue;
    padding: 5px 8px;
    border-top: 2px deepskyblue dotted;
    border-bottom: 2px deepskyblue dotted;
  }
  .info-key {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    width: 300px;
    padding: 5px 13px 5px 0;
    margin: 10px auto 0 auto;
    border-radius: 25px;
  }
  .info-key span {
    font-size: 18px;
    font-weight: bold;
  }

  /*设置图片自适应*/
  .goods-info .info-list, .info-list img {
    width: 100%;
  }

</style>
