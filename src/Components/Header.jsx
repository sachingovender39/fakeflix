import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Header(){

    const [show,handleShow] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll',() => {
            if(window.scrollY > 100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return () => {window.removeEventListener('scroll');};
    },[]);
    return <div>
    <Navbar className='NavBar' style={show ?{backgroundColor:'black'} : null} fixed='top'>
    <Navbar.Brand href="#home"><img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' height='50px'></img></Navbar.Brand>
    <Nav className="mr-auto" style={{float:'right'}}>
      <Nav.Link className='navitem' style={{color:'white'}} href="#home">Home</Nav.Link>
      <Nav.Link className='navitem'  style={{color:'white'}}href="#features">TV Shows</Nav.Link>
      <Nav.Link className='navitem' style={{color:'white'}}href="#pricing">Movies</Nav.Link>
      <Nav.Link className='navitem' style={{color:'white'}}href="#pricing">My List</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link className='navitem' href="#home"><img src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' height='40px'></img></Nav.Link>  
    </Nav>
  </Navbar>
    </div>
}

export default Header
