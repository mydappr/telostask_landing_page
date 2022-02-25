import React, { useContext, useState, useEffect } from "react";
import { Header } from "../components";
import { ThemeContext } from "../lib/context";
import Modal from "./Modal";

function HHeader() {
  const { theme, setTheme, modal, setModal } = useContext(ThemeContext);
  const [width, setWidth] = useState(0);

  // Change theme handler
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // Loading bar on scrooll
  const getLoadingWidth = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const currentwidth = scrolled;
    setWidth(currentwidth);
  };

  window.onscroll = () => getLoadingWidth();

  useEffect(() => {
    setTimeout(() => {
      window.document.querySelector("#win").addEventListener("click", () => {
        setModal(!modal);
      });
    }, 1000);
  }, []);
  return (
    <Header>
      <Header.Frame>
        <Header.LogoFrame>
          <Header.Logo
            onClick={() => (window.location.href = "https://telostask.app")}
            src={require("../icons/logo.png")}
            alts="telostask logo"
          />{" "}
          <div className="headertext">TelosTask</div>
        </Header.LogoFrame>

        <Header.MiddleFrame>
          <Header.TextLinks
            href="https://telostask.app/login"
            target="_blank"
            rel="noopener"
          >
            Browse Task
          </Header.TextLinks>
          <Header.TextLinks
            href="https://telostask.io/wp-content/uploads/2021/04/Telos-Task-Whitepaper-2.pdf"
            target="_blank"
            rel="noopener"
          >
            TaskPapper
          </Header.TextLinks>
          <Header.TextLinks href=" " target="_blank" rel="noopener">
            ITO
          </Header.TextLinks>
        </Header.MiddleFrame>

        <Header.RightFrame id="win">
          <Header.TextLinks
            
            onPointerEnter={() => setModal(!modal)}
          >
            Login
          </Header.TextLinks>

          <Header.ButtonLink
            dwidth={48}
            onClick={() => (window.location.href = "https://telostask.app")}
          >
            Sign Up
          </Header.ButtonLink>
          <Header.Themebtn
            onClick={themeToggler}
            src={require("../icons/day-icon.png")}
          />
        </Header.RightFrame>
      </Header.Frame>
      {modal && <Modal />}
      <Header.HeaderLoadingFrame>
        <Header.HeaderLoading width={width} />
      </Header.HeaderLoadingFrame>
    </Header>
  );
}

export default HHeader;
