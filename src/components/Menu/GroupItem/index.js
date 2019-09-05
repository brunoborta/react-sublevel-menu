import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import PropTypes from "prop-types";

import {
  GroupItem,
  SubItemTitle,
  DefaultTitle,
  DefaultItem,
  SubItem
} from "./styles";

export default function GroupItemWrapper({ data }) {
  const [visible, setVisible] = useState(false);

  function handleVisibility(event) {
    event.preventDefault();
    setVisible(!visible);
  }
  return (
    <GroupItem
      key={data.title}
      onClick={handleVisibility}
      visible={visible ? 1 : 0}
    >
      <DefaultItem visible={visible ? 1 : 0}>
        {data.icon()}
        <DefaultTitle>{data.title}</DefaultTitle>
        {visible ? (
          <FaChevronUp size={12} color="#FDD000" />
        ) : (
          <FaChevronDown size={12} color="#FDD000" />
        )}
      </DefaultItem>
      <ul visible={visible ? 1 : 0}>
        {data.subitems.map(item => (
          <a key={item.title} href={item.path}>
            <SubItem>
              <SubItemTitle>{item.title}</SubItemTitle>
            </SubItem>
          </a>
        ))}
      </ul>
    </GroupItem>
  );
}

GroupItemWrapper.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.func,
    subitems: PropTypes.arrayOf(PropTypes.shape)
  }).isRequired
};
