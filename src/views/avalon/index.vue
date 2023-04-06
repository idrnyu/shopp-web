<script lang="ts" setup>
import ProductList from '@/components/product/product-list.vue';

const getImageUrl = (name: string) => {
  return new URL(name, import.meta.url).href;
}

            
const data = [
  {
    id: 1,
    img1: getImageUrl('@/assets/avalon/avalon-01.png'),
    img2: getImageUrl('@/assets/avalon/avalon-01.png'),
    title: 'Canaan Avalon 1246 83TH BTC Bitcoin Miner Asic Miner 3155W Crypto Mining Machine',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('@/assets/avalon/avalon-01.png'),
    img2: getImageUrl('@/assets/avalon/avalon-01.png'),
    title: 'Canaan Avalon 1166pro 72TH Asic Miner, 3276W Bitcoin Miner Crypto Mining Machine',
    price: '100',
    originalcost: '200',
  },
  {
    id: 3,
    img1: getImageUrl('@/assets/antminer/antminer-test1.png'),
    img2: getImageUrl('@/assets/antminer/antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
];

</script>

<template>
  <div>
    <div class="lg:h-28 none bg-gradient-to-br from-[#008cfe] to-[#128aed]"></div>
    <ProductList title="Avalon" :data="data" />
  </div>
</template>

<style scoped>
</style>