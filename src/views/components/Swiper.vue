<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- 控制左右滑动的箭头 -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      <!-- 下方滚动条 -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        observeParents: true,
        observer: true,
      },
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    },
  },
};
</script>
    
<style >
.wrapper >>> .swiper-pagination-bullet-active {
  background: black !important;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: skyblue;
  /* 限制元素的宽高，不然外部元素抖动 */
}
.wrapper > .swiper-img {
  width: 100%;
}
</style>