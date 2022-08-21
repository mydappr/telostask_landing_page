import React from "react";
import { SectionD, Header } from "../components";
import { useNavigate } from "react-router-dom";



function SSectionD() {
  const navigation = useNavigate()

  return (
    <SectionD>
      <SectionD.FirstFrame>
        <SectionD.Title>Partners</SectionD.Title>
        <SectionD.ImageFrame>
          <SectionD.Image
            onClick={() => (window.location.href = "https://telos.net")}
            target="_blank"
            rel="noopener"
            src={require("../icons/telos.png")}
          />
          <SectionD.Image
            onClick={() => (window.location.href = "https://mydappr.io")}
            target="_blank"
            rel="noopener"
            src={require("../icons/mydappr.png")}
          />
        </SectionD.ImageFrame>
      </SectionD.FirstFrame>
      <SectionD.SecondFrame>
        <SectionD.SecondFrameTitle>
          Find Freelance Services For Your Business Today
        </SectionD.SecondFrameTitle>
        <SectionD.SecondFrameBody>
          We've got you covered for all your Business needs.
        </SectionD.SecondFrameBody>
        <SectionD.ButtonHolder>
          <Header.ButtonLink
              onClick={() =>{
                navigation('404')
              }}
            // onClick={() => (window.location.href = "https://main.telostask.app")}
          >
            Get Started Today!
          </Header.ButtonLink>
        </SectionD.ButtonHolder>
      </SectionD.SecondFrame>
    </SectionD>
  );
}

export default SSectionD;
