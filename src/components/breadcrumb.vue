<script lang="ts" setup>

export interface PathList {
  name: string;
  pathName: string;
}

interface Props {
  pathList: PathList[];
}
withDefaults(defineProps<Props>(), {
  pathList: () => [],
});

</script>

<template>
  <div class="py-5 text-[#128aed] text-[13px] font-semibold" style="text-transform: capitalize">
    <template v-for="item in pathList" :key="item.name">
      <router-link v-if="item.pathName" :to="{name: item.pathName}">{{ item.name }}</router-link>
      <span v-else class="text-[#606266]">{{ item.name }}</span>
      <span class="separator">/</span>
    </template>
  </div>
</template>

<style scoped>
.separator{
  margin: 0 9px;
}
.separator:last-of-type {
  display: none;
}
</style>