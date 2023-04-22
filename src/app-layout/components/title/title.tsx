import React from "react";
import { useLocation } from "react-router-dom";

import { StyledTitle } from "./title.styled";
import { routes } from "../../../constants";

interface Props {
  value: string;
}

export const Title = () => {
  const { pathname } = useLocation();

  return (
    <StyledTitle>
      {routes.map((route) => {
        if (route.url === pathname) {
          return route.name;
        }
      })}
    </StyledTitle>
  );
};
