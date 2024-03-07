<!--
 * @Author: wei.chenyu
 * @Date: 2024-02-27 17:08:48
 * @LastEditors: wei.chenyu
 * @LastEditTime: 2024-03-05 16:19:17
 * @Descripttion: 底部播放栏
-->
<script setup>
import { onMounted } from 'vue';
import AudioBar from './AudioComponent/AudioBar.vue';
import AudioVolume from './AudioComponent/AudioVolume.vue';
import AudioController from './AudioComponent/AudioController.vue';
import { useAudioStore } from '@/stores/audio';

import audioUrl from '@/assets/audio/周杰伦 - 说了再见.m4a';

// 音频 store
const audio = useAudioStore();

// 加载音乐连接
onMounted(() => {
  audio.audio = new Audio(audioUrl);
});
</script>

<template>
  <div class="playBarWrapper">
    <AudioController
      @handlePlay="handlePlay"
      @handleStop="handleStop"
    />
    <AudioBar />
    <AudioVolume />
  </div>
</template>

<style scoped lang="less">
.playBarWrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 5rem;
  padding: 0.75rem 1.5rem;
  border-top: 1px solid #ccc;
}
</style>