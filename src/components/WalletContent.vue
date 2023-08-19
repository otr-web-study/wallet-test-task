<script setup lang="ts">
import TheBalance from './TheBalance.vue';
</script>

<template>
  <main class="wallet-content">
    <TheBalance />
  </main>
</template>

<style lang="scss">
.wallet-content {
  padding-top: 20px;
  display: flex;
  flex-direction: column;

  @include media($md) {
    flex-direction: row;
  }

  @include media($xl) {
    padding-top: 40px;
  }
}
</style>
