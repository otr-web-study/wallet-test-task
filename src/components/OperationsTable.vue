<script setup lang="ts">
import type { Operation, OperationType } from '@/types';
import TableHead from '@/components/TableHead.vue';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { MD_SCREEN } from '@/constants/screen';
import BlueArrowIcon from '@/components/icons/BlueArrowLeftIcon.vue';
import CheckedMarkIcon from '@/components/icons/CheckedMarkIcon.vue';
import CircleArrowIcon from '@/components/icons/CircleArrowIcon.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import TableRecord from '@/components/TableRecord.vue';
import TableRecordMobile from '@/components/TableRecordMobile.vue';

defineProps<{ operations: Operation[] }>();

const iconByType: Record<OperationType, typeof PlusIcon> = {
  replenishment: PlusIcon,
  refund: CircleArrowIcon,
  withdrawal: BlueArrowIcon,
  'fulfillment-income': CheckedMarkIcon,
};

const queries = [`(min-width: ${MD_SCREEN}px)`];
const [isMdScreen] = useMatchMedia(queries);
</script>

<template>
  <table class="operations-table">
    <TableHead v-if="isMdScreen"></TableHead>
    <template v-if="isMdScreen">
      <TableRecord v-for="op in operations" :key="op.id" :op="op" :icons="iconByType" />
    </template>
    <template v-else>
      <TableRecordMobile v-for="op in operations" :key="op.id" :op="op" :icons="iconByType" />
    </template>
  </table>
</template>

<style lang="scss">
.operations-table {
  font-size: 12px;
  border-spacing: 0 10px;
  width: 100%;

  @include media($lg) {
    font-size: 14px;
  }

  @include media($xl) {
    font-size: 16px;
  }
}
</style>
