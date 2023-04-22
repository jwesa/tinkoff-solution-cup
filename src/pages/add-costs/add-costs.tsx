import React, { useState } from "react";
import { Wrapper } from "./add-costs.styled";

import { Button, Datepicker, Input } from "../../components";

import { IExpense } from "../../types";

import { useStore } from "../../hooks";

const initialExpense = { date: new Date(), category: "", amount: 0 };

export const AddCosts = () => {
  const { expenses } = useStore();

  const [expense, setExpense] = useState<IExpense>(initialExpense);

  const handleChange = (
    propertyName: string,
    value: Date | string | number
  ) => {
    setExpense((prevState) => {
      return { ...prevState, [propertyName]: value };
    });
  };

  const handleClick = (expense: IExpense) => {
    if (expense.category && expense.amount && expense.date) {
      expenses.addCost(expense);
      setExpense(initialExpense);
    }
  };

  return (
    <Wrapper>
      <Datepicker
        selected={expense.date}
        onChange={(date) => {
          handleChange("date", date);
        }}
      />
      <Input
        value={expense.category}
        placeholder={"Введите категорию расходов"}
        onChange={(e) => handleChange("category", e.target.value)}
      />
      <Input
        value={expense.amount ? String(expense.amount) : ""}
        placeholder={"Введите сумму расходов"}
        onChange={(e) => handleChange("amount", +e.target.value)}
      />
      <Button label={"Добавить"} onClick={() => handleClick(expense)} />
    </Wrapper>
  );
};
