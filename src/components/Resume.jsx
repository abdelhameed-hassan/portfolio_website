import styled from "styled-components";
import Title from "../components/Title";
import SmallTitle from "../components/SmallTitle";
import ResumeItem from "../components/ResumeItem";
import { InnerLayout } from "../styles/Layouts";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";

const Resume = () => {
  return (
    <ResumeStyled>
      <Title title="Resume" span="Resume" />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle
            icon={<BusinessCenterIcon />}
            title={"Working Experience"}
          />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2021 - Present"}
            title="WeXcute"
            subtitle="Front-end Engineer"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ullam deleniti consequuntur sit eius alias asperiores eveniet corporis, praesentium quod!, amet consectetur adipisicing elit."
          />

          <div className="u-margin-bottom">
            <ResumeItem
              year={"2020 - 2021"}
              title="Baddel Inc"
              subtitle="Junior Software Engineer"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ullam deleniti consequuntur sit eius alias asperiores eveniet corporis, praesentium quod!, amet consectetur adipisicing elit."
            />
          </div>
        </div>
        <div className="small-title">
          <SmallTitle icon={<SchoolIcon />} title={"Education"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2013 - 2018"}
            title="Higher Technological Institute"
            subtitle="Mechatronics Engineer"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ullam deleniti consequuntur sit eius alias asperiores eveniet corporis, praesentium quod!, amet consectetur adipisicing elit."
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
};

const ResumeStyled = styled.div`
  .small-title {
    padding-bottom: 3rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
    .u-margin-bottom {
      margin-bottom: 4rem;
    }
  }
`;
export default Resume;
