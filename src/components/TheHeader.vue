<script setup lang="ts">
import TheButton from '@/components/ui/TheButton.vue';
import ArrowDownIcon from './icons/ArrowDownIcon.vue';
import ArrowUpIcon from './icons/ArrowUpIcon.vue';
import TheFilters from './TheFilters.vue';
import { useToggledFilters } from '@/hooks/useToggledFilters';

const [isFilterToggled, onToggle] = useToggledFilters();
</script>

<template>
  <header class="header">
    <h2 class="header__title">Кошелёк</h2>
    <TheButton type="default" @click="onToggle" extra-class="header__button">
      <span class="header__button-text">{{
        isFilterToggled ? 'Свернуть фильтры' : 'Развернуть фильтры'
      }}</span>
      <ArrowUpIcon v-if="isFilterToggled" />
      <ArrowDownIcon v-else />
    </TheButton>
    <TheFilters />
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(125, 119, 129, 0.2);

  &__title {
    font-size: 20px;
    font-weight: $bold;

    @include media($lg) {
      font-size: 25px;
    }

    @include media($xl) {
      font-size: 30px;
    }
  }

  &__button {
    @include media($md) {
      display: none;
    }
  }

  &__button-text {
    margin-right: 10px;
  }
}
</style>
