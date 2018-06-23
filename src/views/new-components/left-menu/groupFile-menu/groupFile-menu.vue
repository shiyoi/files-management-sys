<style lang="less">
   @import './groupFile-menu.less';
</style>

<template>
  <div :class="shrink ? 'small' : 'long'">
    <div class="sidebar-menu-con" :style="{width: shrink ? '60px' : '200px', overflow: shrink ? 'visible' : 'auto'}">
        <Row>
        <Col span="24">
            <Menu :theme="theme2" accordion >
                <div v-show="!shrink">
                    <!-- 循环生成集团档案的   left_menu -->
                    <Submenu v-for="(v,i) in configNav[1].childs" :key="i" :name="v.name">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            {{ v.name }}
                        </template>
                        <MenuItem :name="v.childs[0].name" @click.native="changeWhich(v.childs[0].to)">{{ v.childs[0].name }}</MenuItem>
                        <MenuItem :name="v.childs[1].name" @click.native="changeWhich(v.childs[1].to)">{{ v.childs[1].name }}</MenuItem>
                        <MenuItem :name="v.childs[2].name" @click.native="changeWhich(v.childs[2].to)">{{ v.childs[2].name }}</MenuItem>
                    </Submenu> 
                </div>
                <div v-show="shrink">
                    <div>
                        <left-small-icon type="ios-paper" title="合同档案"></left-small-icon>
                    </div>
                    <div>
                        <left-small-icon type="ios-paper" title="文书档案"></left-small-icon>
                    </div>
                    <div>
                        <left-small-icon type="ios-paper" title="实物档案"></left-small-icon>
                    </div>
                    <div>
                        <left-small-icon type="ios-paper" title="资料档案"></left-small-icon>
                    </div>   
                    <div>
                        <left-small-icon type="ios-paper" title="会计档案"></left-small-icon>
                    </div>    
                    <div>
                        <left-small-icon type="ios-paper" title="声像档案"></left-small-icon>
                    </div>    
                    <div>
                        <left-small-icon type="ios-paper" title="设备档案"></left-small-icon>
                    </div>     
                    <div>
                        <left-small-icon type="ios-paper" title="基建档案"></left-small-icon>
                    </div> 
                </div>
            </Menu>
        </Col>
        </Row>
    </div>
  </div>
</template>
<script>
  import common from '@/libs/common.js';//bus 总线
  import leftSmallIcon from '@/views/new-components/left-small-icon/left-small-icon';
  import config from '@/libs/config.js';
  export default {
    name: "groupFileMenu",
    props: ['dataNav'],
    components: {
        leftSmallIcon
    },
    data () {
        return {
            shrink: false,
            theme2: 'dark',
            config: null
        };
    },
    created () {
        this.configNav = config;
    },
    methods: {
        changeWhich: function (...to) {
          console.log(...to);
          this.$router.push(...to);//跳转路由
      }
    },
    mounted () {
      //监控 header 发来的   shrink（true表示 左边应该收缩，false表示左边menu应该展开）
      common.bus.$on('toggleMenu', shrink => {
          this.shrink = shrink;
      });
    }
  }
</script>
