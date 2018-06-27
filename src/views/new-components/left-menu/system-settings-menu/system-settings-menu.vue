<style scoped lang="less">
   @import './system-settings-menu.less';
</style>

<template>
  <div :class="shrink ? 'small' : 'long'">
    <div class="sidebar-menu-con" :style="{width: shrink ? '60px' : '200px', overflow: shrink ? 'visible' : 'auto'}">
        <Row>
        <Col span="24">
            <Menu :theme="theme2" :active-name="configNav[3].childs[0].name">
                <div v-show="!shrink">
                   <Submenu v-for="(v,i) in configNav[4].childs" :key="i" :name="v.name">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            {{ v.name }}
                        </template>
                        <MenuItem v-for="(value,index) in v.childs" :name="value.name" @click.native="changeWhich(value.to)">{{ value.name }}</MenuItem>
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
    name: "systemSettingsMenu",
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
        //   alert(this.shrink);
      });
    }
  }
</script>
