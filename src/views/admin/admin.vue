<style scoped lang="less">
  @import './admin.less';
</style>

<template>
  <div class="main" :class="{'main-hide-text': shrink}">
    <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
      <admin-menu></admin-menu>
    </div>
    <top-header></top-header>
    <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">

    </div>
  </div>
</template>

<script>
  import topHeader from '@/views/new-components/topHeader/topHeader.vue';
  import adminMenu from '@/views/new-components/left-menu/admin-menu/admin-menu.vue';
  export default {
    name : "admin",
    components: {
      topHeader,
      adminMenu 
    },
  data () {
    return {
      shrink: false,
      userName: '',
      isFullScreen: false,
      openedSubmenuArr: this.$store.state.app.openedSubmenuArr,
      top_nav_active: '0'//标识一级导航  '0'  '1'  '2'  '3'  '4'
    };
  },
  computed: {
  },
methods: {
    
},
};
</script>