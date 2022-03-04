<template>
  <div>
    <div class="title1">周末游</div>
    <ul>
      <li class="item1 border-bottom" v-for="item of list" :key="item.id">
        <div class="item1-img-wrapper">
          <img class="item1-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item1-info">
          <p class="item1-title live">{{ item.title }}</p>
          <p class="item1-desc live">{{ item.text }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array,
  },
};
</script>

<style >
.item1-info .live {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title1 {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item1-img-wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 37.09%;
}
.item1-img {
  width: 100%;
}
.item1-info {
  padding: 0.1rem;
}
.item1-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
}
.item1-desc {
  line-height: 0.4rem;
  color: #ccc;
}
</style>
