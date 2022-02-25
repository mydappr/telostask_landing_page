import { Sectionc } from "../components";

import React from "react";
import SectionC from "../components/sectionC";
import CheckThemeForIcon from "../lib/checkThemeForIcon";

function SSectionc() {
  return (
    <SectionC.Bg>
      <Sectionc>
        <Sectionc.FirstFrame>
          <Sectionc.Left>
            <Sectionc.Paragraphs>
              <Sectionc.Dot></Sectionc.Dot> Are you in need of freelance workers
              with special skill sets?
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
              Rigister on the TelosTask platform and earn as you complete
              specific tasks.
            </Sectionc.Paragraphs>
          </Sectionc.Left>

          <Sectionc.Video>
            {/* Iframe for youtube vidoe */}

            <iframe
              src="https://www.youtube.com/embed/bE-S8wzSqrg"
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
                <Sectionc.TaskImg src={require("../icons/micro.png")} />
                <Sectionc.TypeTitle>Micro Task</Sectionc.TypeTitle>
              </Sectionc.CardTop>
              <Sectionc.CardBody>
                This type of task ranges from social media engagements, simple
                assignments, or Google searches and does not require any special
                talents or an expert to participate but yet, users receives
                incentives after completing the said work. It is basically for
                non professionals who are called micro freelancers.
              </Sectionc.CardBody>
            </Sectionc.Card>
            <Sectionc.Card>
              <Sectionc.CardTop>
                <Sectionc.TaskImg src={require("../icons/macro.png")} />
                <Sectionc.TypeTitle>Macro Task</Sectionc.TypeTitle>
              </Sectionc.CardTop>
              <Sectionc.CardBody>
                This type of task deals with longer-term content creation,
                development, graphic design, video production, and other
                advanced gigs. This requires knowledge, talent and experience in
                order to partake and immediately receive incentives once clients
                (Task Givers) marks a project successful.
              </Sectionc.CardBody>
            </Sectionc.Card>
            <Sectionc.Card>
              <Sectionc.CardTop>
                <Sectionc.TaskImg src={require("../icons/taskclap.png")} />
                <Sectionc.TypeTitle>Thunderclap "Taskclap"</Sectionc.TypeTitle>
              </Sectionc.CardTop>
              <Sectionc.CardBody>
                This feature allows you use the crowd force of TelosTask users
                who might be interested on your task listing to post all at once
                on your preferred social platform.
              </Sectionc.CardBody>
            </Sectionc.Card>
            <Sectionc.Card>
              <Sectionc.CardTop>
                <Sectionc.TaskImg src={require("../icons/taskdrop.png")} />
                <Sectionc.TypeTitle>Taskdrop</Sectionc.TypeTitle>
              </Sectionc.CardTop>
              <Sectionc.CardBody>
                A TelosTask place for free tokens, Taskdrop is the official home
                of Airdrops; participate on projects minor tasks and submit your
                preferred wallet to get their token drops.
              </Sectionc.CardBody>
            </Sectionc.Card>
          </Sectionc.SecondFrameBottom>
        </Sectionc.SecondFrame>
      </Sectionc>
    </SectionC.Bg>
  );
}

export default SSectionc;
