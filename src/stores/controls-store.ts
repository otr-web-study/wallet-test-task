import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { OperationStatusFilter, OperationPeriodFilter, OperationTypeFilter } from '@/types';

export const useControlsStore = defineStore('controls-store', () => {
  const status = ref<OperationStatusFilter>('all');
  const period = ref<OperationPeriodFilter>('all');
  const type = ref<OperationTypeFilter>('all');

  const setStatus = (value: OperationStatusFilter) => {
    status.value = value;
  };

  const setPeriod = (value: OperationPeriodFilter) => {
    period.value = value;
  };

  const setType = (value: OperationTypeFilter) => {
    type.value = value;
  };

  return { status, period, type, setStatus, setPeriod, setType };
});
