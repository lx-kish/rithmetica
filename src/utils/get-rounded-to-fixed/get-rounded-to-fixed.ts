export function getRoundedToFixed(
  input: string | number,
  digits: number
): number {
  const rounder = Math.pow(10, digits);
  return Number(
    (Math.round(Number(input) * rounder) / rounder).toFixed(digits)
  );
}
