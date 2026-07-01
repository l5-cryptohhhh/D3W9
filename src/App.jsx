import { Container, Navbar, Nav } from 'react-bootstrap';
import ListBooks from './assets/components/ListBooks.jsx';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto" activeKey="shop">
              <Nav.Link href="#" eventKey="shop">Shop</Nav.Link>
              <Nav.Link href="#" eventKey="about">About</Nav.Link>
              <Nav.Link href="#" eventKey="browse">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-4">
        <div className="bg-light text-center py-5 rounded">
          <h1>Welcome to EpiBooks!</h1>
          <p className="text-muted mb-0">We list books</p>
        </div>
      </Container>

      <ListBooks />

      <footer className="bg-dark text-light text-center py-2 mt-4">
        <small>EPICODE - Copyright 2026</small>
      </footer>
    </>
  );
}

export default App;