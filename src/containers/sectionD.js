import React from "react";
import { SectionD, Header } from "../components";

function SSectionD() {
    return ( 
        <SectionD>
        <SectionD.FirstFrame>
          <SectionD.Title>Partners</SectionD.Title>
          <SectionD.ImageFrame>
            <SectionD.Image src="./icons/Telos logo.png" />
            <SectionD.Image src="./icons/My dappr logo.png" />
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