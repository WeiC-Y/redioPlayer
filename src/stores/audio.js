/*
 * @Author: wei.chenyu
 * @Date: 2024-02-26 23:51:53
 * @LastEditors: wei.chenyu
 * @LastEditTime: 2024-03-05 17:22:47
 * @Descripttion: 音乐状态控制
 */
import { watch, onMounted, onUnmounted } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { PLAY_LIST } from '@/constants';

export const useAudioStore = defineStore({
  id: 'audio',
  state: () => ({
    currentPlayName: PLAY_LIST?.[0]?.name,
    currentPlayId: PLAY_LIST?.[0]?.id,
    audio: new Audio(PLAY_LIST?.[0]?.src), // 音频对象
    loopType: 0, // 循环模式 0 单曲循环 1 列表循环  2 随机播放
    vloume: 0, // 音量
    playList: PLAY_LIST || JSON.parse(window.sessionStorage.getItem('PLAYLIST') || '[]'), // 播放列表
    showPlayList: false, // 展示播放列表
    isPlay: false, // 是否播放
    isMuted: false, // 是否静音
    currentTime: 0, // 当前播放时长
    duration: 0, // 总时长
    ended: false, // 是否播放结束
    sliderInput: false // 是否拖动进度条
  }),
  getters: {},
  actions: {
    init() {
      const volume = typeof this.volume === 'undefined' ? 0 : this.volume;
      this.audio.volume = volume / 100;
    },
    play() {
      this.audio?.play();
      this.isPlay = true;
    },
    stop() {
      this.audio?.pause();
      this.isPlay = false;
    },
    togglePlay(params) {
      // 切换播放
      const { id, name, src } = params;
      console.log(this.audio, src, 'this');
      this.audio.src = src;
      this.currentTime = 0;
      this.duration = 0;
      this.currentPlayId = id;
      this.currentPlayName = name;
      this.play();
      this.isPlay = true;
    },
    next() {
      const idx = this.playList?.findIndex(item => item?.id === this.currentPlayId);
      if (idx >= 0) {
        const nextIdx = idx === this.playList?.length - 1 ? 0 : idx + 1;
        // 当前播放列表中存在当前播放的音乐
        const payload = this.playList?.[nextIdx] || {};
        this.togglePlay(payload);
      }
    },
    prev() {
      const idx = this.playList?.findIndex(item => item?.id === this.currentPlayId);
      if (idx >= 0) {
        const nextIdx = idx === 0 ? this.playList?.length - 1 : idx - 1;
        // 当前播放列表中存在当前播放的音乐
        const payload = this.playList?.[nextIdx] || {};
        this.togglePlay(payload);
      }
    },
    randomPlay() {},
    rePlay() {
      // 重新播放
      setTimeout(() => {
        this.currentTime = 0;
        this.audio.play();
      }, 1500);
    },
    playEnd() {
      //播放结束
      console.log('播放结束');
      switch (this.loopType) {
        case 0:
          this.rePlay();
          break;
        case 1:
          this.next();
          break;
        case 2:
          this.randomPlay();
          break;
      }
    },
    //修改播放时间
    onSliderChange(val) {
      this.currentTime = val;
      this.sliderInput = false;
      this.audio.currentTime = val;
    },
    //播放时间拖动中
    onSliderInput() {
      this.sliderInput = true;
    },
    interval() {
      // 定时器
      if (this.isPlay && !this.sliderInput) {
        this.currentTime = parseInt(this.audio.currentTime.toString());
        this.duration = parseInt(this.audio.duration.toString());
        this.ended = this.audio.ended;
      }
    },
    save(fun) {
      return fun(this);
    }
  }
});

export const usePlayerInit = () => {
  let timer = null;
  const { init, interval, playEnd } = useAudioStore();
  const { ended } = storeToRefs(useAudioStore());

  // 监听播放结束
  watch(ended, end => {
    if (!end) return;
    playEnd();
  });

  // 启动定时器
  onMounted(() => {
    init();
    console.log('创建定时器');
    timer = setInterval(interval, 1000);
  });

  // 清除定时器
  onUnmounted(() => {
    console.log('清除定时器');
    clearInterval(timer);
  });
};
