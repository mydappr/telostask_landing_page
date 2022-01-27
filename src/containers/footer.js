import React from "react";
import { Footer } from "../components";

function FFooter() {
  return (
    <Footer>
      <Footer.FirstFrame>
        <Footer.Left>
          <Footer.Logo src="./icons/logo.png" />
          <Footer.Body>
            The Telostask platoform is a platoform that rewards
            users/freelancers for completing micro or macro tasks or to clients
            looking to outsource micro or macro tasks.
          </Footer.Body>
        </Footer.Left>
        <Footer.Right>
          <Footer.QuickSection>
            <Footer.SocialsFrame>
              <Footer.SectionTitle>My Account</Footer.SectionTitle>
              <Footer.Links to="//telostask.app/login">Login</Footer.Links>
              <Footer.Links to="//telostask.app/register">
                Register
              </Footer.Links>
            </Footer.SocialsFrame>

            <Footer.SocialsFrame>
              <Footer.SectionTitle>Helpful Links</Footer.SectionTitle>
              <Footer.Links to="//telostask.medium.com/">
                Blog
              </Footer.Links>
              <Footer.Links to="//telostask.app/faq">Faq</Footer.Links>
              <Footer.Links to="//t.me/Telostask">Contact</Footer.Links>
            </Footer.SocialsFrame>

            <Footer.SocialsFrame>
              <Footer.SectionTitle>Information</Footer.SectionTitle>
              <Footer.Links to="//telostask.io/form/">
                Buy Tasks
              </Footer.Links>
              <Footer.Links to="//telostask.io/wp-content/uploads/2021/04/Telos-Task-Whitepaper-2.pdf">
                Tasks Paper
              </Footer.Links>
            </Footer.SocialsFrame>
          </Footer.QuickSection>
        </Footer.Right>
      </Footer.FirstFrame>
      <Footer.SecondFrame>
        <Footer.SocialImageFrame>
          <Footer.SocialsImg  to={"//https://twitter.com/telostask"}  src="./icons/twitter icon.png" />
          <Footer.SocialsImg  to={"//github.com"} src="./icons/github icon.png" />
          <Footer.SocialsImg  to={"//http://telostask.medium.com/"} src="./icons/medium icon.png" />
          <Footer.SocialsImg to={"//http://t.me/Telostask"}  src="./icons/telegram icon.png" />
        </Footer.SocialImageFrame>
        <Footer.Copyright>
          Copyright © 2020-2021 TelosTask. All Rights Reserved.
        </Footer.Copyright>
      </Footer.SecondFrame>
    </Footer>
  );
}

export default FFooter;
