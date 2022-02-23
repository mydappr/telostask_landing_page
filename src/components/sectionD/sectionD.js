import styled from "styled-components";
import { CheckerHBg, CheckColor } from "../constants/themeCheckerForBg";

export const Container = styled.section`
  margin: 1em;
`;
export const FirstFrame = styled.div`
  margin-top: 4em;

  margin: 0 auto;
`;
export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${() => CheckColor("#1f3045", "#f0f4fc")};
`;

export const ImageFrame = styled.div`
  display: flex;
  justify-content: space-around;

  max-width: 400px;
  margin: auto;
`;

export const Image = styled.img`
  width: 20%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 1em;
  cursor: pointer;
`;

export const SecondFrame = styled.div`
  background: ${() => CheckerHBg("footerbox")} top left / cover no-repeat;
  background-color: ${() => CheckColor("#F2F4F9", "#162438")};

  margin: 0 auto;
  margin-top: 7em;
  max-width: 800px;
  height: 100%;
  padding: 0.5em;
  border-radius: 1em;
`;

export const SecondFrameTitle = styled.h2`
  margin-bottom: 0.2em;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${() => CheckColor("#1f3045", "#f0f4fc")};
`;

export const SecondFrameBody = styled.div`
  margin-bottom: 2em;
`;

export const ButtonHolder = styled.div`
  margin-bottom: 2em;
`;
