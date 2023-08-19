<script setup lang="ts">
import { ref } from 'vue';
import ArrowDownFilled from '@/components/icons/ArrowDownFilledIcon.vue';

interface SelectProps {
  options: Record<string, string>;
  value: string;
  title: string;
}

defineProps<SelectProps>();
const emits = defineEmits<{
  (e: 'select', value: string): void;
}>();
const isOpen = ref(false);

const handleSelect = (value: string) => {
  emits('select', value);
  isOpen.value = false;
};
</script>

<template>
  <div :tabindex="0" class="select" @blur="isOpen = false" @click="isOpen = !isOpen">
    <div class="select__container">
      <div class="select__indicator">
        <span>{{ options[value] }}</span>
        <ArrowDownFilled />
      </div>
      <span class="select__title">{{ title }}</span>
    </div>
    <Transition
      enter-active-class="select__enter-active-class"
      enter-from-class="select__enter-from-class"
      enter-to-class="select__enter-to-class"
      leave-active-class="select__leave-active-class"
      leave-from-class="select__leave-from-class"
      leave-to-class="select__leave-to-class"
    >
      <div v-if="isOpen" class="select__selector">
        <div
          v-for="[key, value] of Object.entries(options)"
          :key="key"
          class="select__item"
          @click.stop="handleSelect(key)"
        >
          {{ value }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.select {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-height: 30px;
  gap: 4px;
  flex-shrink: 0;
  cursor: pointer;
  font-size: 13px;

  &__container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: $radii;
    background-color: $tertiary;
    padding-inline: 14px 20px;
    box-shadow: $sh-primary;
    border: 1px solid $border-secondary;
    backdrop-filter: $blur;
  }

  &__indicator {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 12px;
    transform: translateY(-50%);
  }

  &__selector {
    position: absolute;
    top: calc(100% + 4px);
    z-index: 1;
    width: 100%;
    border-radius: $radii;
    background-color: $tertiary;
    backdrop-filter: $blur;
    box-shadow: $sh-primary;
    padding-block: 12px;
    border: 1px solid $border-secondary;
  }

  &__item {
    padding: 6px 14px 6px 20px;

    &:hover {
      color: $text-orange;
    }
  }

  &__enter-active-class {
    transition: all 300ms ease-in-out;
  }

  &__enter-from-class {
    transform: translateY(-10%);
    opacity: 0;
  }

  &__enter-to-class {
    transform: translateY(0);
    opacity: 1;
  }

  &__leave-active-class {
    transition-duration: 300ms;
  }

  &__leave-from-class {
    transform: translateY(0);
    opacity: 1;
  }

  &__leave-to-class {
    transform: translateY(-10%);
    opacity: 0;
  }
}
</style>
