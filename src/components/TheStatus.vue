<script setup lang="ts">
import type { OperationStatus } from '@/types';

defineProps<{ status: OperationStatus }>();
</script>

<template>
  <span
    class="operation-status"
    :class="{
      'operation-status_green': 'fulfilled' === status,
      'operation-status_yellow': 'waiting' === status,
      'operation-status_red': 'rejected' === status,
    }"
  >
    <slot />
  </span>
</template>

<style lang="scss">
.operation-status {
  position: relative;
  display: block;

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }

  &_green {
    color: $text-success;
    &::before {
      background-color: $text-success;
    }
  }

  &_red {
    color: $text-cancelled;
    &::before {
      background-color: $text-cancelled;
    }
  }

  &_yellow {
    color: $text-waiting;
    &::before {
      background-color: $text-waiting;
    }
  }
}
</style>
