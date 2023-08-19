<script setup lang="ts">
import TheSelect from './TheSelect.vue';
import { useFilterStatus } from '@/hooks/useFilterStatus';
import { useFilterType } from '@/hooks/useFilterType';
import { useFilterPeriod } from '@/hooks/useFilterPeriod';

const { options: statusOptions, status, handleSelectStatus } = useFilterStatus();
const { options: typeOptions, type, handleSelectType } = useFilterType();
const { options: periodOptions, period, handleSelectPeriod } = useFilterPeriod();
</script>

<template>
  <div class="filters-panel">
    <TheSelect
      class="filters-panel__item"
      :options="periodOptions"
      :value="period"
      title="Время"
      @select="handleSelectPeriod"
    />
    <TheSelect
      class="filters-panel__item"
      :options="typeOptions"
      :value="type"
      title="Тип"
      @select="handleSelectType"
    />
    <TheSelect
      class="filters-panel__item"
      :options="statusOptions"
      :value="status"
      title="Статус"
      @select="handleSelectStatus"
    />
  </div>
</template>

<style lang="scss">
.filters-panel {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 23px;
  column-gap: 10px;

  @include media($md) {
    grid-template-columns: repeat(3, min(33%, 202px));
  }

  @include media($lg) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  }

  @include media($xl) {
    grid-template-columns: repeat(3, min(33%, 337px));
    justify-content: end;
  }

  &__item {
    height: 48px;

    @include media($md) {
      height: 39px;
    }

    @include media($lg) {
      height: 45px;
    }

    @include media($xl) {
      height: 55px;
    }
  }
}
</style>
