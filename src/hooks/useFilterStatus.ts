import { useControlsStore } from '@/stores/controls-store';
import type { OperationStatus } from '@/types';
import { storeToRefs } from 'pinia';

export const useFilterStatus = () => {
  const store = useControlsStore();
  const { status } = storeToRefs(store);
  const options: Record<OperationStatus, string> = {
    all: 'Все',
    fulfilled: 'Выполнен',
    rejected: 'Отклонено',
    waiting: 'Ожидание',
  };

  const handleSelectStatus = (value: string) => {
    store.setStatus(value as OperationStatus);
  };

  return { status, options, handleSelectStatus };
};
