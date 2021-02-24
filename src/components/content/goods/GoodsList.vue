<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      },
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    /*让弹性盒元素在必要时进行拆行*/
    flex-wrap: wrap;
    /*在弹性盒对象的div元素中的各项周围留有空告白*/
    justify-content: space-around;
    padding: 2px;

  }
</style>
