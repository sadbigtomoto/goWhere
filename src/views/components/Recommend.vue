<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        :to="'/detail/' + item.id"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="" />
        <div class="item-info">
          <p class="item-title live">{{ item.title }}</p>
          <p class="item-desc live">{{ item.text }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommmend",
  props: {
    list: Array,
  },
};
</script>

<style >
.item-info .live {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title {
  line-height: 0.8rem;
  background: #eee;
  margin-top: 0.2rem;
  text-indent: 0.2rem;
}
.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;
}
.item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
}
.item-info {
  min-width: 0;
  flex: 1;
  padding: 0.1rem;
}
.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
}
.item-desc {
  line-height: 0.4rem;
  color: #ccc;
}
.item-button {
  background: #ff9300;
  padding: 0 0.1rem;
  border-radius: 0.06rem;
  margin-top: 0.16rem;
  color: #fff;
  line-height: 0.44rem;
}
</style>
