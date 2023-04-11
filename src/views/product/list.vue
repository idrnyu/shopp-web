<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ProductList from '@/components/product/product-list.vue';

import { PRODUCT_LIST } from './data';

const route = useRoute();

const data = computed(() => {
  if (route.params.type) {
    return PRODUCT_LIST[route.params.type];
  }
  return [];
});

</script>

<template>
  <div>
    <ProductList title="Avalon" :data="data" />
  </div>
</template>

<style scoped>
</style>