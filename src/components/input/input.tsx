import React from "react";
import { StyledInput } from "./input.styled";

interface Props {
  // TODO временно
  // value: string;
  placeholder: string;
  onChange: any;
}

export const Input = ({ placeholder, onChange }: Props) => {
  return <StyledInput placeholder={placeholder} onChange={onChange} />;
};
