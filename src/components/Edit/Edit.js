import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import EditPage from './EditPage'
 class Edit extends Component {
     constructor(props){
         super(props)
         this.state={
             item:'item'
         }
     }

    //  updateVal=(e)=>{
    //      this.setState(
    //          {
    //              [e.target.getAttribute("item")]:e.target.innerText,
    //          }
    //      )
    //  }
    render() {
        const ActiveComp=['Edit Profile',
            'Change Password',
          'Authorized Applications',
            'Email and SMS',
            'Manage Contacts',
            'Privacy and Security']
        return (
            <Container>
                <Row>
                    <Col md={4}>
                        <ListGroup style={StyleSheet.lbar}>
                            {ActiveComp.map(item=>
                            <ListGroup.Item >
                                <p name="item" >{item}</p>
                            </ListGroup.Item>) }
                        </ListGroup>
                    </Col>
                    <Col md={8}>
                    <EditPage />
                    </Col>
                </Row>
            </Container>
            )
    }
}

const styles={
    lbar:{
        height:400
    }
}
export default Edit
