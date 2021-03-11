<template>
  <div class="myPay">
    <div>
      <img src="~assets/img/profile/jifen.svg">
      <p>积分</p>
    </div>
    <div>
      <img src="~assets/img/profile/youhui.svg">
      <p>优惠券</p>
    </div>
    <div>
      <img src="~assets/img/profile/hongbao.svg">
      <p>红包</p>
    </div>
    <div>
      <img src="~assets/img/profile/huabei.svg">
      <p>花呗</p>
    </div>
    <div class="qianbao">
      <img src="~assets/img/profile/qianbao.svg">
      <p>我的钱包</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyPay"
  }
</script>

<style scoped>
  .myPay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px;
    margin-top: 10px;
    background: #eee;
  }
  .qianbao {
    color: #d81e06;
  }
</style>
