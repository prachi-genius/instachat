import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import LeftBar from './LeftBar'

class Chat extends Component{
    render() {
        return (
            <Container>
                <Row>
                    <Col >
                        <LeftBar />
                    </Col>
                </Row>
            </Container>
        )
    }
}
// const styles={
//     // leftbar:{
//     //     border:'3px solid black',
//     //     background:'black'
//     // },
//     // chatarea:{
//     //     border:'3px solid black'
//     // },
//     // inputbox:{
//     //     width:'700px'
//     // }
// }

export default Chat



