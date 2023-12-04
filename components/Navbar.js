import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="http://localhost:3000/Home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Root of Equations" id="basic-nav-dropdown">
              <NavDropdown.Item href="Bisection">Bisection</NavDropdown.Item>
              <NavDropdown.Item href="Flase-Position">Flase-Position</NavDropdown.Item>
              <NavDropdown.Item href="One-Point Iteration">One-Point Iteration</NavDropdown.Item>
              <NavDropdown.Item href="Newton-Raphson">Newton-Raphson</NavDropdown.Item>
              <NavDropdown.Item href="Secant">Secant</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Linear Algebraic" id="basic-nav-dropdown">
              <NavDropdown.Item href="Cramer's-Rule">Cramer's Rule</NavDropdown.Item>
              <NavDropdown.Item href="Gauss-Elimination-Method">Gauss Elimination Method</NavDropdown.Item>
              <NavDropdown.Item href="Gauss-Jordan-Method">Gauss Jordan Method</NavDropdown.Item>
              <NavDropdown.Item href="Matrix-Inversion-Method">Matrix Inversion Method</NavDropdown.Item>
              <NavDropdown.Item href="LU-Decomposition">LU Decomposition</NavDropdown.Item>
              <NavDropdown.Item href="Jacobi-Iteration-Method">Jacobi Iteration Method</NavDropdown.Item>
              <NavDropdown.Item href="Gauss-Seidel-Iteration-Method">Gauss-Seidel Iteration Method</NavDropdown.Item>
              <NavDropdown.Item href="Conjugate-Gradient-Method">Conjugate Gradient Method</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Regression" id="basic-nav-dropdown">
            <NavDropdown.Item href="Cramer's-Rule">Linear Regression</NavDropdown.Item>
            <NavDropdown.Item href="Cramer's-Rule">Multi-Linear Regression</NavDropdown.Item>
            <NavDropdown.Item href="Cramer's-Rule">Non-Linear Regression</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}