<script lang="ts" setup>
import { ref } from 'vue';
import ContactUs from './contact-us.vue';

const url = ref(location.host);
const date = ref();
fetch('/', { method: 'HEAD' }).then((e) => date.value = e.headers.get('Date'));

</script>

<template>
  <footer style="border-top: 1px solid #e5e5e5;">
    <ContactUs />
    <div class="copyright">
      <div class="content h-full" style="line-height: 52px;">
        Copyright © {{ new Date(date).getFullYear() }} <a href="/">{{ url }}</a>. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.copyright {
  text-align: center;
  height: 60px;
  padding: 4px 0;
  color: #fff;
  font-size: 13px;
  background: #128aed;
}
</style>