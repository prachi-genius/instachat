import React, { Component } from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import ConnectionPost from './ConnectionPost'
import Status from './Status'
 class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             statusPictures:['https://via.placeholder.com/100',
             'https://via.placeholder.com/100', 
             'https://via.placeholder.com/100',
             'https://via.placeholder.com/100',
             'https://via.placeholder.com/100',
             'https://via.placeholder.com/100']
        }
    }
    
    render() {
        return (
        <Container>
            <Row>
                <Col style={styles.statusPictures}>
                {
                    this.state.statusPictures.map((picture)=><Status source={picture} />)
                }       
                </Col>
            </Row>
            <Row>
                <Col>
                    <ConnectionPost />
                </Col>
            </Row>

        </Container>
    )
}
}
const styles = {
statusPictures:{
    display:'flex',
    justifyContent:'space-around'
}
}


export default Home
