import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wildlife from "../../Assets/Projects/wildlife.jpg";
import seller from "../../Assets/Projects/seller.png";
import corono from "../../Assets/Projects/corono.jpeg";
import clothing from "../../Assets/Projects/clothing.png";
import fitness from "../../Assets/Projects/fitness.png";
import industrybuying from "../../Assets/Projects/industrybuying.png";

function Projects() {
  const projects = [


    {
      imgPath: industrybuying,
      title: "Industrybuying",
      description:
        "Main Website of IndustryBuying.com. Migrating from Angular 15 to Angular 17, and django to NEST.js",

      demoLink: "https://industrybuying.com/",
    },

    {
      imgPath: seller,
      title: "Seller Panel",
      description:
        "Seller Panel for IndustryBuying.com where vendors can track their stocks and orders. Migrated from Angular.js to Angular 16 and IONIC",

      demoLink: "https://seller.industrybuying.com/",
    },
    {
      imgPath: corono,
      title: "Corona Tracker",
      description:
        "Covid Tracker using particluar country, build with react.js, Material-UI. Have features which allows user to search for any country using COVID19 Api.",
      ghLink: "https://github.com/2710ankit/Corona_Tracker",
    },

    {
      imgPath: clothing,
      title: "Clothing",
      description:
        "Clothin App where user can authenticate using Google Auth, and can Update the cart. Demonstrate the use State Management is React. Build with React.js  and Firebase Authentication",
      ghLink: "https://github.com/2710ankit/clothing",
      demoLink: "https://clothin-hub.netlify.app/",
    },

    {
      imgPath: fitness,
      title: "Pulsative",
      description:
        "Fitness App where user can search any exercise using name, target muscle or equipment. Build with React.js, Material Ui and Rapid API",
      ghLink: "https://github.com/2710ankit/fitness-app",
      demoLink: "https://pulsative.netlify.app/",
    },

   
  ];
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((p) => {
            return (
              <Col key={p.title} md={4} className="project-card">
                <ProjectCard
                  imgPath={p.imgPath}
                  title={p.title}
                  description={p.description}
                  ghLink={p.ghLink}
                  demoLink={p.demoLink}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
