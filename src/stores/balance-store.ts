import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useBalanceStore = defineStore('balance-store', () => {
  const balance = ref(200);

  const setBalance = (value: number) => {
    balance.value = value;
  };

  return { balance, setBalance };
});
