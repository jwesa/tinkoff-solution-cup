import React from "react";
import { Wrapper } from "./body.styled";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const Body = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
