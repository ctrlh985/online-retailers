<template>
  <div class="tabCtrl">
    <div class="tabCtrlItem" v-for="(item,index) in titles"
          :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabCtrl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      itemClick (index) {
        this.currentIndex = index;
        //将点击事件传递给home组件
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tabCtrl {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tabCtrlItem {
    flex: 1;
  }
  .tabCtrlItem span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
