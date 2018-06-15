<style scoped lang="less">
    @import './user-image.less';
</style>

<template>

        <!-- 主页 -->
        <div v-if="dataNav.top_nav_active == '0'" class="user-container" :class="dataNav.shrink ? 'small' : 'long'">
            <div>{{dataNav.top_nav_active}}</div> 
            <div><img :src="avatar" :title="username"></div>
            <div v-show="!dataNav.shrink">{{ username }}</div>
            <div v-show="!dataNav.shrink">{{ department }}</div>
        </div>

        <!-- 集团档案 -->
        <div v-else-if="dataNav.top_nav_active === 1" :class="dataNav.shrink ? 'small' : 'long'">
            <div class="sidebar-menu-con" :style="{width: dataNav.shrink?'60px':'200px', overflow: dataNav.shrink ? 'visible' : 'auto'}">
                <Row>
                <Col span="24">
                    <Menu :theme="theme2" :open-names="[dataNav.top_nav[dataNav.top_nav_active].childs[0].path]" :active-name="whichclick" accordion>
                        <template v-show="!dataNav.shrink">
                            <!-- 合同档案 -->
                            <Submenu :name="dataNav.top_nav[dataNav.top_nav_active].childs[0].path" v-show="!dataNav.shrink">
                                <template slot="title">
                                    <Icon type="ios-paper"></Icon>
                                    {{ dataNav.top_nav[dataNav.top_nav_active].childs[0].name }}
                                </template>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[0].path" @click.native="changeWhich(dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[0].path)">{{ dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[0].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[1].path" @click.native="changeWhich(dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[1].path)">{{ dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[1].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[2].path" @click.native="changeWhich(dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[2].path)">{{ dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[2].name }}</MenuItem>
                            </Submenu>
                            <!-- 文书档案 -->
                            <Submenu :name="dataNav.top_nav[dataNav.top_nav_active].childs[1].path" v-show="!dataNav.shrink">
                                <template slot="title">
                                    <Icon type="ios-people"></Icon>
                                    {{ dataNav.top_nav[dataNav.top_nav_active].childs[1].name }}
                                </template>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[1].childs[0].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[1].childs[0].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[1].childs[1].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[1].childs[1].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[1].childs[2].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[1].childs[2].name }}</MenuItem>
                            </Submenu>
                            <!-- 实物档案 -->
                            <Submenu :name="dataNav.top_nav[dataNav.top_nav_active].childs[2].path" v-show="!dataNav.shrink">
                                <template slot="title">
                                    <Icon type="ios-people"></Icon>
                                    {{ dataNav.top_nav[dataNav.top_nav_active].childs[2].name }}
                                </template>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[2].childs[0].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[2].childs[0].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[2].childs[1].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[2].childs[1].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[2].childs[2].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[2].childs[2].name }}</MenuItem>
                            </Submenu>
                            <!-- 资料档案 -->
                            <Submenu :name="dataNav.top_nav[dataNav.top_nav_active].childs[3].path" v-show="!dataNav.shrink">
                                <template slot="title">
                                    <Icon type="ios-people"></Icon>
                                    {{ dataNav.top_nav[dataNav.top_nav_active].childs[3].name }}
                                </template>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[3].childs[0].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[3].childs[0].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[3].childs[1].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[3].childs[1].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[3].childs[2].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[3].childs[2].name }}</MenuItem>
                            </Submenu>
                            <!-- 会计档案 -->
                            <Submenu :name="dataNav.top_nav[dataNav.top_nav_active].childs[4].path" v-show="!dataNav.shrink">
                                <template slot="title">
                                    <Icon type="ios-people"></Icon>
                                    {{ dataNav.top_nav[dataNav.top_nav_active].childs[4].name }}
                                </template>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[4].childs[0].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[4].childs[0].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[4].childs[1].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[4].childs[1].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[4].childs[2].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[4].childs[2].name }}</MenuItem>
                            </Submenu> 
                            <!-- 声像档案 -->
                            <Submenu :name="dataNav.top_nav[dataNav.top_nav_active].childs[5].path" v-show="!dataNav.shrink">
                                <template slot="title">
                                    <Icon type="ios-people"></Icon>
                                    {{ dataNav.top_nav[dataNav.top_nav_active].childs[5].name }}
                                </template>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[5].childs[0].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[5].childs[0].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[5].childs[1].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[5].childs[1].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[5].childs[2].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[5].childs[2].name }}</MenuItem>
                            </Submenu> 
                            <!-- 设备档案 -->
                            <Submenu :name="dataNav.top_nav[dataNav.top_nav_active].childs[6].path" v-show="!dataNav.shrink">
                                <template slot="title">
                                    <Icon type="ios-people"></Icon>
                                    {{ dataNav.top_nav[dataNav.top_nav_active].childs[6].name }}
                                </template>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[6].childs[0].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[6].childs[0].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[6].childs[1].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[6].childs[1].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[6].childs[2].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[6].childs[2].name }}</MenuItem>
                            </Submenu>  
                            <!-- 基建档案 -->
                            <Submenu :name="dataNav.top_nav[dataNav.top_nav_active].childs[7].path" v-show="!dataNav.shrink">
                                <template slot="title">
                                    <Icon type="ios-people"></Icon>
                                    {{ dataNav.top_nav[dataNav.top_nav_active].childs[7].name }}
                                </template>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[7].childs[0].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[7].childs[0].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[7].childs[1].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[7].childs[1].name }}</MenuItem>
                                <MenuItem :name="dataNav.top_nav[dataNav.top_nav_active].childs[7].childs[2].path">{{ dataNav.top_nav[dataNav.top_nav_active].childs[7].childs[2].name }}</MenuItem>
                            </Submenu> 
                        </template>
                        <template v-show="dataNav.shrink">
                            <div v-show="dataNav.shrink">
                                <left-small-icon type="ios-paper" title="合同档案"></left-small-icon>
                            </div>
                            <div v-show="dataNav.shrink">
                                <left-small-icon type="ios-paper" title="文书档案"></left-small-icon>
                            </div>
                            <div v-show="dataNav.shrink">
                                <left-small-icon type="ios-paper" title="实物档案"></left-small-icon>
                            </div>
                            <div v-show="dataNav.shrink">
                                <left-small-icon type="ios-paper" title="资料档案"></left-small-icon>
                            </div>   
                            <div v-show="dataNav.shrink">
                                <left-small-icon type="ios-paper" title="会计档案"></left-small-icon>
                            </div>    
                            <div v-show="dataNav.shrink">
                                <left-small-icon type="ios-paper" title="声像档案"></left-small-icon>
                            </div>    
                            <div v-show="dataNav.shrink">
                                <left-small-icon type="ios-paper" title="设备档案"></left-small-icon>
                            </div>     
                            <div v-show="dataNav.shrink">
                                <left-small-icon type="ios-paper" title="基建档案"></left-small-icon>
                            </div>  
                        </template>                                                                     
                    </Menu>
                </Col>
                </Row>
            </div>
        </div>
 
 
        <!-- 人事档案 -->
        <div v-else-if="dataNav.top_nav_active == '2'">

        </div>

        <!-- 档案管理 -->
        <div v-else-if="dataNav.top_nav_active == '3'">

        </div>
        <!-- 系统设置 -->
        <div v-else-if="dataNav.top_nav_active == '4'">

        </div> 
</template>

<script> 
import avatar from '@/images/1528115142.jpg';
import shrinkableMenu from '../../main-components/shrinkable-menu/shrinkable-menu.vue';
import leftSmallIcon from '../left-small-icon/left-small-icon.vue';
import topNav from '@/libs/config.js';
import common from '@/libs/common.js';

export default {
  name : "user-image",
  components : {
    shrinkableMenu,
    leftSmallIcon
  },
  props : ['dataNav'],
  data () {
    return {
      avatar,
      username : "某某某",
      department: "腾邦国际-IT-资源共享",
      theme2: 'dark',
      whichclick: '集团档案/合同档案/批量操作',
      config: topNav

    };
  },
  methods : {
      //判断点击的是哪一个  三级列表，相应的改变属性whichclick，并传值给父组件
      changeWhich: function (path) {
          console.log(path);
          this.whichclick = path;
          this.$emit('whichClick',this.whichclick);
      }
  },
  mounted() {
      common.bus.$on('on-NewFiles', msg => {
        this.whichclick = msg;
        this.$emit('whichClick',this.whichclick);
      });
  }
};
</script>