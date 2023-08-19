<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  min-height: 100vh;
  padding: 145px 25px 90px;
  background-image: url('/images/sparks1.png');
  background-repeat: no-repeat;
  background-position: bottom -50px right -50px;
  background-size: 480px 523px;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: '';
    background-image: url('/images/sparks2.png');
    background-repeat: no-repeat;
    background-position: top 125px left -50px;
    background-size: 480px 523px;
    z-index: -1;
  }

  @include media($md) {
    padding-inline: min(143px, 14vw);
    padding-top: 98px;
    background-position: bottom 118px right 0;
    background-size: 600px 518px;

    &::before {
      background-position: top 302px left 0;
      background-size: 600px 518px;
    }
  }
  @include media($lg) {
    padding-top: 117px;
    background-position: top 379px right 0 bottom unset;

    &::before {
      background-position: top 391px left 0;
    }
  }
  @include media($xl) {
    padding-inline: 130px;
    padding-top: 127px;
    background-size: 1012px 825px;
    background-position: top 402px right 0;

    &::before {
      background-size: 915px 746px;
      background-position: top 132px left 0;
    }
  }
}
</style>
