import SectionA from "../components/sectionA";
import Header from "../components/header";
import CheckThemeForIcon from "../lib/checkThemeForIcon";
import lottie from "lottie-web";
import heroD from "../icons/heroD.json";
import heroL from "../icons/heroL.json";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../lib/context";


function SSectionA() {
  const { theme } = useContext(ThemeContext);

  // define sectionA animation
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.querySelector("#hero"),
      animationData: theme === "light" ? heroL : heroD,
    });
    return () => anim.destroy();
  }, [theme]);

  return (
    <SectionA>
      <SectionA.LeftFrame>
        <SectionA.Title>
          Earn tokens for completing either micro or macro tasks
        </SectionA.Title>
        <SectionA.Body>"Do less, earn more"</SectionA.Body>
        <SectionA.Btnframe>
          <Header.ButtonLink
            onClick={() => (window.location.href = "https://telostask.app")}
            mwidth={80}
            dwidth={30}
          >
            Get Started
          </Header.ButtonLink>
        </SectionA.Btnframe>
      </SectionA.LeftFrame>
      <SectionA.SectionAImg id="hero" />
    </SectionA>
  );
}

export default SSectionA;
