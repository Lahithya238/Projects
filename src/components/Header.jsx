import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { UseAuth } from '../pages/AuthContext';
import { useCart } from '../pages/CartContext';

const Header = () => {
    const { islogin, logout } = UseAuth();
    const { cartItem } = useCart();
    const [count, setcount] = useState(0);

    useEffect(() => {
        setcount(cartItem.length);

    }, [cartItem])

    const handleLogout = () => {
        logout();
    }
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink to='/' className='nav-link'>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/about' className='nav-link'>About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/services' className='nav-link'>Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/users' className='nav-link'>Users</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/todolist' className='nav-link'>Todolist</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/shop' className='nav-link'>Shop</NavLink>
                                    </li>
                                    {
                                        !islogin && <li className="nav-item">
                                            <NavLink to='/login' className='nav-link'>Login</NavLink>
                                        </li>
                                    }
                                    {
                                        islogin && <button onClick={() => handleLogout()}>Logout</button>
                                    }



                                </ul>
                                <ul style={{ listStyleType: 'none', display: 'flex', paddingLeft: '500px' }}>
                                    <li>
                                        <NavLink to='/login' className='nav-link'>{<FaHeart />}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/cartpage' className='nav-link'>{<FaShoppingCart />}{count}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/login' className='nav-link'>{<CgProfile />}</NavLink>
                                    </li>
                                </ul>


                            </nav>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    )
}

export default Header