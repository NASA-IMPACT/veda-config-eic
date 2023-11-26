import { themeVal, glsp } from "$veda-ui/@devseed-ui/theme-provider";
import styled, { css } from "$veda-ui/styled-components";
import { VarHeading } from "$veda-ui-scripts/styles/variable-components";
import { NavLink } from "$veda-ui/react-router-dom";

export const hoverStyle = css`
  &:hover {
    opacity: 0.67;
  }
`;

export const focusStyle = css`
  // Very subtle outline for mouse focus
  &:focus:not(:focus-visible) { 
    outline: none 
    box-shadow: ${themeVal("boxShadow.elevationA")}
  }
  // More visible outline for keyboard focus
  &:focus,
  &:focus-visible {
    outline: 5px auto ${themeVal("color.primary")};
  }
`;

export const StyledVarHeading = styled(VarHeading)`
  font-weight: ${themeVal("type.base.medium")};
  letter-spacing: -0.03rem;
`;

export const decorativeHeader = css`
  column-span: all;
  max-width: 52rem;
  display: flex;
  flex-direction: column;
  gap: calc(${glsp()} - ${glsp(0.25)});
  &::before {
    content: "";
    width: ${glsp(2)};
    height: ${glsp(0.25)};
    border-radius: ${themeVal("shape.rounded")};
    background: ${themeVal("color.primary")};
  }
`;

export const accessibilityLinks = styled.a`
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 3px solid ${themeVal("color.primary")};
  }

  &:active {
    outline: 3px solid black;
  }
`;

export const accessibilityMenuItems = styled(NavLink)`\
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:focus {
    outline: 3px solid ${themeVal("color.primary")};
  }

  :active {
    outline: 3px solid black;
  }
`;

