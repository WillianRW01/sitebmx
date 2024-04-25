import React from 'react';
import { Card, CardTitle, Container } from 'react-bootstrap';
import '../App.css';

function TimelineContatos() {

  return (
    <Card style={{backgroundColor:'#102E4A', height:'20vh', border: 'black', borderCollapse: 'collapse'}}>
      <Card.Title style={{color:'#ffffff',backgroundColor:'#102E4A', border: 'none', justifyContent:'center', textAlign:'center'}}>Contatos</Card.Title>
      
      <Card>
        <Container>
            <CardTitle>Entre em Contato</CardTitle>
        </Container>
  
  
      </Card>
    </Card>
  );
}

export default TimelineContatos;