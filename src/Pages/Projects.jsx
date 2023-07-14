import { Container, Card, Row, Col } from "react-bootstrap";
import "./Projects.css";
const style = {
  color: "#ffffff",
};
const Projects = () => {
  return (
    <div id="projects-section">
      <Container>
        <br />
        <Card className="proj-card-container mt-5 mb-5 px-5">
          <Card.Body>
            <h1 className="proj-title text-center mt-4 mb-5">
              <i className="bi bi-file-earmark-bar-graph"></i> Projects
            </h1>
            <Row>
              <Col md={6}>
                <Card className="proj-card mb-5">
                  <Card.Body>
                    <Card.Title className="proj-titles mb-3">
                      Tuition Management System (Android App)
                    </Card.Title>
                    <Card.Text className="proj-desc">
                      For my BSc CS Sem 5 project, I developed an Android
                      tuition management app using Android Studio and Firebase.
                      The app automates tasks like student enrollment,
                      attendance tracking, fee management. It ensures real-time
                      data synchronization and secure access for tutors and
                      administrators. The goal was to streamline administrative
                      tasks, improve communication, and enhance the efficiency
                      of the tuition center.
                    </Card.Text>
                    <a
                      href="https://github.com/ayushmac/TuitionmanagementAndroidApp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <i
                        class="fa-sharp fa-solid fa-arrow-up-right-from-square me-2"
                        style={style}
                      ></i>
                      View Code
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="proj-card mb-5">
                  <Card.Body>
                    <Card.Title className="proj-titles mb-3">
                      Card Genie (Android App)
                    </Card.Title>
                    <Card.Text className="proj-desc">
                      Card Genie is a digital business card management app for
                      Android devices. The app allows users to create and manage
                      multiple types of cards, including Social Media, Personal,
                      Business, and Gaming cards, and share them with others
                      using QR codes. The app uses Firebase Realtime Database
                      for storage, providing real-time synchronization of data
                      between devices and easy scalability.
                    </Card.Text>
                    <a
                      href="https://github.com/ayushmac/CardGenieApp-QR-Code-based-business-card-manager"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <i
                        class="fa-sharp fa-solid fa-arrow-up-right-from-square me-2"
                        style={style}
                      ></i>
                      View Code
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={{ span: 6, offset: 3 }}>
                <Card className="proj-card mb-5">
                  <Card.Body>
                    <Card.Title className="proj-titles mb-3">
                      Portfolio Website
                    </Card.Title>
                    <Card.Text className="proj-desc">
                      This is my first responsive portfolio website! This
                      project showcases my web development skills using React
                      and Bootstrap. Here, you will find information about me,
                      my educational qualifications, and ways to connect with
                      me. Get to know my background, skills, and experiences as
                      a web developer. Feel free to explore my portfolio and
                      reach out through the provided contact links. Thank you
                      for visiting, and I look forward to connecting with you!
                    </Card.Text>
                    <a
                      href="https://github.com/ayushmac/MyPortfolioWebsite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary mt-3 me-3"
                    >
                      <i
                        class="fa-sharp fa-solid fa-arrow-up-right-from-square me-2"
                        style={style}
                      ></i>
                      View Code
                    </a>
                    <a
                      href="https://mistermac.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark mt-3"
                    >
                      <i class="fa-solid fa-link me-2" style={style}></i>
                      Visit Site
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Projects;
