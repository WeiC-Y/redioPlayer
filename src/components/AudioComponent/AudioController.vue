<!--
 * @Author: wei.chenyu
 * @Date: 2024-02-27 17:08:48
 * @LastEditors: wei.chenyu
 * @LastEditTime: 2024-03-05 16:22:15
 * @Descripttion: 音乐播放控制区域
-->
<script setup>
import { PlayBtnVue, BackBtnVue, NextBtnVue } from '@/components';
</script>

<template>
  <div class="audioController">
    <BackBtnVue />
    <PlayBtnVue />
    <NextBtnVue />
  </div>
</template>

<style scoped lang="less">
.audioController {
  & :deep(.btn) {
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
    font-size: 1.5rem;
    margin: 0 0.75rem;
    cursor: pointer;
    > .iconfont {
      color: #fff;
      font-size: inherit;
    }
  }
}
</style>