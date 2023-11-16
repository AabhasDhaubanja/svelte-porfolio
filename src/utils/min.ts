export const min = ([...numbers]) => {
  let min = numbers[0];

  numbers.forEach((num) => {
    if (min < num) min = num;
  });

  return min;
};
