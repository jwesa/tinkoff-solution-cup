import React from "react";
import { StyledInput } from "./input.styled";

interface Props {
  // TODO временно
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, placeholder, onChange }: Props) => {
  return (
    <StyledInput value={value} placeholder={placeholder} onChange={onChange} />
  );
};
