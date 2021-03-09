<template>
  <div class="button-bar">
    <div class=" bar bar-left">
      <div class="service">
        <img class="img" src="~assets/img/detail/service_fill.svg">
        <span class="text">客服</span>
      </div>
      <div class="shop">
        <img class="img" src="~assets/img/detail/mall.svg">
        <span class="text">店铺</span>
      </div>
      <div class="favor">
        <img class="img" src="~assets/img/detail/favor.svg">
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailButtonBar",
    methods: {
      addToCart() {
        //将点击添加到购物车弹射到detail页面上
        this.$emit('addCart')
        // console.log("点击添加到购物车");
      }
    }

  }
</script>

<style scoped>
.button-bar {
  height: 49px;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
}
.bar {
   display: flex;
   flex: 1;
 }
/*均等分布*/
.bar> div {
  flex: 1;
}
/*设置图片的位置以及大小*/
.bar .img {
  display: block;
  height: 22px;
  width: 22px;
  margin: 2px auto 1px;
}
/*设置高度*/
.bar-right{
  align-items: center;
  height: 49px;
  font-size: 17px;
  line-height: 49px;
}
.cart {
  background-color: orange;
  line-height: 49px;
}
  .buy {
    background-color: deeppink;
    line-height: 49px;
    color: #ffffff;
  }
  .bar .text {
     font-size: 13px;
  }
</style>
