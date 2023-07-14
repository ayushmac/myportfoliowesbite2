import "./About.css";
import { Image, Card, Row, Col } from "react-bootstrap";
import logo from "../Images/myphoto.jpeg";
import Container from "react-bootstrap/Container";

const style = {
  color: "#ffffff",
};
const About = () => {
  return (
    <div
      id="about-section"
      className="active-section d-flex flex-column min-vh-100 bg-secondary"
    >
      <div className="align-self-center">
        <Container fluid className="p-0">
          <div className="mx-4 pt-4 mt-4 mb-5">
            <Card className="about-card-bg">
              <Card.Body>
                <Row>
                  <Col
                    md={4}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Image
                      src={logo}
                      className="mt-2 img-fluid rounded-circle"
                    />
                  </Col>
                  <Col md={8}>
                    <div className="d-flex flex-column h-100 pt-4 pb-4 me-4 justify-content-center">
                      <h1 className="greet-about-title text-center mb-4">
                        👋 Hi, I'm Ayush !
                      </h1>
                      <Card.Text
                        style={{ textAlign: "justify" }}
                        className="about-body ps-3"
                      >
                        "Passionate about Web development and App development, I
                        bring a dynamic and motivated approach to creating
                        impactful digital experiences. With a strong foundation
                        in HTML, CSS, JavaScript, and Java, I possess the
                        technical skills to craft visually appealing websites
                        and user-friendly mobile applications. Leveraging the
                        power of React, I enjoy building interactive and
                        scalable UI components, allowing for a seamless user
                        experience. Additionally, I am proficient in utilizing
                        Bootstrap to create responsive and modern designs,
                        ensuring that my projects are both aesthetically
                        pleasing and functional. I thrive in collaborative
                        environments, constantly seeking opportunities to expand
                        my knowledge in these frameworks and deliver exceptional
                        results. Let's connect and embark on exciting web and
                        mobile development journeys together."
                      </Card.Text>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Card className="bg-dark text-light about-tech">
                      <Card.Body>
                        <Card.Title className="text-center about-card-title pt-3">
                          Technologies I am Currently Familiar With :
                        </Card.Title>
                        <Card.Text className="text-center about-card-text">
                          <Row className="align-items-center">
                            <Col className="my-4">
                              <i
                                class="fa-brands fa-html5 mx-2"
                                style={style}
                              ></i>
                              <strong className="text-light">HTML</strong>
                            </Col>
                            <Col>
                              <i
                                class="fa-brands fa-css3-alt mx-2"
                                style={style}
                              ></i>
                              <strong className="text-light">CSS</strong>
                            </Col>
                            <Col>
                              <i
                                class="fa-brands fa-square-js mx-2"
                                style={style}
                              ></i>
                              <strong className="text-light">Javascript</strong>
                            </Col>
                            <Col>
                              <i
                                class="fa-brands fa-java mx-2"
                                style={style}
                              ></i>
                              <strong className="text-light">Java</strong>
                            </Col>
                            <Col>
                              <i className="text-light bi bi-bootstrap-fill mx-2"></i>
                              <strong className="text-light">Bootstrap</strong>
                            </Col>
                            <Col>
                              <i
                                className="fa-brands fa-react mx-2"
                                style={style}
                              ></i>
                              <strong className="text-light">React.js</strong>
                            </Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
