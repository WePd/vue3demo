<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <img :src="item.imgUrl" alt="" srcset="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { getBannerAPI } from '@/api/home';
import { BannerRequest, BannerResult } from '@/api/model/homeModel';
import { onMounted, ref } from 'vue';

const bannerList = ref([] as BannerResult[]);

const getBanner = async () => {
  const res = await getBannerAPI({ distributionSite: 1 } as BannerRequest)
  bannerList.value = res.result
}
onMounted(() => {
  getBanner()
})
</script>

<style lang="scss" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>

