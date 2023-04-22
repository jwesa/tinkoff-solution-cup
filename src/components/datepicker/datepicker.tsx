import React from "react";
import DatePicker from "react-datepicker";

interface Props {
  selected: Date | null | undefined;
  onChange: (date: Date) => void;
}

export const Datepicker = ({ selected, onChange }: Props) => {
  return <DatePicker selected={selected} onChange={onChange} />;
};
