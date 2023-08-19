import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Operation } from '@/types';

export const useOperationsStore = defineStore('operations-store', () => {
  const operations = ref<Operation[]>([]);
  const hasOperations = computed(() => !!operations.value.length);

  const setOperations = (value: Operation[]) => {
    operations.value = value;
  };

  return { operations, hasOperations, setOperations };
});
