<template>
  <div class="header">
    <span>{{ $route.meta.name }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.header {
  background-color: #ffd700;
  padding: 30px 0;
  span {
    font-size: 36px;
    color: #333333;
  }
}
</style>
