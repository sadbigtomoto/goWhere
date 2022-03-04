<template>
  <transition class="city">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "FadeAnimation",
};
</script>

<style >
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
</style>
