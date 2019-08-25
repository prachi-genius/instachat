import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {NavLink} from 'react-router-dom'
import Image from 'react-bootstrap/Image'

class PersonalDetails extends Component {
    render() {
        return (
            <Row>
                <Col md={3}>
                <Image src={"https://via.placeholder.com/150"} />
                </Col>
                <Col>
                <Row>
                    <Col><h2>prachi_128</h2>
                    </Col>
                    <Col>
                    <button><NavLink to="/editprofile">Edit Profile</NavLink></button>
                    </Col>
                </Row>
                <Row>
                    <Col><span>24 Posts</span></Col>
                    <Col><span>150 Followers</span></Col>
                    <Col><span>120 Following</span></Col>
                </Row>
                <Row>
                    <Col><p>Darshaner<br />
                    Wish me on 18th Jan</p></Col>
                </Row>
                </Col>
            </Row>
        )
    }
}

export default PersonalDetails
