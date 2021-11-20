export const formatId = (id: string | number) => {
  return `#${String(id).padStart(4, '0')}`;
};
