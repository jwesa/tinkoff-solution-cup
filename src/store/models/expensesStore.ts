import { types } from "mobx-state-tree";

import { mockData } from "../../constants";

import { IExpense } from "../../types";

const ExpenseModel = types.model({
  date: types.optional(types.Date, 0),
  category: types.optional(types.string, ""),
  amount: types.optional(types.number, 0),
});

export const ExpensesStore = types
  .model({
    list: types.optional(types.array(ExpenseModel), mockData),
  })
  .views((self) => ({
    get total() {
      return self.list.reduce((a, b) => a + b.amount, 0);
    },
  }))
  .actions((self) => ({
    addCost(cost: IExpense) {
      let categoryExisting = false;

      self.list.map((item) => {
        if (
          cost.category.toLowerCase().trim() ===
          item.category.toLowerCase().trim()
        ) {
          item.amount += cost.amount;
          categoryExisting = true;
        }
      });

      if (!categoryExisting) {
        self.list.push(cost);
      }
    },
  }));
