export const expo = (x: number) => {
  if (x <= -1 || x >= 1) return 0;

  if (x <= 0) {
    return 1 - Math.pow(x * -1, 5);
  }

  return 1 - Math.pow(x, 5);
};
