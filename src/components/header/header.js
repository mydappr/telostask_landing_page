import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { CheckerButton, CheckColor } from "../constants/themeCheckerForBg";

export const Container = styled.div`
  background-color: ${() => CheckColor("#F2F4F9", "#162438")};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 
`;

export const Frame = styled.h1`
  margin: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1450px;
`;

export const Logo = styled.img`
  max-width: 100px;

  @media (min-width: 900px) {
    min-width: 150px;
  }
`;

export const MiddleFrame = styled.div`
  display: flex;
  width: 40%;
  max-width: 300px;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Textlink = styled(RouterLink)`
  font-size: 1rem;
  text-align: start;
  text-decoration: none;
  link-style: none;
  color: #6b8299;
`;

export const Themebtn = styled.img`
  width: 35px;
  height: 35px;
`;

export const RightFrame = styled.div`
  display: flex;
  width: 40%;
  max-width: 300px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    min-width: 200px;
  }
`;

export const ButtonLink = styled(RouterLink)`
  background: ${CheckerButton("#FFC600")};
  padding: 0.5em;

  border-radius: 0.7em;
  border-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  outline: ${CheckerButton("#DEE7F5")};
  text-decoration: none;
  color: white;
`;
