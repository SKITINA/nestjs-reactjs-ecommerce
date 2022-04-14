import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container } from 'react-bootstrap'
import {faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
   <Container>
       <h1 style={{fontFamily: "cursive"}} className='text-center my-5'>About us</h1>
       <h2>This is the best e-commerce store ever</h2>
       <p style={{lineHeight: '35px'}} className="text-black-50">Dolor sunt consectetur Lorem nostrud. Deserunt adipisicing pariatur reprehenderit ex aute labore anim elit duis amet irure anim. Excepteur dolore exercitation ullamco incididunt laborum aliqua excepteur non eu anim ullamco cupidatat et aute.

Commodo id dolore aliquip anim aliqua culpa proident laborum consectetur tempor. Aliquip est ipsum eu occaecat sit culpa aute aute. Qui cupidatat ad excepteur ut consectetur pariatur ea eiusmod dolore nulla velit qui dolor. Laborum elit pariatur veniam est tempor in cillum nulla proident ut dolor ex eiusmod. Cillum tempor officia sunt amet pariatur deserunt magna adipisicing enim exercitation minim deserunt anim. Excepteur officia nulla dolore labore laborum commodo tempor proident esse. Aute sunt sunt ipsum sunt incididunt dolore magna mollit laboris proident eu sit.</p>

<div className='text-center'>
<h4>Find us on media</h4>
    <FontAwesomeIcon icon={faFacebook} className="mx-2 " style={{fontSize:"35px"}}/>
    <FontAwesomeIcon icon={faLinkedin} className="mx-2 " style={{fontSize:"35px"}}/>

</div>

   </Container>
  )
}

export default About