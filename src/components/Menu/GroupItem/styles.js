import styled from "styled-components";

import { ItemTitle, Item } from "../styles";

export const GroupItem = styled.ul`
  cursor: pointer;

  ul {
    display: ${props => (props.visible ? "initial" : "none")};
  }
`;

export const DefaultTitle = styled(ItemTitle)``;
export const SubItemTitle = styled(ItemTitle)`
  margin-left: 44px;
`;
export const SubItem = styled(Item)``;
export const DefaultItem = styled(Item)`
  background: ${props => (props.visible ? "#727272" : "#313131")};
`;
