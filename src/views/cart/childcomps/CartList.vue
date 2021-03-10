<template>
    <div id="cart-list">
      <scroll class="content" ref="scroll">
        <cart-list-item v-for="(item,index) in cartList"
                        :index="index" :product="item"/>
      </scroll>
    </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import Scroll from "components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";
  export default {
    name: "CartList",
    components : {
      Scroll,
      CartListItem,
    },
    computed: {
      //cartList为购物车里的商品，状态为数组
      ...mapGetters(['cartList'])
    },

    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  #cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    overflow: hidden;
  }
  .content {
    height: 100%;
  }
</style>
