import React from "react";
import { Frame, Services, ServiceImg, Title, Body, Bg } from "./sectionB";

export default function SectionB({ children }) {
  return <Frame>{children}</Frame>;
}

SectionB.Bg = function SectionBBg({ children, ...restprops }) {
  return <Bg {...restprops}>{children}</Bg>;
};

SectionB.Services = function SectionBServices({ children }) {
  return <Services>{children}</Services>;
};

SectionB.ServiceImg = function SectionBServiceImg({ ...restprops }) {
  return <ServiceImg {...restprops} />;
};
SectionB.Title = function SectionBTitle({ children }) {
  return <Title>{children}</Title>;
};
SectionB.Body = function SectionBBody({ children }) {
  return <Body>{children}</Body>;
};
