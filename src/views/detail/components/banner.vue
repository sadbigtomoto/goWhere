<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt="" class="banner-img" />
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe8b5; </span
          >{{ this.bannerImg.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="galleryImgs"
        v-show="showGallary"
        @close="handleGalleryClick"
      ></common-gallary
    ></fade-animation>
  </div>
</template>

<script>
import CommonGallary from "../../common/gallery/gallery.vue";
import FadeAnimation from "../../common/fade/fadeAnimation.vue";
export default {
  name: "DetailBanner",

  components: {
    CommonGallary,
    FadeAnimation,
  },
  methods: {
    handleBannerClick: function () {
      this.showGallary = true;
    },
    handleGalleryClick() {
      this.showGallary = false;
    },
  },
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array,
  },
  data() {
    return {
      showGallary: false,
    };
  },
};
</script>

<style >
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner-img {
  width: 100%;
}
.banner-info {
  position: absolute;
  color: aqua;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  display: flex;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}
.banner-title {
  flex: 1;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}
.banner-number {
  margin-top: 0.14rem;
  padding: 0 0.4rem;
  line-height: 0.32rem;
  height: 0.32rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.8);
  font-size: 0.24rem;
}
.banner-icon {
  font-size: 0.24rem;
}
</style>
