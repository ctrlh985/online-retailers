<template>
  <div class="title">
    <div>{{items.title}}</div>
  </div>
</template>

<script>
  export default {
    name: "CategoryText",
    props: {
      items: {
        type: Object,
        default () {
          return {}
        }
      },

    },
  }
</script>

<style scoped>
  .title {
    background: #eee;
    color: #666;
    font-size: 16px;
    text-align: center;
    padding: 12px;
    box-shadow: 0 -1px 1px rgba(255,255,255,.5)
  }

</style>
