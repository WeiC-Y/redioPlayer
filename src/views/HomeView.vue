<!--
 * @Author: wei.chenyu
 * @Date: 2024-02-29 10:14:58
 * @LastEditors: wei.chenyu
 * @LastEditTime: 2024-03-05 17:40:38
 * @Descripttion: 
-->
<script setup>
import { storeToRefs } from 'pinia';
import { useAudioStore } from '@/stores/audio';
import BottomPlayBarVue from '@/components/BottomPlayBar.vue';

const { currentPlayName, currentPlayTime } = storeToRefs(useAudioStore());
</script>

<template>
  <main>
    <div v-show="currentPlayTime">当前播放：{{currentPlayName}}</div>
    <BottomPlayBarVue />
  </main>
</template>
