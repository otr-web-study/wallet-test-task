<script setup lang="ts">
import { formatDate } from '@/utils/format';
import { statusRepr, typeRepr } from '@/utils/representation';
import TheStatus from './TheStatus.vue';
import TheAmount from './TheAmount.vue';
import IconWrapper from './IconWrapper.vue';
import type { Operation, OperationType } from '@/types';

interface RecordProps {
  op: Operation;
  icons: Record<OperationType, unknown>;
}

defineProps<RecordProps>();

const statusRepresentation = statusRepr();
const typeRepresentation = typeRepr();
</script>

<template>
  <tr class="table-record">
    <td class="table-record__cell">
      <IconWrapper><component :is="icons[op.type]" /></IconWrapper>
    </td>
    <td class="table-record__cell">
      {{ `# ${op.id}` }}
    </td>
    <td class="table-record__cell">{{ formatDate(op.date * 1000) }}</td>
    <td class="table-record__cell">{{ typeRepresentation[op.type] }}</td>
    <td class="table-record__cell">
      <TheStatus :status="op.status">{{ statusRepresentation[op.status] }}</TheStatus>
    </td>
    <td class="table-record__cell">
      <TheAmount :amount="op.amount"></TheAmount>
    </td>
  </tr>
</template>

<style lang="scss">
.table-record {
  & > td:nth-child(2) {
    width: 8%;
  }

  & > td:nth-child(3) {
    width: 19%;
  }

  & > td:nth-child(5) {
    width: 20%;
    padding-left: 12px;
  }

  &__cell {
    padding-block: 10px;
    background-color: $secondary;
    box-shadow: $sh-primary;
    backdrop-filter: $blur;
    border-bottom: 1px solid $border-primary;
    border-top: 1px solid $border-primary;

    &:last-of-type {
      padding-right: 10px;
      border-top-right-radius: $radii-strong;
      border-bottom-right-radius: $radii-strong;
      border-right: 1px solid $border-primary;
      width: 12%;
    }

    &:first-of-type {
      padding-left: 10px;
      border-top-left-radius: $radii-strong;
      border-bottom-left-radius: $radii-strong;
      border-left: 1px solid $border-primary;
      width: min-content;
    }
  }
}
</style>
