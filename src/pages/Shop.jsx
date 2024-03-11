import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Subhead from '../components/Subhead'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { UseAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';


const Shop = () => {
    const apiUrl = 'https://fakestoreapi.com/products'
    const [data, setdata] = useState([]);
    const { islogin } = UseAuth();
    const { addTocart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get(apiUrl);
            console.log("response", response.data);
            setdata(response.data);
        }
        fetchdata();
    }, [])

    const handleAddtocart = (cartitems) => {
        console.log('cartitems', cartitems)
        addTocart(cartitems);
    }

    const handlelogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <Header />
            <Subhead pageTitle={'Shop'} another={true} />
            <Container>
                <Row >
                    {
                        data.length > 0 && data.map((items, index) => (

                            <Col md={3} key={index} style={{ display: 'flex', gap: '10px' }}>
                                <Card style={{ width: '18rem', height: '600px' }}>
                                    <Card.Img src={items.image} style={{ height: '240px' }} />
                                    <Card.Body style={{ height: '250px' }}>
                                        <Card.Title>{items.title}</Card.Title>
                                        <Card.Text>
                                            <p>category:{items.category}</p>
                                            <p>Rating:{items.rating.rate}</p>
                                            <p>price:{items.price}</p>
                                            {
                                                islogin ? <button onClick={() => handleAddtocart(items)}>Add to cart</button> : <button onClick={handlelogin()}>Add to cart</button>
                                            }
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>


                        ))
                    }
                </Row>
            </Container>

            Shop</div>
    )
}

export default Shop