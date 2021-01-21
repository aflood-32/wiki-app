// TODO DEBOUNCE
export const linkNormalization = (title: string): string => {
  return title.split(" ").join("_");
};
