import styled from "styled-components";
import { CheckColor } from "../constants/themeCheckerForBg";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  @media (max-width: 750px) {
    width: 100%;
    margin: 0;
  }
  justify-content: space-between;
  flex-direction: column;
  margin: 0 1em 0 1em;
  height: 200px;
`;
export const Thumbnail = styled.img`
  width: 100%;
`;
export const NewsInfo = styled.div`
  position: absolute;
  background: ${() =>
    CheckColor("rgba(22,36,56, 0.8)", "rgba(29, 191, 115, 0.8)")};
  backdrop-filter: blur(10px);

  text-align: start;
  top: 50%;
  width: 91%;
  margin-right: 1em;
  z-index: 1;
  bottom: 0;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Author = styled.h3`
  margin-top: 0;
  color: #fcb41c;
  margin: 0;
  margin-left: 0.3rem;
`;
export const Date = styled.p`
  color: ${() => CheckColor("#F0F4FC", "#F0F4FC")};
  font-size: 0.8rem;

  margin: 0;
  margin-left: 0.3rem;
`;
export const Title = styled.h1`
  font-size: 0.9rem;
  color: white;
  margin: 0;
  margin-left: 0.3rem;
`;

export const Headline = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${() => CheckColor("#1f3045", "#f0f4fc")};
`;
