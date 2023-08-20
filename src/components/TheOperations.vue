<script setup lang="ts">
import { useFetchOperations } from '@/hooks/useFetchOperations';
import { useOperations } from '@/hooks/useOperations';
import OperationsTable from './OperationsTable.vue';

useFetchOperations();
const { operations, hasOperations } = useOperations();
</script>

<template>
  <div class="operations">
    <h3 v-if="!hasOperations" class="operations__message">
      У вас ещё не было операций с кошельком.
    </h3>
    <h3 v-else-if="!operations.length" class="operations__message">
      Нет операций удовлетворяющих установленным фильтрам.
    </h3>
    <OperationsTable v-else :operations="operations" />
  </div>
</template>

<style lang="scss">
.operations {
  display: flex;
  align-items: start;

  &__message {
    font-size: 13px;
    font-weight: $bold;

    @include media($md) {
      font-size: 14px;
    }

    @include media($lg) {
      font-size: 16px;
    }

    @include media($xl) {
      font-size: 18px;
    }
  }
}
</style>
