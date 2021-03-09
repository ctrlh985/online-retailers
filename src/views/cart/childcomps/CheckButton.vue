<template>
  <div class="check_button">
    <img src="~assets/img/cart/round_check.svg" v-if="!isSelect">
    <img src="~assets/img/cart/round_check_fill.svg" v-else/>
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isSelect: {
        type: Boolean,
        default:false
      },
    }
  }

</script>

<style scoped>
</style>
