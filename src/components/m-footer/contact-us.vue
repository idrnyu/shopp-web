<script lang="ts" setup>
</script>

<template>
  <div class="contact">
    <div class="content flex">
      <div class="c-col">
        <h5 class="c-title">CONTACT US</h5>
        <div class="c-content">
          <p class="c-item">🌏：广东省深圳市</p>
          <p class="c-item">📞：+80 0755</p>
          <p class="c-item">📧：test@gmain.com</p>
        </div>
      </div>
      <div class="c-col">
        <h5 class="c-title">WeChat</h5>
        <div class="c-content">
          <img src="../../assets/qrcode.png" alt="" width="120" style="border: 1px solid #ccc;">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding: 65px 0 67px 0;
}
.c-title {
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 17px;
  color: #242424;
}
.c-content {
  color: #7e7e7e;
  line-height: 24px;
  font-size: 13px;
  font-weight: 400;
}
.c-item {
  margin-bottom: 9px;
}
.c-col {
  margin-right: 60px;
}
</style>