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
  <div v-else-if="dataNav.top_nav_active == '1'" :class="dataNav.shrink ? 'small' : 'long'">
    <div class="sidebar-menu-con" :style="{width: dataNav.shrink?'60px':'200px', overflow: dataNav.shrink ? 'visible' : 'auto'}">
        <Row>
          <Col span="24">
              <Menu :theme="theme2" :open-names="['1']" accordion>
                  <template v-show="!dataNav.shrink">
                    <Submenu name="1" v-show="!dataNav.shrink">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            {{ dataNav.top_nav[dataNav.top_nav_active].childs[0].name }}
                        </template>
                        <MenuItem name="1-1" @click.native="changeWhich(calcPath00)">{{ dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[0].name }}</MenuItem>
                        <MenuItem name="1-2" @click.native="changeWhich('contractFileNew')">{{ dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[1].name }}</MenuItem>
                        <MenuItem name="1-3">{{ dataNav.top_nav[dataNav.top_nav_active].childs[0].childs[2].name }}</MenuItem>
                    </Submenu>
                    <Submenu name="2" v-show="!dataNav.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            
                        </template>
                        <MenuItem name="2-1"></MenuItem>
                        <MenuItem name="2-2"></MenuItem>
                        <MenuItem name="2-3"></MenuItem>
                    </Submenu>
                    <Submenu name="3" v-show="!dataNav.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            
                        </template>
                        <MenuItem name="3-1"></MenuItem>
                        <MenuItem name="3-2"></MenuItem>
                        <MenuItem name="3-3"></MenuItem>
                    </Submenu>
                    <Submenu name="4" v-show="!dataNav.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            
                        </template>
                        <MenuItem name="4-1"></MenuItem>
                        <MenuItem name="4-2"></MenuItem>
                        <MenuItem name="4-3"></MenuItem>
                    </Submenu>
                    <Submenu name="5" v-show="!dataNav.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                           
                        </template>
                        <MenuItem name="5-1"></MenuItem>
                        <MenuItem name="5-2"></MenuItem>
                        <MenuItem name="5-3"></MenuItem>
                    </Submenu> 
                    <Submenu name="6" v-show="!dataNav.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                           
                        </template>
                        <MenuItem name="6-1"></MenuItem>
                        <MenuItem name="6-2"></MenuItem>
                        <MenuItem name="6-3"></MenuItem>
                    </Submenu> 
                    <Submenu name="7" v-show="!dataNav.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            
                        </template>
                        <MenuItem name="7-1"></MenuItem>
                        <MenuItem name="7-2"></MenuItem>
                        <MenuItem name="7-3"></MenuItem>
                    </Submenu>  
                    <Submenu name="8" v-show="!dataNav.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            
                        </template>
                        <MenuItem name="8-1"></MenuItem>
                        <MenuItem name="8-2"></MenuItem>
                        <MenuItem name="8-3"></MenuItem>
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
      group_files: [
          {secondNav: 'contractFile'}
      ],
      whichclick: '',

    };
  },
  methods : {
      //判断点击的是哪一个  三级列表，相应的改变属性whichclick，并传值给父组件
      changeWhich: function (my_name) {
          this.whichclick = my_name;
          this.$emit('whichClick',this.whichclick);
      }
  },
  computed: {
      calcPath00: function () {
          return '集团档案/合同档案/档案列表';
        //   return this.dataNav.top_nav[this.dataNav.top_nav_active].name + '/' + this.dataNav.top_nav[this.dataNav.top_nav_active].childs[0].name;
      }
  }
};
</script>