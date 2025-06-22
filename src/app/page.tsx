import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello World</h1>
        </Col>
      </Row>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}
