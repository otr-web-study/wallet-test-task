import { ref, onBeforeUnmount } from 'vue';

export const useMatchMedia = (queries: string[]) => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));
  const matches = mediaQueryLists.map((list) => ref(list.matches));

  const handler = (ind: number) => () => {
    matches[ind].value = mediaQueryLists[ind].matches;
  };
  const handlers: Record<string, () => void> = {};

  mediaQueryLists.forEach((list, ind) => {
    handlers[ind] = handler(ind);
    list.addEventListener('change', handlers[ind]);
  });

  onBeforeUnmount(() => {
    mediaQueryLists.forEach((list, ind) => list.removeEventListener('change', handlers[ind]));
  });

  return matches;
};
