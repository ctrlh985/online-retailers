<template>
  <div class="profile-center">
    <div>
      <img src="~assets/img/profile/pay.svg">
      <p>待付款</p>
    </div>
    <div>
      <img src="~assets/img/profile/delivered.svg">
      <p>待发货</p>
    </div>
    <div>
      <img src="~assets/img/profile/evaluate.svg">
      <p>待评价</p>
    </div>
    <div>
      <img src="~assets/img/profile/shouhou.svg">
      <p>退款/售后</p>
    </div>
    <div class="order">
      <img src="~assets/img/profile/order.svg">
      <p>我的订单</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileCenter"
  }
</script>

<style scoped>
  .profile-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px;
    margin-top: 10px;
    background: #eee;
  }
  .order{
    color: #d81e06;
  }
</style>
