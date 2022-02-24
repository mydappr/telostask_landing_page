import styled from "styled-components";
import { CheckColor } from "../constants/themeCheckerForBg";

export const Frame = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 2.5em;
  max-width: 1500px;

  @media (max-width: 800px) {
    margin-bottom: 4em;
  }
`;

export const LeftFrame = styled.div`
  text-align: start;
  align-self: center;

  margin: 1em 2em;
  @media (max-width: 800px) {
    width: 100%;
    margin: 4em 1em;
    text-align: center;
  }
`;

export const SectionAImg = styled.div`
  height: 30%;
  width: 40%;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const Btnframe = styled.div`
margin-bottom: 2em;
 
  
@media (max-width: 800px) {
  margin: 0 auto;
  max-width: 50%;
}
@media (max-width: 600px) {
  max-width: 100%;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2em;
  margin-left: 0;
  align-self: center;
}
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  max-width: 500px;
  color: ${() => CheckColor("#1F3045", "#F0F4FC")};
  margin-bottom: 0;
  @media (max-width: 800px) {
    margin: 0 auto;
    margin-top: 0.8em;
    text-align: center;

    max-width: 500px;
  }

  @media (max-width: 550px) {
    font-size: 1.5rem;
    text-align: center;
    max-width: 350px;
  }
`;

export const Body = styled.p`
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 2em;

  @media (max-width: 600px) {
    text-align: center;
    font-size: 1.1rem;
  }
`;
