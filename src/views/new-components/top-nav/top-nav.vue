<style scoped lang="less">
    @import './top-nav.less';
</style>

<template>
  <ul class="topnav">
    <li v-for="(item,index) in nav" @click="jumpRouter(item)" :key="index">
      <span>{{ item.name }} </span>
    </li>
  </ul> 
</template>

<script> 
import top_nav from '@/libs/config.js';
export default {
  name : "topNav",
  data () {
    return {
      nav: top_nav,
    };
  },
  methods : {
    jumpRouter (item) {
      console.log(item.to);
      this.$router.push(item.to);//跳转路由
    }
  }
};
</script>