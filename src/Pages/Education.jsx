import { Container } from "react-bootstrap";
import { Image, Card, Row, Col } from "react-bootstrap";
import "./Education.css";
const style = {
  color: "#000000",
};
const Education = () => {
  return (
    <div
      id="education-section"
      className="d-flex flex-column min-vh-100 mb-0 bg-secondary"
    >
      <Container fluid className="p-0">
        <div className="mx-4 pt-4 mt-4">
          <Card className="card-bg-edu">
            <Card.Body>
              <Row>
                <Col md={12}>
                  <div className="d-flex flex-column h-100 pt-4 pb-4 me-4 justify-content-center">
                    <h1 className="title-edu text-center mb-5">
                      <i class="bi bi-mortarboard"></i> Qualifications
                    </h1>

                    <Card.Text className="card-text-edu">
                      <ul className="education-list">
                        <li className="mb-5">
                          <strong>SSC :</strong>
                          <p>
                            St. Aloysius High School, Nallasopara (East)
                            <br />
                            (Year : 2018)
                            <br />
                            Percentage : 79.20%
                          </p>
                        </li>
                        <li className="mb-5">
                          <strong>HSC :</strong>
                          <p>
                            St. Stanislaus High School & Junior College,
                            Nallasopara (West)
                            <br />
                            (Year : 2020)
                            <br />
                            Percentage : 66.15%
                          </p>
                        </li>
                        <li>
                          <strong>BSc in Computer Science :</strong>
                          <p>
                            Bhavans College, Andheri (West) <br />
                            (Year : 2023)
                            <br />
                            CGPA : 9.31
                          </p>
                        </li>
                      </ul>
                    </Card.Text>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Education;
