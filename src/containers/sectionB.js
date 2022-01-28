import SectionB from "../components/sectionB";
import React from "react";

function SSectionB() {
  return (
    <SectionB>
      <SectionB.Services>
        <SectionB.ServiceImg  src={require("../icons/image1.png")}/>
        <SectionB.Title>Professional Freelancer</SectionB.Title>
        <SectionB.Body>
          Your skills are required by serveral companies and organazations who
          will reward you with Task tokens.
        </SectionB.Body>
      </SectionB.Services>

      <SectionB.Services>
        <SectionB.ServiceImg  src={require("../icons/image2.png")} />
        <SectionB.Title>Payment Protection</SectionB.Title>
        <SectionB.Body>
          Earn cryptocurrency for completing tasks and receive rewards to your
          task wallet immediately your task has been confirmed as being valid.
        </SectionB.Body>
      </SectionB.Services>

      <SectionB.Services>
        <SectionB.ServiceImg  src={require("../icons/image3.png")} />
        <SectionB.Title>Task Listing Simplified</SectionB.Title>
        <SectionB.Body>
          Easy task listing with an inntuitive UI for bith freelancers and
          clients who outsource jobs for completion.
        </SectionB.Body>
      </SectionB.Services>

      
    </SectionB>
  );
}

export default SSectionB;
