<script lang="ts" setup>

interface ProductCard {
  id: number;
  img1: string;
  img2: string;
  title: string;
  price: string;
  originalcost: string;
}

interface Props {
  data: ProductCard;
}

withDefaults(defineProps<Props>(), {});

</script>

<template>
  <router-link to="/" class="product-card lg:max-w-xs max-w-sm p-[12px]">
    <div class="min-w-[300px] min-h-[300px] product-img">
      <img src="../assets/Antminer/Antminer-test1.png" alt="" class="img1">
      <img src="../assets/Antminer/Antminer-test2.png" alt="" class="img2">
    </div>
    <div>
      <p class="product-title text-[#454545] text-[14px] leading-[24px] mb-[8px]">
        {{ data?.title }}
      </p>
      <div class="font-semibold">
        <span class="text-blue-500">${{ data?.price }}</span>
        <span class="line-through text-gray-400 ml-3">${{ data?.originalcost }}</span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.product-card {
  box-sizing: border-box;
  transition: all .3s ease;
  border-radius: 6px;
}
.product-card:hover {
  /* box-shadow: 0 0.35em 1.175em rgb(2 8 20 / 10%), 0 0.175em 0.5em rgb(2 8 20 / 8%); */
  box-shadow: 0 0.35em 1.175em hsla(207, 86%, 50%, 0.16), 0 0.175em 0.5em hsla(207, 86%, 50%, 0.16);
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

.product-title:hover {
  text-decoration: underline;
}

</style>