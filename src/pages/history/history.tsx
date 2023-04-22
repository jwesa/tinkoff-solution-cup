import React from "react";
import { observer } from "mobx-react-lite";

import { ListItem, ListWrapper, StyledSpan, Wrapper } from "./history.styled";

import { Chart } from "../../components";

import { useStore } from "../../hooks";

export const History = observer(() => {
  const { expenses } = useStore();

  return (
    <Wrapper>
      <Chart list={expenses.list} />
      <ListWrapper>
        <StyledSpan>Расходы по категориям</StyledSpan>
        {[...expenses.list]
          .sort((a, b) => b.amount - a.amount)
          .map((expense) => {
            return (
              <ListItem>
                {expense.category} - <span>{expense.amount}</span>
              </ListItem>
            );
          })}
        <ListItem>Всего: {expenses.total}</ListItem>
      </ListWrapper>
    </Wrapper>
  );
});
