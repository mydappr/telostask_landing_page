import { Sectionc } from "../components";

import React from "react";
import SectionC from "../components/sectionC";
 

function SSectionc() {
  return (
    <SectionC.Bg>
      <Sectionc>
      <Sectionc.FirstFrame>
        <Sectionc.Left>
          <Sectionc.Paragraphs>
            <Sectionc.Dot></Sectionc.Dot> Are you in need of freelancer workers
            wit special skill sets?
          </Sectionc.Paragraphs>
          <Sectionc.Paragraphs>
            <Sectionc.Dot></Sectionc.Dot> Do you want to organize a social
            campaign?{" "}
          </Sectionc.Paragraphs>
          <Sectionc.Paragraphs>
            {" "}
            <Sectionc.Dot></Sectionc.Dot> Are you looking to outsource your
            project?
          </Sectionc.Paragraphs>
          <Sectionc.Paragraphs>
            <Sectionc.Dot></Sectionc.Dot> Do you need professionals to handle
            your taks?
          </Sectionc.Paragraphs>
          <Sectionc.Paragraphs className="lastPoint">
            Rigister on the Telos Task platform and earn as you complete
            specific tasks.
          </Sectionc.Paragraphs>
        </Sectionc.Left>

        <Sectionc.Video>
          <iframe
         
            src="https://www.youtube.com/embed/x81-iNilaZY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Sectionc.Video>
      </Sectionc.FirstFrame>
      <Sectionc.SecondFrame>
        <Sectionc.Title>Task Categories</Sectionc.Title>
        <Sectionc.SecondFrameBottom>
          <Sectionc.Card> 
            <Sectionc.CardTop>
              <Sectionc.TaskImg  src={require("../icons/micro.png")}/>
              <Sectionc.TypeTitle>Micro Task</Sectionc.TypeTitle>
            </Sectionc.CardTop>
            <Sectionc.CardBody>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </Sectionc.CardBody>
          </Sectionc.Card>
          <Sectionc.Card>
            <Sectionc.CardTop>
              <Sectionc.TaskImg  src={require("../icons/micro.png")} />
              <Sectionc.TypeTitle>Micro Task</Sectionc.TypeTitle>
            </Sectionc.CardTop>
            <Sectionc.CardBody>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </Sectionc.CardBody>
          </Sectionc.Card>
        </Sectionc.SecondFrameBottom>
      </Sectionc.SecondFrame>
    </Sectionc>
    </SectionC.Bg>
  );
}

export default SSectionc;
