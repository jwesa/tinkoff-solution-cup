import React from "react";
import { LinkWrapper, Wrapper } from "./navbar.styled";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/add_costs", name: "Добавить расходы" },
  { url: "/history", name: "История расходов" },
];

export const Navbar = () => {
  return (
    <Wrapper>
      {links.map((link) => (
        <LinkWrapper key={link.url}>
          <NavLink to={link.url}>{link.name}</NavLink>
        </LinkWrapper>
      ))}
    </Wrapper>
  );
};
