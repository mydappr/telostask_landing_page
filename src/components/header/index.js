import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Container,
  Frame,
  MiddleFrame,
  RightFrame,
  LoginBtn,
  Logo,
  Textlink,
  ButtonLink,
  Themebtn,
} from "./header";

export default function Header({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Header.Frame = function HeaderFrame({ children }) {
  return <Frame>{children}</Frame>;
};
Header.Logo = function HeaderLogo({ to, ...restprops }) {
  return (
    <RouterLink to={to}>
      <Logo {...restprops} />
    </RouterLink>
  );
};

Header.MiddleFrame = function HeaderMiddleFrame({ children }) {
  return <MiddleFrame>{children}</MiddleFrame>;
};

Header.RightFrame = function HeaderRightFrame({ children }) {
  return <RightFrame>{children}</RightFrame>;
};

Header.Themebtn = function HeaderThemebtn({ ...restprops }) {
  return <Themebtn {...restprops} />;
};

Header.TextLinks = function HeaderTextlinks({ children, to , ...restprops }) {
  return <Textlink {...restprops} to={to}>{children}</Textlink>;
};
 
Header.ButtonLink = function HeaderButton({ children, ...restprops }) {
  return <ButtonLink {...restprops}>{children}</ButtonLink>;
};
