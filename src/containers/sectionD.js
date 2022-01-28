import React from "react";
import { SectionD, Header } from "../components";

function SSectionD() {
    return ( 
        <SectionD>
        <SectionD.FirstFrame>
          <SectionD.Title>Partners</SectionD.Title>
          <SectionD.ImageFrame>
            <SectionD.Image to={"//www.telos.net"}  src={require("../icons/telos.png")} />
            <SectionD.Image to={"//mydappr.io/"} src={require("../icons/mydappr.png")} />
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
            <Header.ButtonLink  to={"//telostask.app"}>Get Started Today!</Header.ButtonLink>
          </SectionD.ButtonHolder>
        </SectionD.SecondFrame>
      </SectionD>
     );
}

export default SSectionD;