import React from "react";
import { Frame, LeftFrame, Title, Body,  SectionAImg, Btnframe } from "./setionA";

export default function SectionA({  children, ...restprops }) {
  return <Frame {...restprops}>{children}</Frame>;
}

SectionA.Btnframe  = function sectionABtnframe({children}){
  return <Btnframe>{children}</Btnframe>
}

SectionA.LeftFrame = function SectionALeftFrame({ children }) {
  return <LeftFrame>{children}</LeftFrame>;
};

SectionA.Title = function SectionATitle({ children }) {
  return <Title>{children}</Title>;
};
SectionA.Body = function SectionABody({ children }) {
  return <Body>{children}</Body>;
};

SectionA.SectionAImg = function  SSectionAImg({...restprops }) {
  return <SectionAImg {...restprops} />;
};
