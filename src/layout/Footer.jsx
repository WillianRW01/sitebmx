import { Col, Container, Row } from "react-bootstrap";
import Mapa from "../components/App.jsx";


export default function Footer() {
  return (
    <Container style={{ padding:"10px 10px 10px 10px", justifyContent: 'center', alignItems: 'center', borderColor: 'black'}}>
      <Row>
        <Col lg={4} sm={12}>
          <div>
            <h4>Sobre a empresa</h4>
            <p></p>
          </div>
        </Col>
        <Col lg={4} sm={12} style={{textDecoration: 'none'}}>
          <div>
            <h4>Redes sociais</h4>
            <p>
              <a href="//facebook.com" target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: '#ffffff' }}>
                Facebook
              </a>
            </p>
            <a href="//Instagram.com" target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: '#ffffff' }}>
                Instagram
              </a>
    

          </div>
        </Col>
        <Col lg={4} sm={12}>
          <Mapa />
        </Col>
      </Row>
    </Container>
  );
}