export type IParams = { [propName: string]: any };

export interface IExpense {
  date: Date;
  category: string;
  amount: number;
}
