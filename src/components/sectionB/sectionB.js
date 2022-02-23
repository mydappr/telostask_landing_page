import styled from "styled-components";
import { CheckColor } from "../constants/themeCheckerForBg";

export const Frame = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: ${() => CheckColor("#F2F4F9", "#162438")};
  max-width: 1150px;
  flex-wrap: wrap;
  position: relative;

  margin: 0 auto;
  top: -17px;
  align-items: center;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100%;

  height: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const Bg = styled.img``;

export const Services = styled.div`
  @media (min-width: 600px) {
    max-width: 48%;
  }
`;

export const ServiceImg = styled.img``;

export const Title = styled.h2`
  font-weight: 600;
  color: ${() => CheckColor("#1f3045", "#f0f4fc")};
`;

export const Body = styled.p`
  line-height: 1.8;
  font-size: 1rem;
  margin: 1em;
  letter-spacing: 0.05em;
  max-width: 350px;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
