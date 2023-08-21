<script setup lang="ts"></script>

<template>
  <div class="icon-wrapper"><slot /></div>
</template>

<style lang="scss">
.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: $secondary;
  border: 1px solid $border-primary;
  width: 35px;
  height: 35px;
  border-radius: $radii-strong;
  margin-right: 3px;

  @include media($lg) {
    width: 43px;
    height: 42px;
  }
}
</style>
