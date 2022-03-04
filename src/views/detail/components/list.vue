<template>
  <div>
    <div class="item2" v-for="(item, index) of list" :key="index">
      <div class="item-title2 border-bottom">
        <span class="item-title-icon2"></span>{{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array,
  },
};
</script>

<style >
.item-title2 {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}
.item-title-icon2 {
  position: relative;
  left: 0.06rem;
  top: 0.06rem;
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  margin-right: 0.1rem;
  background-size: 0.4rem 3rem;
  background: url(http://img2.baidu.com/it/u=3372281202,1257643363&fm=253&fmt=auto&app=138&f=JPEG?w=835&h=500)
    0-0.45rem no-repeat black;
}
.item-children {
  padding: 0 0.2rem;
}
</style>
