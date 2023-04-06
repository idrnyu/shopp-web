<script lang="ts" setup>
import ProductCard from '@/components/product-card.vue';

const getImageUrl = (name: string) => {
  return new URL(name, import.meta.url).href;
}

const data = [
  {
    id: 1,
    img1: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    img2: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    img2: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    img2: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    img2: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    img2: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    img2: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    img2: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    img2: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    img2: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  },
  {
    id: 2,
    img1: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    img2: getImageUrl('@/assets/Antminer/Antminer-test1.png'),
    title: 'Antminer S19J pro104th/s Bicoin Miner 3120w Asic Miner Cheaper Than Antminer S19pro  110th',
    price: '100',
    originalcost: '200',
  }
]

</script>

<template>
  <div>
    <div class="lg:h-28 none bg-gradient-to-br from-[#008cfe] to-[#128aed]"></div>
    <div class="content my-12">
      <div class="flex justify-between items-end">
        <div class="text-3xl font-semibold">Antminer</div>
        <div>sort</div>
      </div>
      <div class="product-list">
        <ProductCard class="product-item" v-for="item in data" :key="item.id" :data="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  margin: 20px 0;
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