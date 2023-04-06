<script lang="ts" setup>
import ProductList from '@/components/product/product-list.vue';

const getImageUrl = (name: string) => {
  return new URL(name, import.meta.url).href;
}

const data = [
  {
    id: 1,
    img1: getImageUrl('./img/antminer-test1.png'),
    img2: getImageUrl('./img/antminer-test2.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200000588.556',
  },
  {
    id: 2,
    img1: getImageUrl('./img/antminer-test1.png'),
    img2: getImageUrl('./img/antminer-test2.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('./img/antminer-test1.png'),
    img2: getImageUrl('./img/antminer-test2.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('./img/antminer-test2.png'),
    img2: '',
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('./img/antminer-test1.png'),
    img2: getImageUrl('./img/antminer-test2.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('./img/antminer-test2.png'),
    img2: getImageUrl('./img/antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('./img/antminer-test1.png'),
    img2: getImageUrl('./img/antminer-test2.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('./img/antminer-test2.png'),
    img2: getImageUrl('./img/antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('./img/antminer-test1.png'),
    img2: '',
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('./img/antminer-test1.png'),
    img2: getImageUrl('./img/antminer-test2.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  }
];

</script>

<template>
  <div>
    <div class="lg:h-28 none bg-gradient-to-br from-[#008cfe] to-[#128aed]"></div>
    <ProductList title="Antminer" :data="data" />
  </div>
</template>

<style scoped>
</style>