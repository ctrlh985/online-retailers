<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.price}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.columns[2]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin-top: 20px;
    padding: 0 10px;
    box-shadow: 0 2px 10px  rgba(0,0,0,.1);
  }
  .info-title {
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline var(--color-high-text);
  }
  .info-price {
    margin: 15px 0;
    position: relative;
  }
  .new-price {
    color: deeppink;
    font: 30px bold ;
    margin-right: 5px;
  }
  .old-price {
    color: darkgray;
    text-decoration: line-through;
    margin-right: 10px;
  }
  .discount {
    font-size: 15px;
    color: #eeeeee;
    border-radius: 8px;
    background-color: deeppink;
    padding: 3px;
    position: absolute;
    top: 7px;

  }
  .info-other {
    display: flex;
    justify-content: space-around;
    border-bottom: #eeeeee 1px solid;
  }
  .info-other span {
    margin-bottom: 10px;
    color: cadetblue;
  }
  .info-service {
    margin: 20px 0;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-around;
  }
  .info-service-item img {
    width: 16px;
  }
  .info-service-item span {
    font-size: 15px;
  }

</style>
