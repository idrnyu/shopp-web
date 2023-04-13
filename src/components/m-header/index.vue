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

const miniMenuState = ref(true);

</script>

<template>
  <header class="w-full sticky top-0 z-50 bg-[#128aedb3]"
    :class="markState ? 'md:absolute md:bg-[#ffffff33] md:h-28 h-16' : 'md:fixed md:bg-[#128aedb3] h-16'"
    :style="miniMenuState ? 'background-color: #128aed' : ''">
    <div class="h-full">
      <div class="flex items-center md:justify-start justify-between h-full mx-auto content">
        <div class="mr-24">
          <img src="../../../public/logo.png" alt="" class="md:w-[70px] w-[40px]">
        </div>
        <nav class="md:flex hidden">
          <router-link class="m-2 lg:px-[25px] px-[20px] py-[5px] cursor-pointer rounded-full link-btn" to="/">
            Home
          </router-link>
          <router-link class="m-2 lg:px-[25px] px-[20px] py-[5px] cursor-pointer rounded-full link-btn" to="/antminer/product">
            Antminer
          </router-link>
          <router-link class="m-2 lg:px-[25px] px-[20px] py-[5px] cursor-pointer rounded-full link-btn" to="/avalon/product">
            Avalon
          </router-link>
          <router-link class="m-2 lg:px-[25px] px-[20px] py-[5px] cursor-pointer rounded-full link-btn" to="/whatsminer/product">
            Whatsminer
          </router-link>
          <router-link class="m-2 lg:px-[25px] px-[20px] py-[5px] cursor-pointer rounded-full link-btn" to="/about">
            About
          </router-link>
        </nav>
        <div class="md:hidden ml-5" @click="miniMenuState = !miniMenuState">
          <div class="third" v-show="!miniMenuState"></div>
          <div class="close" v-show="miniMenuState"></div>
        </div>
      </div>
      <div class="md:hidden fixed w-full bg-[#128aed]" :style="!miniMenuState ? 'display: none;' : ''" @click="miniMenuState = false">
        <nav class="mx-auto content space-y-1 pb-3 pt-2 mini-menu">
          <router-link class="text-white block rounded-md px-3 py-2 text-base font-medium menu-btn" to="/">
            Home
          </router-link>
          <router-link class="text-white block rounded-md px-3 py-2 text-base font-medium menu-btn" to="/antminer/product">
            Antminer
          </router-link>
          <router-link class="text-white block rounded-md px-3 py-2 text-base font-medium menu-btn" to="/avalon/product">
            Avalon
          </router-link>
          <router-link class="text-white block rounded-md px-3 py-2 text-base font-medium menu-btn" to="/whatsminer/product">
            Whatsminer
          </router-link>
          <router-link class="text-white block rounded-md px-3 py-2 text-base font-medium menu-btn" to="/about">
            About
          </router-link>
        </nav>
        <div style="position: absolute; background-color: rgba(0, 0, 0, .3); height: 100vh; width: 100vw;"></div>
      </div>
    </div>
  </header>
  <div class="header-mark md:h-28 h-16" ref="mark"></div>
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
  font-size: 14px;
}

.link-active,
.mini-menu .link-active,
.link-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, .2);
}

.menu-btn {
  opacity: .8;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.third{
  height: 16px;
  width: 16px;
  border-top: 2px solid #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
}
.third::after{
  content: '';
  margin-top: 5px;
  height: 2px;
  display: block;
  width: 100%;
  background: #FFFFFF;
}

.close {
  position: relative;
}
.close::before,
.close::after {
  position: absolute;
  top: -10px;
  left: -10px;
  content: ' ';
  background-color: #FFFFFF;
  width: 2px;
  height: 20px;
}
.close::before {
  transform: rotate(45deg);
}
.close::after {
  transform: rotate(-45deg);
}
</style>