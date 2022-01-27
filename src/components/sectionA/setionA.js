import styled from "styled-components";
import {CheckColor} from '../constants/themeCheckerForBg'

export const Frame = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const LeftFrame = styled.div`
  width: 100%;
  text-align: start;
  margin-top: 5em;
  margin-left:1em;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-center;
    width: 80%;
    margin: 2em auto;
  }
`;

export const SectionAImg = styled.img`
  width: 50%;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Btnframe = styled.div`
 
  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    margin-top: 2em;
    margin-bottom:1em;
    
  }
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  max-width: 500px;
  color:${() => CheckColor("#1F3045", "#F0F4FC")};
   
   

  @media (max-width: 900px) {
    margin: 0 auto;
    text-align: center;
     
    font-size: 1.5rem;
    max-width: 450px;
  }
`;

export const Body = styled.p`
font-weight: 500;

  @media (max-width: 900px) {
    text-align: center;
    margin-top: 0;
  }
`;
