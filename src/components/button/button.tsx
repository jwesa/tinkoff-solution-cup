import React from "react";
import { StyledButton } from "./button.styled";

interface Props {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};
