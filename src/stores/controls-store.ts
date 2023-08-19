import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { OperationStatus, OperationPeriod, OperationType } from '@/types';

export const useControlsStore = defineStore('controls-store', () => {
  const status = ref<OperationStatus>('all');
  const period = ref<OperationPeriod>('all');
  const type = ref<OperationType>('all');

  const setStatus = (value: OperationStatus) => {
    status.value = value;
  };

  const setPeriod = (value: OperationPeriod) => {
    period.value = value;
  };

  const setType = (value: OperationType) => {
    type.value = value;
  };

  return { status, period, type, setStatus, setPeriod, setType };
});
