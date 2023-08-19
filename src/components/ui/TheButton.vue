<script setup lang="ts">
import { toRefs } from 'vue';

type ButtonType = 'outlined' | 'orrange' | 'default';

interface ButtonProps {
  type?: ButtonType;
  extraClass?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  extraClass: '',
});
const classes = {
  button_outlined: props.type === 'outlined',
  button_orrange: props.type === 'orrange',
  button_default: props.type === 'default',
};
</script>

<template>
  <button :class="['button', classes, extraClass]">
    <slot />
  </button>
</template>

<style lang="scss">
.button {
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  background-color: transparent;
  border: none;
  border-radius: $radii;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  &_outlined {
    border: 1px solid rgba(250, 57, 57, 0.8);
    color: white;
    backdrop-filter: $blur;
  }

  &_orrange {
    background-image: $bg-orrange;
    color: white;
    box-shadow: $sh-tertiary;
  }

  &_default {
    color: $text-orange;
  }
}
</style>
