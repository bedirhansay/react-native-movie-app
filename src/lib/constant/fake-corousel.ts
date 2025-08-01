export interface SummaryCardData {
  id: string;
  title: string;
  currency: string;
  amount: number;
  period: string;
  type: 'debt' | 'credit';
  chartPoints?: number[];
}

export const fakeSummaryCards: SummaryCardData[] = [
  {
    id: '1',
    title: 'Borçlar',
    currency: 'TRY',
    amount: -28000,
    period: 'Son 20 Gün',
    type: 'debt',
    chartPoints: [10, 20, 15, 30, 25, 18, 12],
  },
  {
    id: '2',
    title: 'Alacaklar',
    currency: 'TRY',
    amount: 12000,
    period: 'Son 10 Gün',
    type: 'credit',
    chartPoints: [5, 15, 25, 20, 22, 30],
  },
];
