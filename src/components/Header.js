import { Col, Container } from "react-bootstrap";

//style
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header  py-4 text-white">
      <Container>
        <div className="d-flex  justify-content-lg-start    justify-content-center">
          <Col lg="4">
            <div className="">
              FARNOOD <span className="text-danger">TODO</span> LIST
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Header;
