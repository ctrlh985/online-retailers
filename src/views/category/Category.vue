<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
      <div slot="right" class="right-img"><img src="~assets/img/common/message.svg"></div>
    </nav-bar>
    <category-content :title-list="titleList" :title-content="titleContent" @getTitleCategory="getTitleCategory"/>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CategoryContent from "./childcomps/CategoryContent";
  import {getCategory,getSubCategory} from "network/category";
  export default {
    name: "Category",
    components: {
      NavBar,
      CategoryContent,
    },
    data() {
      return {
        //分类标题
        titleList: null,
        //分类内容
        titleContent: null
      }
    },
    created() {
      //获取分类数据
      getCategory().then(res => {
        this.titleList = res.data.category.list
        // console.log(this.titleList)
        getSubCategory(this.titleList[0].maitKey).then(res => {
          this.titleContent = res.data.list
          // console.log(this.titleContent)
        })
      })
    },
    methods: {
      //点击不同标题切换不同内容
      getTitleCategory(index) {
        getSubCategory(this.titleList[index].maitKey).then( res => {
          // console.log(res);
          this.titleContent = res.data.list
        })
      }
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
    position: relative;
  }
  .nav-bar {
    font-weight: bold;
  }
  .right-img {
    margin-top: 3px;
  }

</style>
