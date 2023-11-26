import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";
import Illustration from "../images/illustration.png";
import ExperienceList from "../files/workExperience.json";

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
            {ExperienceList.experienceList.map((expData) => {
              return(
                <Container>
                  <YearContent startDate={expData.startDate} endDate={expData.endDate}/>
                  <BodyContent>
                    <Section title={expData.title}>
                      <Description
                        variant="subtitle"
                        text={expData.org}
                      />
                      {expData.highlights.map((highlight) => {
                        return(
                          <Description text={highlight} />
                        );
                      })}
                    </Section>
                  </BodyContent>
                </Container>
              );
            })}
          </Timeline>
        </div>
      </div>
    </div>
  );
};
