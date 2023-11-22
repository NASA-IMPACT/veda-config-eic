import React from "$veda-ui/react";
import { NavLink } from "$veda-ui/react-router-dom";
import styled from "$veda-ui/styled-components";
import { glsp, themeVal } from "$veda-ui/@devseed-ui/theme-provider";
import { CollecticonExpandTopRight } from "$veda-ui/@devseed-ui/collecticons";

const ExpandLinkCmp = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${glsp(0.5)};
  color: ${themeVal("color.link")};
  text-decoration: none;
  pointer-events: all;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export function ExpandLink(props) {
  const { children, ...rest } = props;

  return (
    <ExpandLinkCmp {...rest}>
      {children}
      <CollecticonExpandTopRight />
    </ExpandLinkCmp>
  );
}
