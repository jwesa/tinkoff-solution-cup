import React from "react";

import { Navbar, Body } from "./components";

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
