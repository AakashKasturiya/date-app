import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo from '../images/favicon.png'


function Header() {

    return(
        
<>

  <Navbar style={{backgroundColor:"#001e3c"}}>
    <Container>
      <Navbar.Brand>
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      FilterDate
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
    );
}
export default Header;
