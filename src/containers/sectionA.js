import SectionA from "../components/sectionA";
import Header from "../components/header";

function SSectionA() {
  return (
    <SectionA>
      <SectionA.LeftFrame>
        <SectionA.Title>
          Earn tokens for completing micro / macro tasks
        </SectionA.Title>
        <SectionA.Body>"Do less, earn more"</SectionA.Body>
        <SectionA.Btnframe>
          <Header.ButtonLink to={"//telostask.app"}>
            Get started
          </Header.ButtonLink>
        </SectionA.Btnframe>
      </SectionA.LeftFrame>

      <SectionA.SectionAImg src="./icons/Hero image.png" />
    </SectionA>
  );
}

export default SSectionA;
