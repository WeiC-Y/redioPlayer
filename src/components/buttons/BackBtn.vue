<!--
 * @Author: wei.chenyu
 * @Date: 2024-02-27 17:08:48
 * @LastEditors: wei.chenyu
 * @LastEditTime: 2024-03-05 17:22:07
 * @Descripttion: Back按钮
-->
<script setup>
import { useAudioStore } from '@/stores/audio';
const { prev } = useAudioStore();
</script>

<template>
  <span
    @click="prev"
    class="backBtn btn"
  >
    <i class="iconfont icon-back1" />
  </span>
</template>

<style scoped lang="less">
</style>