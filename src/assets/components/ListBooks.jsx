import { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import books from '../data/fantasy.json';

function ListBooks() {
  const [query, setQuery] = useState('');

  const filtered = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      <Row className="mb-4">
        <Col xs={12}>
          <Form.Control
            type="search"
            placeholder="Search books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        {filtered.map((book) => (
          <Col xs={12} sm={4} key={book.asin} className="mb-4">
            <Card className="border-0 h-100">
              <Card.Img variant="top" src={book.img} />
              <Card.Body className="px-0">
                <Card.Text>{book.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListBooks;