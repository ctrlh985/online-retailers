<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    //App组件传递path，activeColor给tab-bar-item
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'black'
      }
    },
    data() {
      return{
        // isActive: true
      }
    },
    computed: {
      isActive() {
        //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
        // 如果没有找到匹配的字符串则返回 -1
        //所以当item被点击时，返回true，
        // 没有点击时，返回false，
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        // console.log('itemClick');
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;

  }
  .tab-bar-item img {
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

</style>
