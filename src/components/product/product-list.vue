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
  <div class="mb-12 mt-6">
    <div class="flex justify-between items-end">
      <div class="text-3xl font-semibold">{{ title }}</div>
      <div>sort</div>
    </div>
    <div class="product-list">
      <router-link :to="{name: 'ProductDetail', query: {q: item.id}}" class="product-item" v-for="item in data" :key="item.id + title">
        <ProductCard :data="item" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  margin: 20px 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 1447px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 775px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 509px) {
  .product-list {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>