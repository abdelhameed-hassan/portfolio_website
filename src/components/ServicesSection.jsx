import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import ServiceCard from "../components/ServiceCard";
import design from "../imgs/design.svg";
import intelligence from "../imgs/intelligence.svg";
import gamedev from "../imgs/game-dev.svg";

const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"Services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Design"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, beatae perferendis! Incidunt vitae laboriosam itaque."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"Artificial Intelligence"}
              paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, beatae perferendis! Incidunt vitae laboriosam itaque."
              }
            />
          </div>

          <ServiceCard
            image={gamedev}
            title={"Game Development"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, beatae perferendis! Incidunt vitae laboriosam itaque."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.div`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
