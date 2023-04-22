import React from "react";

import { Wrapper } from "./datepicker.styled";

import DatePicker from "react-datepicker";

interface Props {
  selected: Date | null | undefined;
  onChange: (date: Date) => void;
}

export const Datepicker = ({ selected, onChange }: Props) => {
  return (
    <Wrapper>
      <DatePicker selected={selected} onChange={onChange} />
    </Wrapper>
  );
};
