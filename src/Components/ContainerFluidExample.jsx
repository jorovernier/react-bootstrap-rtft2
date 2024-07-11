import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ContainerFluidExample() {
  return (
    <Container fluid>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}
