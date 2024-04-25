import { Container } from "react-bootstrap";
import "../App.css";
import CardCustomizado from "../components/CardCustomizado";

import imagemprin from "../img/R (1).jpg";

export default function Inicial() {
  return (
    <Container style={{ height: "100%", paddingTop: 100  }}>
      <CardCustomizado
  title="Bem-vindo à nova era da BMW!"
  text="Estamos animados em apresentar a BMW , uma empresa dedicada a impulsionar a inovação e moldar o futuro da mobilidade. Aqui, investimos em startups visionárias que estão transformando o setor automotivo e além, com tecnologias que elevam a experiência de dirigir e exploram novas fronteiras da mobilidade elétrica, inteligência artificial e veículos autônomos. Junte-se a nós nesta jornada emocionante rumo à mobilidade do amanhã!"
  img={imagemprin}
  
/>


   
    </Container>
  );
}
