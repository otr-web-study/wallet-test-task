<script setup lang="ts">
import type { Operation, OperationStatus, OperationType } from '@/types';
import TableHead from '@/components/TableHead.vue';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { MD_SCREEN } from '@/constants/screen';
import BlueArrowIcon from '@/components/icons/BlueArrowLeftIcon.vue';
import CheckedMarkIcon from '@/components/icons/CheckedMarkIcon.vue';
import CircleArrowIcon from '@/components/icons/CircleArrowIcon.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import { formatDate } from '@/utils/format';
import { statusRepr, typeRepr } from '@/utils/representation';
import { CURRENCY } from '@/constants/config';

defineProps<{ operations: Operation[] }>();

const iconByType: Record<OperationType, unknown> = {
  replenishment: PlusIcon,
  refund: CircleArrowIcon,
  withdrawal: BlueArrowIcon,
  'fulfillment-income': CheckedMarkIcon,
};

const queries = [`(min-width: ${MD_SCREEN}px)`];
const [isMdScreen] = useMatchMedia(queries);

const statusRepresentation = statusRepr();
const typeRepresentation = typeRepr();
</script>

<template>
  <table class="operations-table">
    <TableHead v-if="isMdScreen"></TableHead>
    <tr v-for="op in operations" :key="op.id" class="operations-table__record">
      <td class="operations-table__cell">
        <div class="operations-table__icon"><component :is="iconByType[op.type]" /></div>
      </td>
      <td class="operations-table__cell">
        {{ `# ${op.id}` }}
      </td>
      <td class="operations-table__cell">{{ formatDate(op.date * 1000) }}</td>
      <td class="operations-table__cell">{{ typeRepresentation[op.type] }}</td>
      <td class="operations-table__cell">
        <div class="operations-table__status-container">
          <span
            class="operations-table__status"
            :class="{
              'operations-table__status_green': 'fulfilled' === op.status,
              'operations-table__status_yellow': 'waiting' === op.status,
              'operations-table__status_red': 'rejected' === op.status,
            }"
          >
            {{ statusRepresentation[op.status] }}
          </span>
        </div>
      </td>
      <td class="operations-table__cell">
        <span class="operations-table__amount">{{ op.amount }}</span>
        <span class="operations-table__currency">{{ CURRENCY }}</span>
      </td>
    </tr>
  </table>
</template>

<style lang="scss">
.operations-table {
  font-size: 12px;
  border-spacing: 0 10px;
  width: 100%;

  &__record {
    & > td:nth-child(2) {
      width: 9%;
    }

    & > td:nth-child(3) {
      width: 19%;
    }

    & > td:nth-child(5) {
      width: 20%;
    }
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

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: $secondary;
    border: 1px solid $border-primary;
    width: 35px;
    height: 35px;
    border-radius: $radii-strong;
    margin-right: 3px;

    @include media($lg) {
      width: 43px;
      height: 42px;
    }
  }

  &__amount {
    font-weight: $semibold;
    margin: 3px;
  }

  &__currency {
    color: $text-secondary;
  }

  &__status-container {
    display: flex;
    justify-content: center;
  }

  &__status {
    position: relative;

    &::before {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__status_green {
    color: $text-success;
    &::before {
      background-color: $text-success;
    }
  }

  &__status_red {
    color: $text-cancelled;
    &::before {
      background-color: $text-cancelled;
    }
  }

  &__status_yellow {
    color: $text-waiting;
    &::before {
      background-color: $text-waiting;
    }
  }
}
</style>
