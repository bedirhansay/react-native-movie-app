export const formatCurrency = (amount: number) =>
  amount.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });
