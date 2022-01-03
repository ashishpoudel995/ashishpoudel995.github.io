import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";
import Illustration from "../images/illustration.png";

export const MyExperience = () => {
  const customTheme = {
    yearColor: "#ffffff",
    lineColor: "#ffffff",
    dotColor: "#ffffff",
    borderDotColor: "#ffffff",
    titleColor: "#ffffff",
    subtitleColor: "#ffffff",
    textColor: "#ffffff",
  };

  return (
    <div className="experience">
      <div className="heading">
        <h3>My Experience:</h3>
      </div>
      <div className="timeline">
        <div className="timeline-illustration">
          <img src={Illustration} />
        </div>
        <div className="timeline-chart">
          <Timeline theme={customTheme} dateFormat="ll">
            <Container>
              <YearContent startDate="2020/11/30" endDate="2021/01/30" />
              <BodyContent>
                <Section title="Web Application Developer Intern">
                  <Description variant="subtitle" text="Andy Infosec" />
                  <Description text="- Built a website for demonstration of OWASP Top 10 Vulnerabilities." />
                  <Description text="- Configured the backend of the website so that it becomes vulnerable to OWASP Top 10 modules." />
                </Section>
              </BodyContent>
            </Container>
            <Container>
              <YearContent startDate="2013/07/05" endDate="2014/07/15" />
              <BodyContent>
                <Section title="Web Content Writer">
                  <Description
                    variant="subtitle"
                    text="Tourist Park Tours and Travels Pvt. Ltd."
                  />
                  <Description text="-Wrote about various touristic destinations of Nepal." />
                </Section>
              </BodyContent>
            </Container>
          </Timeline>
        </div>
      </div>
    </div>
  );
};
