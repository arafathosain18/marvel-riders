import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                    <Navbar.Brand to="#home">Marvel Riders</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" mr-auto header">
                            <Link className='navMenu' to="/home">Home</Link>
                            <Link className='navMenu' to="/destination">Destination</Link>
                            <Link className='navMenu' to="/blog">Blog</Link>
                            <Link className='navMenu' to="/contact">Contact</Link>
                            <Link className='navMenu' to="/login"><button className='btn btn-primary'>Login</button></Link>
                            <button onClick={()=>setLoggedInUser({})} className='btn btn-primary' size="lg">Log out</button>

                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;