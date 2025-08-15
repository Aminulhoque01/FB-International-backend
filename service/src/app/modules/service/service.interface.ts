export interface IExpense {
  title: string;
  amount: number;
  category: 'Food' | 'Transport' | 'Shopping' | 'Others';
  date: Date;
}
