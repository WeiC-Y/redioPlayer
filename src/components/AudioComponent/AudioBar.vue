<!--
 * @Author: wei.chenyu
 * @Date: 2024-02-29 11:08:11
 * @LastEditors: wei.chenyu
 * @LastEditTime: 2024-03-05 16:41:20
 * @Descripttion: 进度条部分
-->
<template>
  <div class="bar">
    <Slider
      :model-value="currentTime"
      :disabled="!duration"
      :min="0"
      :max="duration"
      :show-tooltip="false"
      :onChange="handleSliderChange"
    />
    <p class="times">{{formatSeconds(currentTime)}}/{{formatSeconds(duration)}}</p>
  </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { Slider } from '@arco-design/web-vue';
import { useAudioStore } from '@/stores/audio';
import { formatSeconds } from '@/utils';
const { currentTime, duration } = storeToRefs(useAudioStore());

const handleSliderChange = val => {
  const { onSliderChange } = useAudioStore();
  onSliderChange(val);
};
</script>

<style lang="less" scoped>
.bar {
  flex: 1;
  display: flex;
  align-items: center;
  &:deep(.arco-slider) {
    margin: 0 1.5rem;
  }
}
.times {
  color: var(--vt-c-white);
}
</style>