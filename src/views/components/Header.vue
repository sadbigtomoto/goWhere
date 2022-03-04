<template>
  <div class="header backg">
    <div class="header-left back-icon">
      <span class="iconfont">&#xe8b5; </span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe8b9; </span>
      输入城市/景点
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont">&#xe606; </span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  props: {},
  computed: {
    ...mapState(["city"]),
  },
};
</script>

<style >
.backg {
  background: #00bcd4;
}
.header {
  display: flex;
  line-height: 0.86rem;
  color: #fff;
}
.header-left {
  width: 0.64rem;
  float: left;
}
.back-icon {
  text-align: right;
  font-size: 0.4rem;
}
.header-input {
  flex: 1;
  height: 0.64rem;
  margin-left: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: 0.12rem;
  color: #ccc;
  line-height: 0.64rem;
}
.header-right {
  min-width: 1.04rem;
  padding: 0 0.1rem;
  float: right;
  text-align: center;
  font-size: 0.3rem;
  color: #fff;
}
</style>