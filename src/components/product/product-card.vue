<script lang="ts" setup>
import { ProductCardData } from './type';

import { numFormat } from '@/utils/index';

interface Props {
  data: ProductCardData;
}

withDefaults(defineProps<Props>(), {});

</script>

<template>
  <div class="product-card p-[12px]">
    <div class="min-w-[200px] min-h-[200px] product-img">
      <img :src="data?.img1" alt="" :class="{ 'img1': data?.img2 }">
      <img v-if="data?.img2" :src="data.img2" alt="" class="img2">
    </div>
    <div>
      <p class="product-title text-[#454545] text-[14px] leading-[24px] mb-[8px]">
        {{ data?.title }}
      </p>
      <div class="font-semibold">
        <span class="text-blue-500">${{ numFormat(data?.price) }}</span>
        <span class="line-through text-gray-400 ml-3">${{ numFormat(data?.originalcost) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  box-sizing: border-box;
  transition: all .3s ease;
  border-radius: 6px;
}

.product-card:hover {
  box-shadow: 0 0 9px 1px hsla(207, 86%, 50%, 0.16), 0 0 9px 1px hsla(207, 86%, 50%, 0.16);
}

.product-img {
  background: url(../../assets/unset.png) no-repeat center center;
  background-size: cover;
}
.product-img .img2 {
  display: none;
}

.product-img:hover .img1 {
  display: none;
}

.product-img:hover .img2 {
  display: block;
}

.product-title {
  height: 76px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.product-title:hover {
  text-decoration: underline;
}</style>