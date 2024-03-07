<script setup>
import { RouterView } from 'vue-router';
import { usePlayerInit } from '@/stores/audio';
import backgroundImg from 'assets/background/simpleBG.jpg';

usePlayerInit();
const url = backgroundImg;
</script>

<template>
  <div
    class="wrapper"
    :style="{backgroundImage: `url(${url})`}"
  >
    <RouterView />
  </div>
</template>

<style scoped lang="less">
.wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-repeat: url(assets/background/simpleBG.jpg) no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
