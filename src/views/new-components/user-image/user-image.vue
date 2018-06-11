<style scoped lang="less">
    @import './user-image.less';
</style>

<template>
  <!-- 主页 -->
  <div v-if="dataToUserImage.top_nav_active == '0'" class="user-container" :class="dataToUserImage.shrink ? 'small' : 'long'">
    <div>{{dataToUserImage.top_nav_active}}</div> 
    <div><img :src="avatar" :title="username"></div>
    <div v-show="!dataToUserImage.shrink">{{ username }}</div>
    <div v-show="!dataToUserImage.shrink">{{ department }}</div>
  </div>
  <!-- 集团档案 -->
  <div v-else-if="dataToUserImage.top_nav_active == '1'" :class="dataToUserImage.shrink ? 'small' : 'long'">
    <div class="sidebar-menu-con" :style="{width: dataToUserImage.shrink?'60px':'200px', overflow: dataToUserImage.shrink ? 'visible' : 'auto'}">
        <Row>
          <Col span="24">
              <Menu :theme="theme2" :open-names="['1']" accordion>
                  <template v-show="!dataToUserImage.shrink">
                    <Submenu name="1" v-show="!dataToUserImage.shrink">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            {{ dataToUserImage.file_type.group_file_type.childs[0].name }}
                        </template>
                        <MenuItem name="1-1" @click.native="changeWhich('contractFileList')">{{ dataToUserImage.file_type.group_file_type.childs[0].childs[0].name }}</MenuItem>
                        <MenuItem name="1-2" @click.native="changeWhich('contractFileNew')">{{ dataToUserImage.file_type.group_file_type.childs[0].childs[1].name }}</MenuItem>
                        <MenuItem name="1-3">{{ dataToUserImage.file_type.group_file_type.childs[0].childs[2].name }}</MenuItem>
                    </Submenu>
                    <Submenu name="2" v-show="!dataToUserImage.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            {{ dataToUserImage.file_type.group_file_type.childs[1].name }}
                        </template>
                        <MenuItem name="2-1">{{ dataToUserImage.file_type.group_file_type.childs[1].childs[0].name }}</MenuItem>
                        <MenuItem name="2-2">{{ dataToUserImage.file_type.group_file_type.childs[1].childs[1].name }}</MenuItem>
                        <MenuItem name="2-3">{{ dataToUserImage.file_type.group_file_type.childs[1].childs[2].name }}</MenuItem>
                    </Submenu>
                    <Submenu name="3" v-show="!dataToUserImage.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            {{ dataToUserImage.file_type.group_file_type.childs[2].name }}
                        </template>
                        <MenuItem name="3-1">{{ dataToUserImage.file_type.group_file_type.childs[2].childs[0].name }}</MenuItem>
                        <MenuItem name="3-2">{{ dataToUserImage.file_type.group_file_type.childs[2].childs[1].name }}</MenuItem>
                        <MenuItem name="3-3">{{ dataToUserImage.file_type.group_file_type.childs[2].childs[2].name }}</MenuItem>
                    </Submenu>
                    <Submenu name="4" v-show="!dataToUserImage.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            {{ dataToUserImage.file_type.group_file_type.childs[3].name }}
                        </template>
                        <MenuItem name="4-1">{{ dataToUserImage.file_type.group_file_type.childs[3].childs[0].name }}</MenuItem>
                        <MenuItem name="4-2">{{ dataToUserImage.file_type.group_file_type.childs[3].childs[1].name }}</MenuItem>
                        <MenuItem name="4-3">{{ dataToUserImage.file_type.group_file_type.childs[3].childs[2].name }}</MenuItem>
                    </Submenu>
                    <Submenu name="5" v-show="!dataToUserImage.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            {{ dataToUserImage.file_type.group_file_type.childs[4].name }}
                        </template>
                        <MenuItem name="5-1">{{ dataToUserImage.file_type.group_file_type.childs[4].childs[0].name }}</MenuItem>
                        <MenuItem name="5-2">{{ dataToUserImage.file_type.group_file_type.childs[4].childs[1].name }}</MenuItem>
                        <MenuItem name="5-3">{{ dataToUserImage.file_type.group_file_type.childs[4].childs[2].name }}</MenuItem>
                    </Submenu> 
                    <Submenu name="6" v-show="!dataToUserImage.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            {{ dataToUserImage.file_type.group_file_type.childs[5].name }}
                        </template>
                        <MenuItem name="6-1">{{ dataToUserImage.file_type.group_file_type.childs[5].childs[0].name }}</MenuItem>
                        <MenuItem name="6-2">{{ dataToUserImage.file_type.group_file_type.childs[5].childs[1].name }}</MenuItem>
                        <MenuItem name="6-3">{{ dataToUserImage.file_type.group_file_type.childs[5].childs[2].name }}</MenuItem>
                    </Submenu> 
                    <Submenu name="7" v-show="!dataToUserImage.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            {{ dataToUserImage.file_type.group_file_type.childs[6].name }}
                        </template>
                        <MenuItem name="7-1">{{ dataToUserImage.file_type.group_file_type.childs[6].childs[0].name }}</MenuItem>
                        <MenuItem name="7-2">{{ dataToUserImage.file_type.group_file_type.childs[6].childs[1].name }}</MenuItem>
                        <MenuItem name="7-3">{{ dataToUserImage.file_type.group_file_type.childs[6].childs[2].name }}</MenuItem>
                    </Submenu>  
                    <Submenu name="8" v-show="!dataToUserImage.shrink">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            {{ dataToUserImage.file_type.group_file_type.childs[7].name }}
                        </template>
                        <MenuItem name="8-1">{{ dataToUserImage.file_type.group_file_type.childs[7].childs[0].name }}</MenuItem>
                        <MenuItem name="8-2">{{ dataToUserImage.file_type.group_file_type.childs[7].childs[1].name }}</MenuItem>
                        <MenuItem name="8-3">{{ dataToUserImage.file_type.group_file_type.childs[7].childs[2].name }}</MenuItem>
                    </Submenu> 
                  </template>
                  <template v-show="dataToUserImage.shrink">
                    <div v-show="dataToUserImage.shrink">
                        <left-small-icon type="ios-paper" title="合同档案"></left-small-icon>
                    </div>
                    <div v-show="dataToUserImage.shrink">
                        <left-small-icon type="ios-paper" title="文书档案"></left-small-icon>
                    </div>
                    <div v-show="dataToUserImage.shrink">
                        <left-small-icon type="ios-paper" title="实物档案"></left-small-icon>
                    </div>
                    <div v-show="dataToUserImage.shrink">
                        <left-small-icon type="ios-paper" title="资料档案"></left-small-icon>
                    </div>   
                    <div v-show="dataToUserImage.shrink">
                        <left-small-icon type="ios-paper" title="会计档案"></left-small-icon>
                    </div>    
                    <div v-show="dataToUserImage.shrink">
                        <left-small-icon type="ios-paper" title="声像档案"></left-small-icon>
                    </div>    
                    <div v-show="dataToUserImage.shrink">
                        <left-small-icon type="ios-paper" title="设备档案"></left-small-icon>
                    </div>     
                    <div v-show="dataToUserImage.shrink">
                        <left-small-icon type="ios-paper" title="基建档案"></left-small-icon>
                    </div>  
                  </template>                                                                     
              </Menu>
          </Col>
        </Row>
    </div>
  </div>
  <!-- 人事档案 -->
  <div v-else-if="dataToUserImage.top_nav_active == '2'">

  </div>
  <!-- 档案管理 -->
  <div v-else-if="dataToUserImage.top_nav_active == '3'">

  </div>
  <!-- 系统设置 -->
  <div v-else-if="dataToUserImage.top_nav_active == '4'">

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
  props : ['dataToUserImage'],
  data () {
    return {
      avatar,
      username : "某某某",
      department: "腾邦国际-IT-资源共享",
      theme2: 'dark',
      group_files: [
          {secondNav: 'contractFile'}
      ],
      
      whichclick: ''

    };
  },
  methods : {
      //判断点击的是哪一个  三级列表，相应的改变属性whichclick，并传值给父组件
      changeWhich: function (my_name) {
          this.whichclick = my_name;
          this.$emit('whichClick',this.whichclick);
      }
  }
};
</script>