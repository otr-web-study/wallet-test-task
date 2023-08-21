<script setup lang="ts">
import { CURRENCY } from '@/constants/config';
defineProps<{ amount: number }>();
</script>

<template>
  <span class="amount">{{ amount }}</span>
  <span class="currency">{{ CURRENCY }}</span>
</template>

<style lang="scss">
.amount {
  font-weight: $semibold;
  margin: 3px;
}

.currency {
  color: $text-secondary;
}
</style>
