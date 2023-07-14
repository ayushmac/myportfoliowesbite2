import { Container, Card, Row, Col } from "react-bootstrap";
const style = {
  color: "#ffffff",
};

const Error = () => {
  return (
    <div id="error-section">
      <div id="projects-section">
        <Container>
          <br />
          <Card className="proj-card-container mt-5 mb-5 px-5">
            <Card.Body>
              <h1 className="proj-title text-center mt-4 mb-5">Error :(</h1>
              <Row>
                <Card className="text-center proj-card mb-5">
                  <Card.Body>
                    <Card.Title className="proj-titles mb-3">
                      Page you are looking for does not exist
                    </Card.Title>
                    <Card.Text className="proj-desc text-center"></Card.Text>
                    <a
                      href="/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary "
                    >
                      <i
                        class="fa-sharp fa-solid fa-arrow-up-right-from-square me-2"
                        style={style}
                      ></i>
                      Go To Home Page
                    </a>
                  </Card.Body>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Error;
