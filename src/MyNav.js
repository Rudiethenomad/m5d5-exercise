import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import BookList from './BookList';

function MyNavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar href="#hom">Navbar</Navbar>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Browse">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
     
    </>
  );
}

export default MyNavBar;
//export default App;