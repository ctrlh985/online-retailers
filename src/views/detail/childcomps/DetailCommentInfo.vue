<template>
    <div v-if="Object.keys(commentInfo).length !==0" class="comment-info">
      <div class="info-header">
        <div class="header-title">用户评论</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        <div class="info-other">
          <span class="date">{{commentInfo.created | showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item,index) in commentInfo.images" :key="index">
        </div>
      </div>
    </div>
</template>

<script>
  import {formatDate} from 'common/utils'
  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        // 1. 将时间戳转成Date对象
        const date = new Date(value * 1000)
        //2.将Date进行格式化
        return formatDate(date)
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-header {
    height: 45px;
    box-shadow: 0 2px 5px #f2f5f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
  }
  .info-user {
    padding-top: 25px;
    display: flex;
    align-items: center;
  }
  .info-user img {
    width: 42px;
    height: 42px;
    box-shadow: 0 3px 5px rgba(0,0,0,.1);
    border-radius: 50%;
  }
  .info-user span {
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
    color: cadetblue;
  }
  .info-detail {
    padding-top: 10px;
  }
  .info-detail p {
    padding: 0 10px;
    font-size: 14px;
    color: #666666;
    line-height: 1.5;
  }
  .info-other {
    margin: 10px 0;
    color: cadetblue;
  }
  .info-other .date {
    margin-right: 30px;
  }
  .info-imgs img {
    width: 100px;
    height: 100px;
  }
</style>
