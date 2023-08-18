import { ref } from 'vue';
import { defineStore } from 'pinia';
import { type OperationStatus } from '@/types';

export const useControlsStore = defineStore('controls-store', () => {
  const status = ref<OperationStatus>('all');

  const setStatus = (value: OperationStatus) => {
    status.value = value;
  };

  return { status, setStatus };
});
