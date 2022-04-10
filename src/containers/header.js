import React, { useContext, useState, useEffect } from "react";
import { Header } from "../components";
import { ThemeContext } from "../lib/context";
import Modal from "./Modal";
import telostaskwhitepaper from '../telostaskwhitepaper.pdf'

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

  //  adding click listener to login button and fliping the modal value
  const el = document.querySelector("#login");
  el &&
    el.addEventListener("click", () => {
      setModal(!modal);
    });

  return (
    <Header>
      <Header.Frame>
        <Header.LogoFrame>
          <Header.Logo
            onClick={() => (window.location.href = "https://telostask.app")}
            src={require("../icons/logo.png")}
            alts="telostask logo"
          />{" "}
          <div className="headertext">TelosTask </div>
        </Header.LogoFrame>

        <Header.MiddleFrame>
          <Header.TextLinks
            href="https://main.telostask.app/login"
            target="_blank"
            rel="noopener"
            className='commingSoonP'
          >
            Browse Task
            {/* <span className="commingSoon">Coming soon!</span> */}
          </Header.TextLinks>
          <Header.TextLinks
            href={telostaskwhitepaper}
            target="_blank"
            rel="noopener"
          >
            TaskPaper
          </Header.TextLinks>
          <Header.TextLinks href="https://docs.google.com/presentation/d/1RzQHW-9KR8mDFRNonnuSmxK2y37f0i-12PDA61uvo_4/edit#slide=id.p1" target="_blank" rel="noopener">
            PitchDeck
          </Header.TextLinks>
          <Header.TextLinks href="https://telostask.io" target="_blank" rel="noopener">
            Info
          </Header.TextLinks>
        </Header.MiddleFrame>

        <Header.RightFrame id="login">
          <Header.TextLinks onPointerEnter={() => setModal(!modal)} onClick={() => setModal(!modal)}>
            Login
          </Header.TextLinks>

          <Header.ButtonLink
            dwidth={48}
            onClick={() => (window.location.href = "https://main.telostask.app/register")}
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
