<script setup lang="ts">
import TheButton from '@/components/ui/TheButton.vue';
import ArrowDownIcon from './icons/ArrowDownIcon.vue';
import ArrowUpIcon from './icons/ArrowUpIcon.vue';
import TheFilters from './TheFilters.vue';
import { useToggledFilters } from '@/hooks/useToggledFilters';
import { useMatchMedia } from '@/hooks/useMatchMedia';

import { MD_SCREEN } from '@/constants/screen';

const queries = [`(min-width: ${MD_SCREEN}px)`];

const [isFilterToggled, onToggle] = useToggledFilters();
const [isMdScreen] = useMatchMedia(queries);
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
    <TheFilters v-if="isFilterToggled || isMdScreen" class="header__filters" />
  </header>
</template>

<style lang="scss">
.header {
  display: grid;
  grid-template-columns: min(33%, 234px) 1fr;
  gap: 23px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(125, 119, 129, 0.2);

  @include media($lg) {
    column-gap: 15px;
  }

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
    justify-self: end;

    @include media($md) {
      display: none;
    }
  }

  &__button-text {
    margin-right: 10px;
  }

  &__filters {
    grid-column: 1 / span 2;

    @include media($lg) {
      grid-column: unset;
    }
  }
}
</style>
