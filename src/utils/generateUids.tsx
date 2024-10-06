export const uuid = () => {
  return `${Math.random().toString(36).slice(2, 9)}-${Date.now()}`;
};
