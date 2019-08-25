import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PersonalDetails from './PersonalDetails';


class Index extends Component {
    render() {
        return (
          <Container>
              <Row>
                <Col md={12}>
                    <PersonalDetails />
                </Col>
              </Row>
          </Container>
        )
    }
}

export default Index
