import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ColumnSizingExample() {
  return (
    <Container fluid>
      <Row>
        <Col xs='9'>Column width 9</Col>
        <Col xs='3'>Column width 3</Col>
      </Row>

      <Row>
        <Col>Column</Col>
        <Col xs='6'>Column width 6</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>

      <Row>
        <Col xs='1'>Column</Col>
        <Col xs='1'>Column</Col>
        <Col xs='1'>Column</Col>
        <Col xs='1'>Column</Col>
        <Col xs='1'>Column</Col>
        <Col xs='1'>Column</Col>
        <Col xs='1'>Column</Col>
        <Col xs='1'>Column</Col>
        <Col xs='1'>Column</Col>
        <Col xs='1'>Column</Col>
        <Col xs='1'>Column</Col>
        <Col xs='1'>Column</Col>
        <Col xs='1'>Column</Col>
      </Row>
    </Container>
  );
}
