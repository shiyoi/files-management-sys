<style scoped lang="less">
    @import './admin-menu.less';
</style>

<template>
  <!-- 主页   small long-->  
  <div class="user-container long">  
      <div></div>
      <div><img :src="avatar" :title="username"></div>
      <div>{{ username }}</div>
      <div>{{ department }}</div>
  </div> 
</template>

<script> 
import avatar from '@/images/1528115142.jpg';
import shrinkableMenu from '@/views/main-components/shrinkable-menu/shrinkable-menu.vue';
import leftSmallIcon from '@/views/new-components/left-small-icon/left-small-icon.vue';
import common from '@/libs/common.js';

export default {
  name : "adminMemu",
  components : {
    shrinkableMenu,
    leftSmallIcon
  },
  data () {
    return {
      avatar,
      username : "某某某",
      department: "腾邦国际-IT-资源共享",
      theme2: 'dark',
    };
  }
};
</script>