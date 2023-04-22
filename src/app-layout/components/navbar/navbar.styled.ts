import styled from "styled-components";

export const Wrapper = styled.div`
  width: 20vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 40px;
  background-color: #ffffff;
  border-right: 1px solid #d9d9d9;
  font-size: 18px;
  line-height: 20px;
  color: #363683;
`;

export const LinkWrapper = styled.div`
  padding: 12px 18px;

  a {
    text-decoration: none;
  }

  a:visited {
    color: #363683;
  }

  :hover {
    background-color: #f3f3f3;
  }
`;
