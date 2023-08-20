import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useOperationsStore } from '@/stores/operations-store';
import { useControlsStore } from '@/stores/controls-store';

export const useOperations = () => {
  const { status, type, period } = storeToRefs(useControlsStore());
  const { operations, hasOperations } = storeToRefs(useOperationsStore());

  const comparedDate = computed(() => {
    const now = new Date();

    switch (period.value) {
      case 'day':
        return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
      case 'week':
        return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
      case 'month':
        return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
      default:
        return new Date(1, 1, 1);
    }
  });

  const filteredOperations = computed(() =>
    operations.value.filter(
      (op) =>
        (status.value === 'all' || status.value === op.status) &&
        (type.value === 'all' || type.value === op.type) &&
        new Date(op.date * 1000) >= comparedDate.value,
    ),
  );

  const sortedOperations = computed(() => filteredOperations.value.sort((a, b) => b.id - a.id));

  return { operations: sortedOperations, hasOperations };
};
