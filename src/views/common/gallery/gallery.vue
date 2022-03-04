<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallery-img" :src="item" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- 控制左右滑动的箭头 -->
        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        <!-- 下方滚动条 -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleGalleryClick: function () {
      this.$emit("close");
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true,
      },
    };
  },
};
</script>

<style >
.container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: i;
}
.wrapper {
  width: 100%;
  padding-bottom: 100%;
  height: 0;
}
.gallery-img {
  width: 100%;
}
.swiper-pagination {
  color: #fff;
  bottom: -2rem;
  position: static;
}
</style>
