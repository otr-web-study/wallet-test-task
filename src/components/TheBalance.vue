<script setup lang="ts">
import { storeToRefs } from 'pinia';
import MoneyIcon from '@/components/icons/MoneyIcon.vue';
import TheButton from './ui/TheButton.vue';
import { useBalanceStore } from '@/stores/balance-store';

const { balance } = storeToRefs(useBalanceStore());

const formatNumber = new Intl.NumberFormat('ru', { minimumFractionDigits: 2 }).format;
</script>

<template>
  <div class="balance">
    <div class="balance__info-container">
      <div class="balance__info">
        <span class="balance__caption">Ваш баланс:</span>
        <span class="balance__value">{{ `${formatNumber(balance)} ₸` }}</span>
      </div>
      <MoneyIcon class="balance__money-icon" />
    </div>
    <div class="balance__buttons">
      <TheButton type="orrange" extra-class="balance__button">Пополнить</TheButton>
      <TheButton type="outlined" extra-class="balance__button">Вывести</TheButton>
    </div>
  </div>
</template>

<style lang="scss">
.balance {
  background-color: $secondary;
  border: 1px solid $border-primary;
  backdrop-filter: $blur;
  border-radius: $radii-strong;
  padding: 20px;
  width: 100%;

  @include media($md) {
    width: 170px;
  }

  @include media($lg) {
    width: 234px;
  }

  @include media($xl) {
    width: 393px;
    padding: 25px;
  }

  &__info-container {
    display: flex;
    justify-content: space-between;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__caption {
    font-size: 12px;

    @include media($xl) {
      font-size: 16px;
    }
  }

  &__value {
    font-size: 15px;
    font-weight: $bold;

    @include media($md) {
      font-size: 18px;
    }

    @include media($xl) {
      font-size: 25px;
    }
  }

  &__buttons {
    margin-top: 10px;
    display: flex;
    gap: 14px;

    @include media($md) {
      margin-top: 25px;
      flex-direction: column;
      gap: 10px;
    }

    @include media($lg) {
      margin-top: 50px;
      gap: 14px;
    }

    @include media($xl) {
      flex-direction: row;
      margin-top: 68px;
      gap: 15px;
    }
  }

  &__button {
    flex-grow: 1;
    font-size: 13px;
    font-weight: $semibold;
    padding-block: 16px;

    @include media($md) {
      font-size: 12px;
      padding-block: 12px;
    }

    @include media($lg) {
      font-size: 14px;
      padding-block: 15px;
    }
  }

  &__money-icon {
    @include media($lg) {
      width: 70px;
      height: 68px;
    }
  }
}
</style>
