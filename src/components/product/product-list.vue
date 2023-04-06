<script lang="ts" setup>
import ProductCard from '@/components/product/product-card.vue';

import { ProductCardData } from './type';

interface Props {
  data: ProductCardData[];
  title: string;
}

withDefaults(defineProps<Props>(), {
  data: () => [],
});

</script>

<template>
  <div class="content my-12">
    <div class="flex justify-between items-end">
      <div class="text-3xl font-semibold">{{ title }}</div>
      <div>sort</div>
    </div>
    <div class="product-list">
      <ProductCard class="product-item" v-for="item in data" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<style scoped>
.product-list {
  margin: 20px 0;

  /* display: grid;
  grid-template-columns: repeat(auto-fill, 300px); */
}
.product-list::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.product-item {
  float: left;
}
</style>