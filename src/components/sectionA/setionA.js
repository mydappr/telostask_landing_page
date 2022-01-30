import styled from "styled-components";
import { CheckColor } from "../constants/themeCheckerForBg";

export const Frame = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 2.5em;

  @media (max-width: 800px) {
    margin-bottom: 4em;
  }
`;

export const LeftFrame = styled.div`
  width: 100%;
  text-align: start;
  margin-top: 2em;
  margin-left: 3em;

  @media (max-width: 800px) {
    
    margin: 3em auto;
    margin-bottom: 0;
  }
`;

export const SectionAImg = styled.img`
  width: 40%;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const Btnframe = styled.div`
  margin-bottom: 2em;
  @media (max-width: 800px) {
    text-align: center;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 2em;
    align-self: center;
  }
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  max-width: 500px;
  color: ${() => CheckColor("#1F3045", "#F0F4FC")};

  @media (max-width: 800px) {
    margin: 0 auto;
    margin-top: 0.8em;

    max-width: 450px;
  }

  @media (max-width: 550px) {
    font-size: 1.5rem;
    text-align: center;
    max-width: 350px;
  }
`;

export const Body = styled.p`
  font-weight: 500;

  @media (max-width: 800px) {
    text-align: center;
    font-size: 1.1rem;
    margin-top: 0;
  }
`;
