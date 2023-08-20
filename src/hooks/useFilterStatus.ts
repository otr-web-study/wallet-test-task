import { storeToRefs } from 'pinia';
import { useControlsStore } from '@/stores/controls-store';
import { statusRepr } from '@/utils/representation';
import type { OperationStatusFilter } from '@/types';

export const useFilterStatus = () => {
  const store = useControlsStore();
  const { status } = storeToRefs(store);
  const options: Record<OperationStatusFilter, string> = {
    all: 'Все',
    ...statusRepr(),
  };

  const handleSelectStatus = (value: string) => {
    store.setStatus(value as OperationStatusFilter);
  };

  return { status, options, handleSelectStatus };
};
