import React from "react";
import {
  Container,
  FirstFrame,
  Left,
  Paragraphs,
  Video,
  SecondFrame,
  Title,
  SecondFrameBottom,
  Card,
  CardTop,
  TaskImg,
  TypeTitle,
  CardBody,
  Dot,
} from "./sectionC";

export default function SectionC({ children, ...restprops }) {
  return <Container>{children}</Container>;
}

SectionC.FirstFrame = function SectionCFirstFrame({ children }) {
  return <FirstFrame>{children}</FirstFrame>;
};
SectionC.Dot = function SectionCDot({ children }) {
  return <Dot>{children}</Dot>;
};

SectionC.Left = function SectionCLeft({ children }) {
  return <Left>{children}</Left>;
};



SectionC.Paragraphs = function SectionCParagraphs({ children, ...restprops }) {
  return <Paragraphs {...restprops}>{children}</Paragraphs>;
};

SectionC.Video = function SectionCVideo({ children }) {
  return <Video>{children}</Video>;
};

SectionC.SecondFrame = function SectionCSecondFrame({ children }) {
  return <SecondFrame>{children}</SecondFrame>;
};

SectionC.Title = function SectionCTitle({ children }) {
  return <Title>{children}</Title>;
};

SectionC.Left = function SectionCLeft({ children }) {
  return <Left>{children}</Left>;
};

SectionC.SecondFrameBottom = function SectionCSecondFrameBottom({ children }) {
  return <SecondFrameBottom>{children}</SecondFrameBottom>;
};

SectionC.Card = function SectionCCard({ children }) {
  return <Card>{children}</Card>;
};

SectionC.CardTop = function SectionCCardTop({ children }) {
  return <CardTop>{children}</CardTop>;
};

SectionC.TaskImg = function SectionCTaskImg({ ...restprops }) {
  return <TaskImg {...restprops} />;
};

SectionC.TypeTitle = function SectionCTypeTitle({ children }) {
  return <TypeTitle>{children}</TypeTitle>;
};

SectionC.CardBody = function SectionCCardBody({ children }) {
  return <CardBody>{children}</CardBody>;
};
