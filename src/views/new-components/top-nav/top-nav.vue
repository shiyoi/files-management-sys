<style scoped lang="less">
    @import './top-nav.less';
</style>

<template>
  <ul class="topnav">
    <li v-for="(item,index) in nav" @click="switchingStatus(item)" :key="index">
      <span>{{ item.name }} </span>
    </li>
  </ul> 
</template>

<script> 
import top_nav from '@/libs/config.js';
export default {
  name : "top-nav",
  components : {},
  props : [],
  data () {
    //<router-link :to="item.to">{{ item.name }} </router-link>
    return {
      //一级导航的名字 和 路由地址
      // nav : [
      //   {"name" : '首页',"to" : '/admin',"status" : 0},
      //   {"name" : '集团档案',"to" : '/groupFile',"status" : 1},
      //   {"name" : '人事档案',"to" : '/personnelFiles',"status" : 2},
      //   {"name" : '档案管理',"to" : '/filesManagement',"status" : 3},
      //   {"name" : '系统设置',"to" : '/systemSettings',"status" : 4}
      // ],
      nav: top_nav,
      //当前处于哪一个 一级导航   0,1,2,3,4  分别表示 首页，集团档案，人事档案，档案管理，系统设置
      top_nav_active : 0
    };

  },
  methods : {
    switchingStatus (item) {
      this.top_nav_active = item.status;
      this.$emit('switch',this.top_nav_active);//向父级组件传递状态
      this.$router.push(item.to);//跳转路由
    }
  }
};
</script>