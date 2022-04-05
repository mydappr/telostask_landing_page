import { CheckerHBg, CheckColor } from "../constants/themeCheckerForBg";
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  margin-bottom: 3em;
`;
export const Bg = styled.div`
  background: ${() => CheckerHBg("Sbbg")} top left/cover no-repeat;

  max-width: 1500px;
  margin: 0 auto;
`;

export const FirstFrame = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5em 0;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  margin: 1em 2em;
  margin-right: 1em;
  align-self: center;
`;

export const Dot = styled.span`
  height: 15px;
  width: 15px;
  background-color: ${() => CheckColor("#fcb41c", "#fcb41c")};
  border-radius: 50%;
  display: inline-block;
`;

export const Paragraphs = styled.p`
  text-align: start;
  margin-bottom: 2em;
`;

export const Video = styled.div`
  height: 300px;

  @media (min-width: 900px) {
    margin: 0 auto;
    margin-right: 2em;
    border: 8px solid #1dbf73;
  }
`;

export const SecondFrame = styled.div``;

export const Title = styled.h2`
  color: ${() => CheckColor("#1f3045", "#f0f4fc")};
`;

export const SecondFrameBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
 
 

export const Card = styled.div`
  background-color: ${() => CheckColor("#F2F4F9", "#162438")};
  margin: 1em auto;
  width: 40%; 
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  border-radius: 1em;
  @media (max-width: 900px) {
    width:100%;
  }
  transition: 1s    ease;
  &:hover {
    transform: scale(1.1);
    
  }
 
`;

export const CardTop = styled.div`
  display: flex;
`;

export const TaskImg = styled.img`
  margin: 1em;
  width: 50%;
`;

export const TypeTitle = styled.h2`
  align-self: center;
  text-align: start;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${() => CheckColor("#1f3045", "#f0f4fc")};
`;

export const CardBody = styled.p`
  text-align: start;
  margin: 1em;
  line-height: 1.8;
  font-size: 1rem;

  letter-spacing: 0.06em;

  @media (max-width: 750px) {
    text-align: none;
  }
`;
