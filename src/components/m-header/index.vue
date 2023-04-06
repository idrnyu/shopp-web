<script lang="ts" setup>
import { ref, nextTick } from 'vue';

const mark = ref();
const markState = ref();
const observer = new IntersectionObserver((entries) => {
  markState.value = entries[0].isIntersecting;
});

nextTick(() => {
  observer.observe(mark.value);
});

</script>

<template>
  <header class="w-full sticky top-0 z-50 bg-[#128aedb3]"
    :class="markState ? 'lg:absolute lg:bg-[#ffffff33] lg:h-28 h-16' : 'lg:fixed lg:bg-[#128aedb3] h-16'">
    <div class="flex items-center lg:justify-start justify-between h-full mx-auto content">
      <div class="mr-24">logo</div>
      <nav class="lg:flex hidden">
        <router-link class="m-2 cursor-pointer rounded-full link-btn" to="/">
          Home
        </router-link>
        <router-link class="m-2 cursor-pointer rounded-full link-btn" to="/antminer">
          Antminer
        </router-link>
        <router-link class="m-2 cursor-pointer rounded-full link-btn" to="/avalon">
          Avalon
        </router-link>
        <router-link class="m-2 cursor-pointer rounded-full link-btn" to="/whatsminer">
          Whatsminer
        </router-link>
        <router-link class="m-2 cursor-pointer rounded-full link-btn" to="/about">
          About
        </router-link>
      </nav>
      <div class="lg:hidden ml-5">三</div>
    </div>
  </header>
  <div class="header-mark lg:h-28 h-16" ref="mark"></div>
</template>

<style scoped>
.header-mark {
  position: absolute;
  z-index: -100;
}

.link-btn {
  opacity: .8;
  color: #FFFFFF;
  line-height: 26px;
  font-weight: 600;
  padding: 5px 25px 5px 25px;
  font-size: 14px;
}

.link-exact-active,
.link-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, .2);
}
</style>