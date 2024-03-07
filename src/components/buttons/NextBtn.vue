<!--
 * @Author: wei.chenyu
 * @Date: 2024-02-27 17:08:48
 * @LastEditors: wei.chenyu
 * @LastEditTime: 2024-03-05 17:21:39
 * @Descripttion: Next按钮
-->
<script setup>
import { useAudioStore } from '@/stores/audio';
const { next } = useAudioStore();
</script>

<template>
  <span
    @click="next"
    class="nextBtn btn"
  >
    <i class="iconfont icon-next1" />
  </span>
</template>

<style scoped lang="less">
.nextBtn {
}
</style>