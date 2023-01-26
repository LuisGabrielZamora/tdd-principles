export const sum = (numbers: number[]): number => {
  return numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
}

export const average = (numbers: number[]) => {
  return sum(numbers) / numbers.length;
}
