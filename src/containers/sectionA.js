import SectionA from "../components/sectionA";
import Header from "../components/header";
import CheckThemeForIcon from "../lib/checkThemeForIcon";

function SSectionA() {
  return (
    <SectionA>
      <SectionA.LeftFrame>
        <SectionA.Title>
          Earn tokens for completing micro/macro tasks
        </SectionA.Title>
        <SectionA.Body>"Do less, earn more"</SectionA.Body>
        <SectionA.Btnframe>
          <Header.ButtonLink
            onClick={() => (window.location.href = "https://telostask.app")}
            mwidth={80}
            dwidth={20}
          >
            Get Started
          </Header.ButtonLink>
        </SectionA.Btnframe>
      </SectionA.LeftFrame>

      <SectionA.SectionAImg
        src={CheckThemeForIcon("heroimageL", "heroimageD")}
      />
    </SectionA>
  );
}

export default SSectionA;
