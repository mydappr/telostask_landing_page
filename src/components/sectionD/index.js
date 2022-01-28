import React from "react";
import { Link as Routerlink } from "react-router-dom";
import {
  Container,
  FirstFrame,
  Title,
  ImageFrame,
  Image,
  SecondFrame,
  SecondFrameTitle,
  SecondFrameBody,
  ButtonHolder
} from "./sectionD";

export default function SectionD({ children }) {
  return <Container>{children}</Container>;
}

SectionD.FirstFrame = function SectionDFirstFrame({ children }) {
  return <FirstFrame>{children}</FirstFrame>;
};

SectionD.Title = function SectionDTitle({ children }) {
  return <Title>{children}</Title>;
};

SectionD.ImageFrame = function SectionDImageFrame({ children }) {
  return <ImageFrame>{children}</ImageFrame>;
};

SectionD.Image = function SectionDImage({ to, children, ...restprops }) {
  return <Routerlink to={to}><Image {...restprops} /></Routerlink>;
};

SectionD.SecondFrame = function SectionDSecondFrame({ children }) {
  return <SecondFrame>{children}</SecondFrame>;
};

SectionD.SecondFrameTitle = function SectionDSecondFrameTitle({ children }) {
  return <SecondFrameTitle>{children}</SecondFrameTitle>;
};

SectionD.SecondFrameBody = function SectionDSecondFrameBody({ children }) {
  return <SecondFrameBody>{children}</SecondFrameBody>;
};
SectionD.ButtonHolder = function SectionDButtonHolder({ children }) {
  return <ButtonHolder>{children}</ButtonHolder>;
};
