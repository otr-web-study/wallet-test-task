import { useControlsStore } from '@/stores/controls-store';
import type { OperationPeriod } from '@/types';
import { storeToRefs } from 'pinia';

export const useFilterPeriod = () => {
  const store = useControlsStore();
  const { period } = storeToRefs(store);
  const options: Record<OperationPeriod, string> = {
    all: 'За все время',
    day: 'За день',
    week: 'За последние 7 дней',
    month: 'За последний месяц',
  };

  const handleSelectPeriod = (value: string) => {
    store.setPeriod(value as OperationPeriod);
  };

  return { period, options, handleSelectPeriod };
};
