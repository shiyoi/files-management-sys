<style scoped lang="less">
@import './bottom-botton.less';
</style>
<template>
    <div class="basicInfo" style="background-color:#eaeff0;">
      <div style="height:32px;width:314px;margin:0 auto;">
        <div style="width:116px;height:32px;float:left;margin-right:10px;"><Button long type="primary" @click="submit">提交</Button></div>
        <div style="width:116px;height:32px;float:left;"><Button long>取消</Button></div>
        <div style="width:62px;height:32px;line-height:32px;float:left;margin-left:10px;">
          <div style="float:left;width:16px;height:16px;position:relative;top:2px;"><Icon type="image" size="16"></Icon></div>
          <div style="float:left;width:46px;height:32px;text-align:right;padding-right:14px;">预览</div>
        </div>
      </div>
    </div>        
</template>
<script>
export default {
  data: function () {
    return {};
  },
  components: {
  },
  methods: {
    submit() {
      this.$emit("submit",'123');
    }
  }
}
</script>

