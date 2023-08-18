<script setup lang="ts">
import TheSelect from './TheSelect.vue';
import { useFilterStatus } from '@/hooks/useFilterStatus';

const { options: statusOptions, status, handleSelectStatus } = useFilterStatus();
</script>

<template>
  <div>
    <TheSelect
      :options="statusOptions"
      :value="status"
      title="Статус"
      @select="handleSelectStatus"
    />
  </div>
</template>

<style lang="scss"></style>
