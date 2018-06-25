<style scoped lang="less">
    @import './system-settings.less';
</style>

<template>
    <div class="main" :class="{'main-hide-text': shrink}">

        <system-settings-menu :dataNav="parentDataToUserImage"></system-settings-menu>

        <top-header></top-header>

        <div class="single-page-con" :style="{left: shrink ? '60px':'200px',width: shrink ? 'calc(100% - 60px)' : 'calc(100% - 200px)'}">
           <router-view></router-view> 
        </div>
    </div>
</template>

<script>
    import common from '@/libs/common.js';
    // my components
    import config from '@/libs/config.js';
    //头
    import topHeader from '@/views/new-components/topHeader/topHeader.vue';
    //menu
    import systemSettingsMenu from '@/views/new-components/left-menu/system-settings-menu/system-settings-menu.vue';


export default {
  name : "group-file",
  components: {
    topHeader,
    systemSettingsMenu

  },
  data () {
    return {
        shrink: false,
        userName: '',
        isFullScreen: false,
        openedSubmenuArr: this.$store.state.app.openedSubmenuArr,
        top_nav_active: 1,//标识一级导航  0  1  2  3  4  分别表示  首页  集团档案  人事档案  档案管理  系统设置
        which: '集团档案/合同档案/档案列表',  //最低级导航的  path
        config
    };
  },
  computed: {
      parentDataToUserImage () {
          return {
              shrink : this.shrink,
              top_nav_active : this.top_nav_active,
              top_nav: config,
              sub_nav: this.which
            }
      }
  },
  methods: {
      //顶级导航改变事件
      handleStatus(top_nav_active) {
          this.top_nav_active = top_nav_active;
      },
      //
      handleClick (which) {
          this.which = which;
      }
  },
  watch: {
      lang () {
          util.setCurrentPath(this, this.$route.name); // 在切换语言时用于刷新面包屑
      },
      openedSubmenuArr () {
          setTimeout(() => {
              this.scrollBarResize();
          }, 300);
      }
  },
mounted () {
    common.bus.$on('toggleMenu', shrink => {
        this.shrink = shrink;
    });
},
  created () {
      // 显示打开的页面的列表
      this.$store.commit('setOpenedList');
  },
  dispatch () {
      window.removeEventListener('resize', this.scrollBarResize);
  }
};
</script>