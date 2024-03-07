<!--
 * @Author: wei.chenyu
 * @Date: 2024-02-27 17:08:48
 * @LastEditors: wei.chenyu
 * @LastEditTime: 2024-02-29 16:19:42
 * @Descripttion: Play按钮
-->
<script setup>
import { storeToRefs } from 'pinia';
import { useAudioStore } from '@/stores/audio';
const audioStore = useAudioStore();
const { isPlay } = storeToRefs(audioStore);

const handlePlay = () => {
  audioStore?.play();
};

const handleStop = () => {
  audioStore?.stop();
};
</script>

<template>
  <span class="playBtn btn">
    <i
      v-if="!isPlay"
      class="iconfont icon-play1"
      @click="handlePlay"
    />
    <i
      v-else
      class="iconfont icon-pause1"
      @click="handleStop"
    />
  </span>
</template>

<style scoped lang="less">
.playBtn {
}
</style>