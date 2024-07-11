import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function OffsetExample() {
  return (
    <Container fluid>
      <Row>
        <Col className='no-border' xs={{span: 5, offset: 5}}>
          <img src='../../img/puppy.png'/>
        </Col>
      </Row>

      <Row>
        <Col className='no-border' xs='12'>
          <h1>Offset Puppy</h1>
          Puppy ipsum dolor sit good dog window paws...
        </Col>
      </Row>
    </Container>
  );
}
