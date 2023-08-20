import { storeToRefs } from 'pinia';
import { useControlsStore } from '@/stores/controls-store';
import { typeRepr } from '@/utils/representation';
import type { OperationTypeFilter } from '@/types';

export const useFilterType = () => {
  const store = useControlsStore();
  const { type } = storeToRefs(store);
  const options: Record<OperationTypeFilter, string> = {
    all: 'Все',
    ...typeRepr(),
  };

  const handleSelectType = (value: string) => {
    store.setType(value as OperationTypeFilter);
  };

  return { type, options, handleSelectType };
};
