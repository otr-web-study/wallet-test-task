<script setup lang="ts">
import TheBalance from './TheBalance.vue';
import TheOperations from './TheOperations.vue';
</script>

<template>
  <main class="wallet-content">
    <TheBalance />
    <TheOperations />
  </main>
</template>

<style lang="scss">
.wallet-content {
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @include media($md) {
    grid-template-columns: 170px 1fr;
    gap: 20px;
    align-items: start;
  }

  @include media($lg) {
    grid-template-columns: 234px 1fr;
    gap: 43px;
  }

  @include media($xl) {
    grid-template-columns: 339px 1fr;
    padding-top: 40px;
    gap: 60px;
  }
}
</style>
