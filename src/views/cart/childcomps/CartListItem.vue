<template>
  <div class="cartList-item">
    <div class="left">
      <check-button class="button" :is-select="product.select" @click.native="changed"></check-button>
    </div>
    <div class="center">
      <img :src="product.image" alt="">
    </div>
    <div class="right" @click="cartItemClick">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="bottom">
        <span class="item-price">￥{{product.price}}</span>
        <span class="item-count">{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  import {mapGetters} from 'vuex'
  export default {
    name: "CartListItem",
    components: {
      CheckButton
    },
    data () {
      return {
      }
    },
    //获取product父组件Cartlist传递的数据
    props: {
      product: {
        type: Object,
        default () {
          return {}
        }
      },
      index: {
        type: Number,
        default: 0
      }
    },
    computed: {
      ...mapGetters({
        cartList: 'cartList'
      })
    },
    methods: {
      //选中商品进行结算
      changed() {
        // console.log('----');
        this.cartList[this.index].select =! this.cartList[this.index].select
        // this.product.select =! this.product.select
        // console.log(this.cartList[this.index].select);
      },
      //跳转到详情页
      cartItemClick() {
        // console.log('跳转详情页');
        this.$router.push('/detail/' + this.product.iid)
      }
    }
  }
</script>

<style scoped>
  .cartList-item {
    display: flex;
    justify-content:space-around;
    align-items: center;
    padding:5px;
    border-bottom: 1px solid #ccc;
  }
  .center img {
    width: 60px;
    border-radius: 5px;
  }
  .right {
    width: 65%;
  }
  .item-title,.item-desc {
    white-space: nowrap;
    overflow: hidden;
    /*超出文本的内容用省略号显示*/
    text-overflow: ellipsis;
  }
  .item-title {
    font-size: 15px;
    color: orangered;
    margin-top: 3px;
  }
  .item-desc {
    font-size: 13px;
    color: #666;
    margin-top: 15px;
  }
  .bottom {
    display: flex;
    justify-content:space-between;
    /*padding-top: 20px;*/
    margin-top: 20px;
  }
  .bottom .item-price {
    color: orangered;
  }
  .bottom .item-count {
    border: 1px solid ;
    border-radius: 5px;
    padding: 0px 8px 0 8px;
  }
</style>
