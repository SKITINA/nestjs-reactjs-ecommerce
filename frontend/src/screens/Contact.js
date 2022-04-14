import React from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
const Contact = () => {
  return (
   <Container>
<h1 style={{fontFamily: "cursive"}} className='text-center my-5'>CONTACT US LAYOUT</h1>
<p style={{lineHeight: '35px'}} className="text-dark50">Lorem ipsum dolor sit amet,consecteur adipiscing elit,Sed accumsan venenatis Voluptate voluptate sit ut sit reprehenderit aute in velit reprehenderit aliqua. Ad cillum qui minim labore nisi sunt dolor culpa Lorem eu nulla nostrud nulla quis. Aliqua minim esse qui sunt aliquip enim commodo eiusmod amet. </p>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Row>
      <Col>
    <Form.Control type="name" placeholder="Name" /></Col>
      <Col>
    <Form.Control type="email adress" placeholder="Email Adress" />
  </Col>
    </Row>
    </Form.Group>
    
    
    <Form> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Row>
      <Col>
    <Form.Control type="subject" placeholder="Subject" /></Col>
      <Col>
    <Form.Control type="company" placeholder="Compnay" />
  </Col>
    </Row>
    
    </Form.Group>
    <Form.Group><Form.Control as="textarea" row={3} /></Form.Group>
    
  <Button variant="primary" type="submit" className='mt-2'>
    Submit
  </Button>
</Form>
   
   </Container>
  )
}

export default Contact