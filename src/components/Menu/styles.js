import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 100%;
  background: #313131;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${props => (props.opened ? "265px" : "50px")};
  transition: width 0.2s;

  nav {
    width: 100%;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const Item = styled.li`
  padding: ${props => (props.menuTitle ? "30px 15px 20px 15px" : "15px")};
  border-top: ${props => (props.menuTitle ? 0 : "1px solid #e5e5e5")};
  background: #313131;
  cursor: pointer;

  display: flex;
  align-items: center;

  img {
    height: 24px;
    width: 24px;
  }

  ${props =>
    props.closedMenu &&
    css`
      padding: 30px 0 0;
      align-self: center;
    `};
`;

export const GroupItem = styled.ul`
  padding: 15px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  align-items: center;

  svg:last-child {
    height: 30px;
  }
`;
export const Title = styled.h2`
  font-weight: bold;
  font-size: 22px;
  line-height: 21px;
  margin-left: 20px;
  color: white;
`;

export const ItemTitle = styled.span`
  margin-left: 23px;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.15px;
  color: white;
  flex-grow: 1;
`;
