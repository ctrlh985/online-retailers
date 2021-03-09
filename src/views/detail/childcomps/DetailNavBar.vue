<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/detail/return.svg">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles"
             class="titles-item"
             :class="{active: index ===currentIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
        </div>
      </div>
      <div slot="right" class="share">
        <img src="~assets/img/detail/share.svg">
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        //将索引传递到detail页面
        this.$emit('titleClick',index)
      },
      backClick() {
        // console.log('返回');
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .titles {
    display: flex;
    font-size: 14px;
  }
  .titles-item {
    flex: 1;
  }
  /*点击高亮*/
  .active {
    color: var(--color-high-text);
  }
  /*给当前处于点击的titleitem加上底部border*/
  .active span {
    border-bottom: 3px solid var(--color-high-text);
  }
  /*设置文字底部border与文字之间的距离*/
  .titles-item span {
    padding: 5px;
  }
  .back,.share img {
    margin-top: 8px;
  }
</style>
