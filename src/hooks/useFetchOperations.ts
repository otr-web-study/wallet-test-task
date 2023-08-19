import { onMounted } from 'vue';
import { useOperationsStore } from '@/stores/operations-store';
import data from '@/mock/data.json';
import type { Operation } from '@/types';

export const useFetchOperations = () => {
  const { setOperations } = useOperationsStore();

  onMounted(() => {
    setOperations(data as Operation[]);
  });
};
