import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Edit from './Edit'
 class EditProfile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Edit />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EditProfile