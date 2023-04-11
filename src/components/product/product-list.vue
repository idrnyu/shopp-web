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
  grid-template-columns: repeat(auto-fill, 304px);
  gap: 1rem; */
}
.product-item {
  background: aquamarine;
  margin: 10px;
}
.product-item:first-of-type {
  margin-left: 0;
}

@media (min-width: 1702px) {
  .product-item:nth-child(4n) {
    margin-right: 0;
  }
  .product-item:nth-child(4n+1) {
    margin-left: 0;
  }
}

/* @media (max-width: 27em) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
} */

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