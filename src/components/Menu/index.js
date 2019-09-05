import React, { useState } from "react";
import {
  FaBars,
  FaCaretRight,
  FaRegCopy,
  FaDollarSign,
  FaFileAlt
} from "react-icons/fa";

import GroupItem from "./GroupItem";

import { Container, List, Item, Title, ItemTitle } from "./styles";

export default function Menu() {
  const [opened, setOpened] = useState(false);
  const [menuItems] = useState([
    {
      title: "Supply",
      icon: () => <FaBars size={20} color="white" />,
      path: "/"
    },
    {
      title: "Catalog",
      icon: () => <FaRegCopy size={20} color="white" />,
      path: "/"
    },
    {
      title: "Werehouse",
      icon: () => <FaDollarSign size={20} color="white" />,
      path: null,
      subitems: [
        { title: "Sub Item 1-1", path: "/" },
        { title: "Sub Item 1-2", path: "/" },
        { title: "Sub Item 1-3", path: "/" }
      ]
    },
    {
      title: "Contracts",
      icon: () => <FaFileAlt size={20} color="white" />,
      path: null,
      subitems: [
        { title: "Sub Item 2-1", path: "/" },
        { title: "Sub Item 2-2", path: "/" }
      ]
    }
  ]);

  return (
    <Container opened={opened}>
      <nav>
        <List>
          {!opened ? (
            <Item
              key="menuTitle"
              closedMenu
              menuTitle
              onClick={() => setOpened(!opened)}
            >
              <FaBars size={24} color="#FDD000" />
            </Item>
          ) : (
            <>
              <Item
                key="menuTitle"
                menuTitle
                onClick={() => setOpened(!opened)}
              >
                <FaCaretRight size={24} color="#FDD000" />
                <Title>Menu</Title>
              </Item>
              {menuItems.map(item => {
                return item.subitems && item.subitems.length > 0 ? (
                  <GroupItem key={item.title} data={item} />
                ) : (
                  <a key={item.title} href={item.path}>
                    <Item>
                      {item.icon()}
                      <ItemTitle>{item.title}</ItemTitle>
                    </Item>
                  </a>
                );
              })}
            </>
          )}
        </List>
      </nav>
    </Container>
  );
}
