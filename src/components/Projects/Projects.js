import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wildlife from "../../Assets/Projects/wildlife.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import seller from "../../Assets/Projects/seller.png";
import corono from "../../Assets/Projects/corono.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import fitness from "../../Assets/Projects/fitness.png";

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={corono}
              isBlog={false}
              title="Corona Tracker"
              description="Covid Tracker using particluar country, build with react.js, Material-UI. Have features which allows user to search for any country using COVID19 Api."
              ghLink="https://github.com/2710ankit/Corona_Tracker"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitness}
              isBlog={false}
              title="Pulsative"
              description="Fitness App where user can search any exercise using name, target muscle or equipment. Build with React.js, Material Ui and Rapid API"
              ghLink="https://github.com/2710ankit/fitness-app"
              demoLink="https://pulsative.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seller}
              isBlog={false}
              title="Seller Panel"
              description="Seller Panel for IndustryBuying.com where vendors can track their stocks and orders, and can do changes in their profiles or can request admin. Build with Angularjs, Angular Material"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://seller.industrybuying.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wildlife}
              isBlog={false}
              title="Plant AI"
              description="Basic React App to Demostrate the use of Components reusablity, navigation, routing "
              ghLink="https://github.com/2710ankit/wildlife"
              demoLink="https://wildlifee.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
