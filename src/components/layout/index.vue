<script lang="ts" setup>
import MHeader from '../m-header/index.vue';
import MFooter from '../m-footer/index.vue';

</script>

<template>
  <div class="layout">
    <MHeader />
    <div style="min-height: 100vh">
      <router-view v-slot="{ Component }">
        <keep-alive :include="['Home']">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <MFooter />
  </div>
</template>

<style scoped>


</style>