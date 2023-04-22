import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const StyledSpan = styled.span`
  margin-bottom: 15px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  font-size: 16px;
  line-height: 20px;
`;

export const ListItem = styled.div`
  span {
    color: #00004b;
  }

  :last-child {
    margin-top: 10px;
  }
`;
