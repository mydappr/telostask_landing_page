import SectionB from "../components/sectionB";
import React, { useContext, useEffect } from "react";
import Lottie from "lottie-web";
import image1L from "../icons/image1L.json";
import image1D from "../icons/image1D.json";
import image2L from "../icons/image2L.json";
import image2D from "../icons/image2D.json";
import image3L from "../icons/image3L.json";
import image3D from "../icons/image3D.json";
import { ThemeContext } from "../lib/context";

function SSectionB() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const anim1 = Lottie.loadAnimation({
      container: document.querySelector("#image1"),
      animationData: theme === "light" ? image1L : image1D,
    });

    const anim2 = Lottie.loadAnimation({
      container: document.querySelector("#image2"),
      animationData: theme === "light" ? image2L : image2D,
    });
    const anim3 = Lottie.loadAnimation({
      container: document.querySelector("#image3"),
      animationData: theme === "light" ? image3L : image3D,
    });

    return () => {
      anim1.destroy(), anim2.destroy(), anim3.destroy();
    };
  }, [theme]);

  return (
    <SectionB>
      <SectionB.Services>
        <SectionB.ServiceImg id="image1" />
        <SectionB.Title>Professional Freelancer</SectionB.Title>
        <SectionB.Body>
          Your skills are required by serveral companies and organazations who
          will reward you with Task tokens.
        </SectionB.Body>
      </SectionB.Services>

      <SectionB.Services>
        <SectionB.ServiceImg id="image2" />
        <SectionB.Title>Payment Protection</SectionB.Title>
        <SectionB.Body>
          Earn cryptocurrency for completing tasks and receive rewards to your
          task wallet immediately your task has been confirmed as being valid.
        </SectionB.Body>
      </SectionB.Services>

      <SectionB.Services>
        <SectionB.ServiceImg id="image3" />
        <SectionB.Title>Task Listing Simplified</SectionB.Title>
        <SectionB.Body>
          Easy task listing with an inntuitive UI for both freelancers and
          clients who outsource jobs for completion.
        </SectionB.Body>
      </SectionB.Services>
    </SectionB>
  );
}

export default SSectionB;
