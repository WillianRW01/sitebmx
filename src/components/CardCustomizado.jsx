import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ScrollReveal from "scrollreveal";
import "../App.css";
import whats_img from "../img/logo-whatsapp-png 1.png";

export default function CardCustomizado(props) {
  useEffect(() => {
    ScrollReveal().reveal(".card-title", {
      origin: "left",
      distance: "100px",
      scale: 0.9,
      delay: 400,
    });
    ScrollReveal().reveal(".card-text", {
      origin: "right",
      distance: "100px",
      scale: 0.9,
      delay: 400,
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={6} sm={12}>
          <Card
            style={{
              background: "#102E4A", // Cor azul escuro de fundo
              color: "#FFFFFF", // Cor do texto
              marginTop: "10vh",
              overflow: "hidden",
            }}
          >
            {/* Aqui você pode inserir a imagem */}
            {props?.img && (
              <>
                <Card.Img
                  variant="top"
                  src={props.img}
                  style={{ position: "relative" }}
                />
                <a
                  href="https://wa.me/47991518118?text=Olá!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Card id="home">
                    Entre em contato
                    <img
                      src={whats_img}
                      alt="WhatsApp"
                      style={{ height: "50px", width: "50px" }}
                    />
                  </Card>
                </a>
              </>
            )}

            <Card.Body
              style={{ height: "70vh", textAlign: "center", border: "black", overflow:'hidden' }}
            >
              <Card.Title className="card-title">{props.title}</Card.Title>
              <Card.Text className="card-text">{props.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
      </Row>
    </Container>
  );
}
