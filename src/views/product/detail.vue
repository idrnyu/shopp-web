<script lang="ts" setup>
import {} from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
  <div>
    详情页面
    {{ route.query.q }}
  </div>
</template>

<style scoped>
</style>