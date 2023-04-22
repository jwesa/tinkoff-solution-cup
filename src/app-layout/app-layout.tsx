import React from "react";

import { Navbar } from "./components/navbar";
import { Body } from "../components/body";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Body>{children}</Body>
    </>
  );
};
