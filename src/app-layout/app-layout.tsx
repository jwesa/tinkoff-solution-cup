import React from "react";

import { Body, Navbar, Title } from "./components";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Body>
        <>
          <Title />
          {children}
        </>
      </Body>
    </>
  );
};
