import { useControlsStore } from '@/stores/controls-store';
import type { OperationType } from '@/types';
import { storeToRefs } from 'pinia';

export const useFilterType = () => {
  const store = useControlsStore();
  const { type } = storeToRefs(store);
  const options: Record<OperationType, string> = {
    all: 'Все',
    replenishment: 'Пополнение баланса',
    withdrawal: 'Вывод средств',
    refund: 'Возврат',
    'fulfillment-income': 'Выполнение заказа/входящий платеж',
  };

  const handleSelectType = (value: string) => {
    store.setType(value as OperationType);
  };

  return { type, options, handleSelectType };
};
