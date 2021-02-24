<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo">
      <span class="shop-name">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better' : item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more' : item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <img src="~assets/img/detail/mall.svg">
      <span>进店逛逛</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "detailShopInfo",
    props: {
      shop: {
        type: Object,
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    margin-top: 30px;
    box-shadow: 0 2px 5px rgba(0,0,0,.1);
    padding: 20px 8px;
  }
  .shop-top {
    display: flex;
    /*让元素垂直中心对齐*/
    align-items: center;
  }
  .shop-top img {
    width: 60px;
    box-shadow: 0 3px 5px rgba(0,0,0,.1);
    border-radius: 50%;
  }
  .shop-top .shop-name {
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
  }
  .shop-middle {
    display: flex;
  }
  .shop-middle-item {
    flex: 1;
  }
  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    border-right: darkgray 1px solid;
    align-items: center;
    color: #333
  }
  .sells-count, .goods-count {
    font-size: 20px;
  }
  .sells-text,.goods-text {
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
  }

  .shop-middle-right {
    font-size: 15px;
    display: flex;
    justify-content: space-around;
    color: #333;
    font-weight: bold;
  }
  .shop-middle-right table td {
    padding: 5px;
  }
  .shop-middle-right .score {
    color: #5ea732;
  }
  .shop-middle-right .better span {
    background-color: #5ea732;
    color: azure;
    text-align: center;
  }
  .shop-middle-right .score-better {
    color: #f13e3a;
  }
  .shop-middle-right .better-more span{
    background-color: #f13e3a;
  }
  .shop-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    padding: 5px;
    margin: 10px auto;
    width: 300px;
    border-radius: 25px;
  }
  .shop-bottom span {
    font-size: 18px;
    font-weight: bold;
  }
</style>
