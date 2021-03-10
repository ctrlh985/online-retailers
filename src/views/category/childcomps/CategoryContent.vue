<template>
  <div id="category-content">
    <scroll class="scroll-left" ref="scroll">
      <category-title v-for="(item,index) in titleList" :items="item" :key="index" :class="{active: currentIndex === index}" @click.native="titleControl(index)"/>
    </scroll>
    <scroll class="content" ref="scroll">
      <category-item class="category-right">
        <category-item-info v-for="(item,index) in titleContent" class="category-right-info">

          <div slot="img" class="img"><a :href="item.link"><img :src="item.image"></a></div>
            <div slot="title">{{item.title}}</div>
        </category-item-info>
      </category-item>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import CategoryTitle from "./CategoryTitle";
  import CategoryItem from "./CategoryItem";
  import CategoryItemInfo from "./CategoryItemInfo";
  export default {
    name: "CategoryContent",
    components: {
      CategoryItemInfo,
      CategoryTitle,
      CategoryItem,
      Scroll
    },
    props: {
      titleList: {
        type: Array,
        default() {
          return []
        }
      },
      titleContent: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data () {
      return {
        //当前页
        currentIndex: 0
      }
    },
    methods: {
      //点击切换标题
      titleControl(index) {
        this.currentIndex = index
        this.$emit('getTitleCategory',index);
      }
    }
  }
</script>

<style scoped>
  #category-content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    overflow: hidden;
    display: flex;
  }
  .scroll-left,.content {
    height: 100%;
  }
  .scroll-left {
    width: 30%;
  }
  .content {
    width: 70%;
  }
  .category-right {
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex-wrap: wrap;
  }
  .category-right-info {
    width: 45%;
    padding: 5px;
  }
  .img img{
    width: 50%;
  }
  .active{
    background:#fff;
    border-left:3px solid deeppink;
    color: deeppink;
    box-shadow: 1px 1px 3px rgba(100,100,100,.5);
    border-radius: 15px;
  }
</style>
