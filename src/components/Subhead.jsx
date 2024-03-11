import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Subhead = ({ pageTitle, another }) => {
    return (
        <div>
            <Container fluid style={{ backgroundColor: 'gray', height: '40px', color: 'white' }}>
                <Row>
                    <Col md={4}>{pageTitle}</Col>
                    <Col md={6}>

                        {
                            another && <ul className='refer'>
                                <li><Link to='/'>Home</Link></li>
                                <li>{pageTitle}</li>
                            </ul>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Subhead