<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3>{{ title }}</h3>
        <small>{{ subTitle }}</small>
      </div>
      <div>
        <slot/>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

defineProps({
  title: String,
  subTitle: String
})
</script>

<style scoped lang="scss">
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
