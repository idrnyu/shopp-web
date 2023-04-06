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
    title: 'Microbt Whatsminer M30s 88T 3344W Energy Saving Asic Miner Bitcoin Mining',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('@/assets/avalon/avalon-01.png'),
    img2: getImageUrl('@/assets/avalon/avalon-01.png'),
    title: 'Whatminer M31S+ 82TH 3444W Asic Bitcoin Mining Miners BTC Halve For Sale',
    price: '100',
    originalcost: '200',
  },
  {
    id: 3,
    img1: getImageUrl('@/assets/antminer/antminer-test1.png'),
    img2: getImageUrl('@/assets/antminer/antminer-test1.png'),
    title: 'New Bitcoin Miner Microbt Whatsminer M30S++ цена112T Asic Miner BTC Mining',
    price: '100',
    originalcost: '200',
  },
  {
    id: 3,
    img1: getImageUrl('@/assets/antminer/antminer-test1.png'),
    img2: getImageUrl('@/assets/antminer/antminer-test1.png'),
    title: 'Asic Bitcoin Miner Whatsminer M30s 90T 3420w Bitcoin Mining',
    price: '100',
    originalcost: '200',
  },
  {
    id: 3,
    img1: getImageUrl('@/assets/antminer/antminer-test1.png'),
    img2: getImageUrl('@/assets/antminer/antminer-test1.png'),
    title: 'Whatminer M30S++ 110TH 3410W Cyypto Bitcoin Miner Asic Miner Mining Miner in Stock',
    price: '100',
    originalcost: '200',
  },
];

</script>

<template>
  <div>
    <div class="lg:h-28 none bg-gradient-to-br from-[#008cfe] to-[#128aed]"></div>
    <ProductList title="Whatsminer" :data="data" />
  </div>
</template>

<style scoped>
</style>