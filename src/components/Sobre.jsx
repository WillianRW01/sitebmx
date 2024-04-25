import { Card } from "react-bootstrap";
import '../App.css';


export default function Sobre(props) {
  
  return (
    
    <Card style={{background: '#ffffff', marginTop: '15vh', border:'none'}}>
        {
            props?.img && (
              <>
                <Card.Img variant="top" src={props.img} style={{position: "relative", backgroundColor:'#102E4A'}}/>
              </>

                )
        }

  
    <Card.Title style={{color:"Black", textAlign: 'center', justifyContent: 'center'}}>{props.title}</Card.Title>

    <Card.Body className="card-body-sobre">
    <div>
          <p>Bem-vindo à nova era da BMW!
             Estamos animados em apresentar a BMW , uma empresa dedicada a impulsionar a inovação e moldar o futuro da mobilidade
             . Aqui, investimos em startups visionárias que estão transformando o setor automotivo e além, com tecnologias que elevam a experiência de dirigir e exploram novas fronteiras da mobilidade 
             elétrica, inteligência artificial e veículos autônomos. Junte-se a nós nesta jornada emocionante rumo à mobilidade do amanhã!</p>
    </div>
        
    </Card.Body>
    </Card>
    );
}