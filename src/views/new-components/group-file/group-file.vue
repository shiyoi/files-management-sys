<style scoped lang="less">
    @import './group-file.less';
</style>

<template>
    <div class="main" :class="{'main-hide-text': shrink}">
        <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
           <user-image  :dataNav="parentDataToUserImage" @whichClick="handleClick"></user-image> 
        </div>
        <div class="main-header-con" :style="{paddingLeft: shrink?'60px':'200px'}">
            <div class="main-header">
                <div class="navicon-con">
                    <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>
                <div class="header-middle-con">
                    <div class="main-breadcrumb">
                       <top-nav @switch="handleStatus"></top-nav>
                    </div>
                </div>
                <div class="header-avator-con">
                    <full-screen v-model="isFullScreen" @on-change="fullscreenChange"></full-screen>
                    <lock-screen></lock-screen>
                    <message-tip v-model="mesCount"></message-tip>
                    <theme-switch></theme-switch>
                    
                    <div class="user-dropdown-menu-con">
                        <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                            <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                                <a href="javascript:void(0)">
                                    <span class="main-user-name">{{ userName }}</span>
                                    <Icon type="arrow-down-b"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="ownSpace">个人中心</DropdownItem>
                                    <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Avatar :src="avatorPath" style="background: #619fe7;margin-left: 10px;"></Avatar>
                        </Row>
                    </div>
                </div>
            </div>
            <div class="tags-con">
                <tags-page-opened :pageTagsList="pageTagsList"></tags-page-opened>
            </div>
        </div>
    <keep-alive>
        <div v-if="top_nav_active == 1" class="single-page-con" :style="{left: shrink?'60px':'200px',width: shrink ? 'calc(100% - 60px)' : 'calc(100% - 200px)'}">
            <!-- 档案列表组件 -->
            <keep-alive><contract-file-list :path="which" v-if="which === config[1].childs[0].childs[0].path"></contract-file-list></keep-alive>
            <!-- 新建档案组件 -->
            <keep-alive><new-file v-if="which === config[1].childs[0].childs[1].path"></new-file></keep-alive>
        </div>
    </keep-alive>
    </div>
</template>

<script>
    import shrinkableMenu from '../../main-components/shrinkable-menu/shrinkable-menu.vue';
    import tagsPageOpened from '../../main-components/tags-page-opened.vue';
    import breadcrumbNav from '../../main-components/breadcrumb-nav.vue';
    import fullScreen from '../../main-components/fullscreen.vue';
    import lockScreen from '../../main-components/lockscreen/lockscreen.vue';
    import messageTip from '../../main-components/message-tip.vue';
    import themeSwitch from '../../main-components/theme-switch/theme-switch.vue';
    import Cookies from 'js-cookie';
    import util from '@/libs/util.js';
    import scrollBar from '@/views/my-components/scroll-bar/vue-scroller-bars';

    // my components
    import userImage from '../../new-components/user-image/user-image.vue';
    import topNav from '../../new-components/top-nav/top-nav.vue';
    //引入档案列表组件
    import contractFileList from '../../new-components/contract-file-list/contract-file-list.vue';
    //引入新建档案组件
    import newFile from '../../new-components/new-file/new-file.vue';
    import config from '@/libs/config.js';

export default {
  name : "group-file",
  components: {
    shrinkableMenu,
    tagsPageOpened,
    breadcrumbNav,
    fullScreen,
    lockScreen,
    messageTip,
    themeSwitch,
    scrollBar,
    userImage,
    topNav,
    contractFileList,
    newFile 
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
      menuList () {
          return this.$store.state.app.menuList;
      },
      pageTagsList () {
          return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
      },
      currentPath () {
          return this.$store.state.app.currentPath; // 当前面包屑数组
      },
      avatorPath () {
          return localStorage.avatorImgPath;
      },
      cachePage () {
          return this.$store.state.app.cachePage;
      },
      lang () {
          return this.$store.state.app.lang;
      },
      menuTheme () {
          return this.$store.state.app.menuTheme;
      },
      mesCount () {
          return this.$store.state.app.messageCount;
      },
      parentDataToUserImage () {
          return {
              shrink : this.shrink,
              top_nav_active : this.top_nav_active,
              top_nav: config
            }
      }
  },
  methods: {
      init () {
          let pathArr = util.setCurrentPath(this, this.$route.name);
          this.$store.commit('updateMenulist');
          if (pathArr.length >= 2) {
              this.$store.commit('addOpenSubmenu', pathArr[1].name);
          }
          this.userName = Cookies.get('user');
          let messageCount = 3;
          this.messageCount = messageCount.toString();
          this.checkTag(this.$route.name);
          this.$store.commit('setMessageCount', 3);
      },
      toggleClick () {
          this.shrink = !this.shrink;
          console.log(this.shrink);
      },
      handleClickUserDropdown (name) {
          if (name === 'ownSpace') {
              util.openNewPage(this, 'ownspace_index');
              this.$router.push({
                  name: 'ownspace_index'
              });
          } else if (name === 'loginout') {
              // 退出登录
              this.$store.commit('logout', this);
              this.$store.commit('clearOpenedSubmenu');
              this.$router.push({
                  name: 'login'
              });
          }
      },
      checkTag (name) {
          let openpageHasTag = this.pageTagsList.some(item => {
              if (item.name === name) {
                  return true;
              }
          });
          if (!openpageHasTag) { //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
              util.openNewPage(this, name, this.$route.params || {}, this.$route.query || {});
          }
      },
      handleSubmenuChange (val) {
          // console.log(val)
      },
      beforePush (name) {
          // if (name === 'accesstest_index') {
          //     return false;
          // } else {
          //     return true;
          // }
          return true;
      },
      fullscreenChange (isFullScreen) {
          // console.log(isFullScreen);
      },
      scrollBarResize () {
          this.$refs.scrollBar.resize();
      },
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
      '$route' (to) {
          this.$store.commit('setCurrentPageName', to.name);
          let pathArr = util.setCurrentPath(this, to.name);
          if (pathArr.length > 2) {
              this.$store.commit('addOpenSubmenu', pathArr[1].name);
          }
          this.checkTag(to.name);
          localStorage.currentPageName = to.name;
      },
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
      //this.init();
      //window.addEventListener('resize', this.scrollBarResize);
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