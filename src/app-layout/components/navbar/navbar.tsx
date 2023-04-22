import React from "react";
import { LinkWrapper, Wrapper } from "./navbar.styled";
import { NavLink } from "react-router-dom";

import { routes } from "../../../constants/routes";

export const Navbar = () => {
  return (
    <Wrapper>
      {routes.map((route) => (
        <LinkWrapper key={route.url}>
          <NavLink to={route.url}>{route.name}</NavLink>
        </LinkWrapper>
      ))}
    </Wrapper>
  );
};
