import { ref, type Ref } from 'vue';

export const useToggledFilters = (): [Ref<boolean>, () => void] => {
  const isToggled = ref(false);

  const handleToggle = () => {
    isToggled.value = !isToggled.value;
  };

  return [isToggled, handleToggle];
};
