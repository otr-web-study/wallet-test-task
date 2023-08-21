<script setup lang="ts">
import { formatDate } from '@/utils/format';
import { statusRepr, typeRepr } from '@/utils/representation';
import TheAmount from '@/components/TheAmount.vue';
import TheStatus from '@/components/TheStatus.vue';
import IconWrapper from '@/components/IconWrapper.vue';
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
  <tr class="table-record-mobile">
    <td class="table-record-mobile__cell">
      <IconWrapper><component :is="icons[op.type]" /></IconWrapper>
    </td>
    <td class="table-record-mobile__cell">
      <div class="table-record-mobile__content-container">
        {{ `# ${op.id}` }}
        <TheStatus :status="op.status">{{ statusRepresentation[op.status] }}</TheStatus>
      </div>
    </td>
    <td class="table-record-mobile__cell">{{ formatDate(op.date * 1000) }}</td>
    <td class="table-record-mobile__cell">
      <div class="table-record-mobile__content-container">
        {{ typeRepresentation[op.type] }}
        <TheAmount :amount="op.amount"></TheAmount>
      </div>
    </td>
  </tr>
</template>

<style lang="scss">
.table-record-mobile {
  & > td:nth-child(2) {
    padding-left: 15px;
  }

  & > td:nth-child(3) {
    padding-left: 5px;
  }

  & > td:nth-child(4) {
    padding-left: 5px;
    width: 40%;
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

  &__content-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
