import React from 'react'
import { Col, Container, Jumbotron, Row } from 'reactstrap'

const Landing = () => {
    return (
        <Container fluid>
            <Jumbotron fluid>
                <Container fluid>
                    <Row className="d-flex justify-content-center">
                        <Col size="6">
                            Your one-stop solution for knowing exactly what movies are in your folder
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </Container>
    )
}

export default Landing