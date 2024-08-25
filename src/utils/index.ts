export const formatValue = (value: number) => {
  return new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: undefined,
  }).format(value);
};

export function formatCurrencyWithSuffix(num: number) {
  if (num >= 1e7) {
    return (num / 1e7).toFixed(2) + "Cr";
  } else if (num >= 1e5) {
    return (num / 1e5).toFixed(2) + "L";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + "K";
  } else {
    return num.toString();
  }
}
