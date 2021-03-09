<template>
  <div class="cart-toolbar">
    <div class="left">
      <check-button :is-select="selectAll" @click.native="isSelectAll"></check-button>
      <span class="select">全选</span>
    </div>
    <div class="right">
      <span>合计：{{totalPrice}}</span>
      <span class="buy" @click="buyClick">结算({{checkLength}})</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  import {mapGetters} from 'vuex'
  export default {
    name: "CartToolBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      //计算已选中的商品总金额
      totalPrice() {
        //filter过滤被选择的商品
        return "¥" + this.cartList.filter(item => {
          return item.select
        }).reduce((preValue,item) => {
          return preValue + item.price * item.count
          //toFixed(2)保留两位小数
        },0).toFixed(2)
      },
      //计算已选中的商品个数
      checkLength() {
        return this.cartList.filter(item => {
          return item.select
        }).length
      },
      selectAll() {
        //取反的原因是当过滤出没被选中的，如果存在没被选中的则会返回false，所以要取反
        if (this.cartList.length === 0) return false;
        //1.filter所有被选中的，如果长度等于cartlist的长度，则是全都没选中
        // return this.cartList.filter(item => item.select).length === this.cartList.length
        //2.find被选中的，若果发现有一个被选中的返回true再取反
        return !this.cartList.find(item => !item.select)

        //3.普通遍历
        // for (let item of this.cartList) {
        //   if (!item.select) return false
        // }
        // return true
      }
    },
    methods: {
      //全选全不选点击按钮
      isSelectAll() {
        //如果this.select === true ,也就是全选的状态，所以取反
        if (this.selectAll) {
          this.cartList.forEach(item => item.select = false)
        } else {
          this.cartList.forEach(item => item.select = true)
        }
      },
      buyClick() {
        //如果已选中的商品个数===0，则不能结算
        if (this.checkLength === 0) {
          this.$toast.show('尚未选择商品',1500)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-toolbar {
    height: 50px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
 .left {
   display: flex;
   align-items: center;
   margin: 10px;
 }
  .right .buy {
    background-color: red;
    padding: 10px 25px 10px 25px;
    margin: 10px;
    border-radius: 15px;
    color: #fff;
    font-weight: bold;
  }
</style>
