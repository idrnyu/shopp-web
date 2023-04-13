<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import Breadcrumb from '@/components/breadcrumb.vue';

import type { PathList } from '@/components/breadcrumb.vue';

const route = useRoute();

const pathList = computed<PathList[]>(() => {
  const tmpData = [
    { name: 'home', pathName: 'Home' },
    { name: route.params.type as string, pathName: 'ProductList' },
  ];
  if (route.path.includes('/detail')) {
    tmpData.push({
      name: 'Detail' as string, pathName: '',
    });
  }
  return tmpData;
});

</script>

<template>
  <div>
    <div class="md:h-28 none bg-gradient-to-br from-[#008cfe] to-[#128aed]"></div>
    <div class="content">
      <Breadcrumb :pathList="pathList" />
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>