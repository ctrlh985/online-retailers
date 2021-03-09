<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message,duration) {
        this.isShow = true
        this.message = message

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    padding: 15px;
    background:rgba(44, 34, 34, 0.75);
    position:fixed;
    left:50%;
    top:50%;
    border-radius:20px;
    color:lightcoral;
    text-align:center;
    font-size:15px;
    font-weight: bold;
    transform:translateX(-50%);
    z-index: 999;
  }
</style>
