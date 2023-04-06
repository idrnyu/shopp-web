<script lang="ts">
export default {
  name: 'Home',
};
</script>

<script lang="ts" setup>
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

import DescribeVue from './describe.vue';
import HotSaleVue from './hot-sale.vue';

</script>

<template>
  <div>
    <swiper :modules="[Pagination, Navigation, Autoplay, EffectFade]" :slides-per-view="1" :space-between="50" loop
      navigation :effect="'fade'" :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
      }" :pagination="{ clickable: true }">
      <swiper-slide>
        <!-- <div>123123</div> -->
        <img src="../../assets/banner/Antminer_ka3_1920x900.progressive.webp" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/banner/Antminer_L7_179802d9-0cd5-493d-a7c6-27f92a29075e_1920x900.progressive.webp" alt="">
      </swiper-slide>
    </swiper>

    <div class="content">
      <DescribeVue />
      <HotSaleVue />
    </div>
  </div>
</template>



<style scoped></style>