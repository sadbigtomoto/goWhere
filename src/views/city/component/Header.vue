<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <span class="iconfont header-back">&#xe8b5;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
};
</script>

<style >
.header {
  position: relative;
  height: 0.86rem;
  overflow: hidden;
  line-height: 0.86rem;
  color: #fff;
  text-align: center;
  background: skyblue;
}
.header-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.64rem;
  text-align: center;
  font-size: 0.4rem;
}
</style>
