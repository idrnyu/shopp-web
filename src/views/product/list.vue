<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ProductList from '@/components/product/product-list.vue';

import { PRODUCT_LIST } from './data';

type PRODUCT_LIST_Key = keyof typeof PRODUCT_LIST;

const route = useRoute();

const data = computed(() => {
  if (route.params.type) {

    return PRODUCT_LIST[route.params.type as PRODUCT_LIST_Key];
  }
  return [];
});

</script>

<template>
  <div>
    <ProductList title="Avalon" :data="data" />
  </div>
</template>

<style scoped></style>