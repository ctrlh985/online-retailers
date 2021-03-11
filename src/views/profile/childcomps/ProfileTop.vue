<template>
  <div class="profileTop">
    <div class="top">
      <div class="left">
        <img src="~assets/img/profile/user.svg">
        <div class="login" @click="loginClick">登录/注册></div>
      </div>
      <div class="right">
        <img src="~assets/img/profile/friend_add.svg">
        <img src="~assets/img/profile/settings_light.svg">
        <img src="~assets/img/profile/message_light.svg">
      </div>
    </div>
    <div class="bottom">
      <div>
      <img src="~assets/img/profile/favor.svg">
      <p>商品收藏</p>
      </div>
      <div>
      <img src="~assets/img/profile/shop.svg">
      <p>店铺关注</p>
      </div>
      <div>
      <img src="~assets/img/profile/like.svg">
      <p>喜欢的内容</p>
      </div>
      <div>
      <img src="~assets/img/profile/footprint.svg">
      <p>浏览记录</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileTop",
    methods: {
      loginClick() {
        // console.log('---')
        this.$toast.show("客观别急，程序小哥正在快马加鞭地开发中",1500)
      }
    }
  }
</script>

<style scoped>
  .profileTop {
    height: 150px;
    background: #eeeeee;
    padding: 0 10px;
    opacity: .8;
  }
  .top,.bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .left {
    line-height: 65px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 10px;
  }
  .top .login {
    margin: 15px
  }
  .top .right img {
    padding: 0 5px
  }
  .bottom{
    font-size: 13px;
    padding: 0 25px;
  }
</style>
