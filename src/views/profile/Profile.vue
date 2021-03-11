<template>
  <div id="profile">
    <ProfileTop/>
    <profile-center/>
    <my-pay/>
  </div>
</template>

<script>
  import ProfileTop from "./childcomps/ProfileTop";
  import ProfileCenter from "./childcomps/ProfileCenter";
  import MyPay from "./childcomps/MyPay";
  export default {
    name: "Profile",
    components: {
      ProfileTop,
      ProfileCenter,
      MyPay
    },
    methods: {
    }
  }
</script>

<style scoped>
  #profile {
    height: 100vh;
  }
</style>
