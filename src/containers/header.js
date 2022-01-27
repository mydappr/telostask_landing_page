import React, { useContext } from "react";
import { Header } from "../components";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "../lib/context";
function HHeader() {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={"//telostask.app"}
          src="./icons/logo.png"
          alts="telostask logo"
        />

        <Header.MiddleFrame>
          <Header.TextLinks to={""}>Browse Task</Header.TextLinks>
          <Header.TextLinks
            to={
              "//https://telostask.io/wp-content/uploads/2021/04/Telos-Task-Whitepaper-2.pdf"
            }
          >
            TaskPapper
          </Header.TextLinks>
          <Header.TextLinks to={""}>ITO</Header.TextLinks>
        </Header.MiddleFrame>

        <Header.RightFrame>
          <Header.TextLinks to={"//telostask.app/login"}>
            Login
          </Header.TextLinks>
          <Header.ButtonLink to={"//telostask.app/register"}>
            Sign Up
          </Header.ButtonLink>
          <Header.Themebtn onClick={themeToggler} src="./icons/day-icon.png" />
        </Header.RightFrame>
      </Header.Frame>
    </Header>
  );
}

export default HHeader;
